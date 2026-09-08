import http from "http";
//import * as teams from 'teams.js';

import { getAllTeams } from './teams.js';

//import { parse as parseUrl } from "url";

import { addTeam } from './teams.js';



const PORT = 5000;

const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(data === "undefined" ? "Not Found" : JSON.stringify(data));
};

const parseJSONBody = (req) => {
  return new Promise ((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
};

const server = http.createServer(async (req, res) => {
 const url = new URL(req.url, `http://${req.headers.host}`);
const pathname = url.pathname;
const query = Object.fromEntries(url.searchParams);
  const{ method } = req;
  console.log("Pathname:", pathname, "query:", query, "Method:", method);

  if(pathname === "/api/v1/teams" && method === "GET") {
  let teams = getAllTeams();
  return sendJson(res, 200, teams);

}
else if(pathname === "/api/v1/teams" && method === "POST") {
  const newTeam = await parseJSONBody(req);
  const addedTeam = addTeam(newTeam);
  return sendJson(res, 201, addedTeam);
}
else{
  res.statusCode = 404;
}
res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});