import http from "http";
import { getAllTeams, addTeam, getTeamById } from "./teams.js";
import { parse as parseUrl } from "url";

const PORT = 5000;

const sendJson = (res, statusCode, data, keyword, msg) => {
  res.writeHead(statusCode, { "Content-type": "application/json" });
  res.end(data === "undefined" ? "" : JSON.stringify({ [keyword]: msg, data }));
};

const parseJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const query = Object.fromEntries(url.searchParams);
  const { method } = req;
  console.log("Pathname:", pathname, "query:", query, "Method:", method);

  if (pathname === "/api/v1/teams" && method === "GET") {
    let teams = getAllTeams();
    return sendJson(res, 200, teams);
  } else if (pathname === "/api/v1/teams" && method === "POST") {
    const { tname, tl, members } = await parseJSONBody(req);
    if (!tname || !tl || !members)
      return sendJson(res, 400, {
        error: "Team Name, Team Leader, or Members not defined",
      });
    const Team = addTeam({ tname, tl, members });
    return sendJson(res, 201, "team", "Message", "Team registered successfully");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});