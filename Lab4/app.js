import http from "http";

import {
  getAllTeams,
  getTeamById,
  addTeam,
  updateTeam,
  deleteTeam,
} from "./teams.js";

const PORT = 5000;

// Send JSON response
const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
};

// Read JSON request body
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
  const method = req.method;

  console.log("Pathname:", pathname, "Method:", method);

  // GET all teams
  if (pathname === "/api/v1/teams" && method === "GET") {
    const teams = getAllTeams();

    return sendJson(res, 200, {
      message: "Teams fetched successfully",
      data: teams,
    });
  }

  // POST a new team
  if (pathname === "/api/v1/teams" && method === "POST") {
    try {
      const { tname, tl, members } = await parseJSONBody(req);

      if (!tname || !tl || members === undefined) {
        return sendJson(res, 400, {
          message:
            "Team name, team leader and number of members are required",
        });
      }

      if (
        typeof members !== "number" ||
        !Number.isInteger(members) ||
        members <= 0
      ) {
        return sendJson(res, 400, {
          message: "Members must be a positive integer",
        });
      }

      const newTeam = addTeam({
        tname,
        tl,
        members,
      });

      return sendJson(res, 201, {
        message: "Team registered successfully",
        data: newTeam,
      });
    } catch (error) {
      return sendJson(res, 400, {
        message: "Invalid JSON body",
      });
    }
  }

  /*
    Matches:
    /api/v1/teams/1
    /api/v1/teams/2
  */
  const teamRoute = pathname.match(
    /^\/api\/v1\/teams\/(\d+)$/
  );

  // GET team by ID
  if (teamRoute && method === "GET") {
    const id = Number(teamRoute[1]);
    const team = getTeamById(id);

    if (!team) {
      return sendJson(res, 404, {
        message: `Team with ID ${id} not found`,
      });
    }

    return sendJson(res, 200, {
      message: "Team fetched successfully",
      data: team,
    });
  }

  // PUT - update team
  if (teamRoute && method === "PUT") {
    try {
      const id = Number(teamRoute[1]);
      const existingTeam = getTeamById(id);

      if (!existingTeam) {
        return sendJson(res, 404, {
          message: `Team with ID ${id} not found`,
        });
      }

      const { tname, tl, members } = await parseJSONBody(req);

      if (
        members !== undefined &&
        (typeof members !== "number" ||
          !Number.isInteger(members) ||
          members <= 0)
      ) {
        return sendJson(res, 400, {
          message: "Members must be a positive integer",
        });
      }

      const updatedTeam = updateTeam(id, {
        ...(tname !== undefined && { tname }),
        ...(tl !== undefined && { tl }),
        ...(members !== undefined && { members }),
      });

      return sendJson(res, 200, {
        message: "Team updated successfully",
        data: updatedTeam,
      });
    } catch (error) {
      return sendJson(res, 400, {
        message: "Invalid JSON body",
      });
    }
  }

  // DELETE team
  if (teamRoute && method === "DELETE") {
    const id = Number(teamRoute[1]);
    const deletedTeam = deleteTeam(id);

    if (!deletedTeam) {
      return sendJson(res, 404, {
        message: `Team with ID ${id} not found`,
      });
    }

    return sendJson(res, 200, {
      message: "Team deleted successfully",
      data: deletedTeam,
    });
  }

  // Route not found
  return sendJson(res, 404, {
    message: "Route not found",
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});