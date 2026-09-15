let teams = [
  {
    id: 1,
    tname: "Byte Us",
    tl: "Arsh",
    members: 6,
  },
  {
    id: 2,
    tname: "Code Crew",
    tl: "Astha",
    members: 5,
  },
];

// Get all teams
export const getAllTeams = () => {
  return teams;
};

// Get one team by ID
export const getTeamById = (id) => {
  return teams.find((team) => team.id === id);
};

// Add a new team
export const addTeam = (teamData) => {
  const newId =
    teams.length > 0
      ? Math.max(...teams.map((team) => team.id)) + 1
      : 1;

  const newTeam = {
    id: newId,
    ...teamData,
  };

  teams.push(newTeam);
  return newTeam;
};

// Update an existing team
export const updateTeam = (id, updatedData) => {
  const teamIndex = teams.findIndex((team) => team.id === id);

  if (teamIndex === -1) {
    return null;
  }

  teams[teamIndex] = {
    ...teams[teamIndex],
    ...updatedData,
    id,
  };

  return teams[teamIndex];
};

// Delete a team
export const deleteTeam = (id) => {
  const teamIndex = teams.findIndex((team) => team.id === id);

  if (teamIndex === -1) {
    return null;
  }

  const deletedTeam = teams.splice(teamIndex, 1)[0];
  return deletedTeam;
};