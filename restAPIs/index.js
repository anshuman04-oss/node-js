const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
  </ul>
  `;
  res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if(user) {
    return res.json(user);
  } else {
    return res.status(404).json("User not found");
  }
});

app.listen(8000, () => console.log("The server is listening on port 8000"));