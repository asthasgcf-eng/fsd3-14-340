import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({"message": "Hello Express!"});
});

app.get("/about", (req, res) => {
  res.send({"message": "We are FSD Developers"});
});

app.post("/login", (req, res) => {
  res.send({"message": "user login"});
});

app.put("/user/update/1", (req, res) => {
  res.send({"message": "user update"});
});

app.delete("/user/1", (req, res) => {
  res.send({"message": "remove user 1"});
});

app.use((req, res) => {
  res.status(404).send({"message": "404 Not Found"});
});

app.listen(3000, () => console.log("Server is running on port 3000"));