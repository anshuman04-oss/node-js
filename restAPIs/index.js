const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}
  </ul>
  `;
  res.send(html);
});

app.route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(user) {
      return res.json(user);
    } else {
      return res.status(404).json("User not found");
    }
  })
  .put((req, res) => {
    return res.status({ status: "Pending" });
  })
  .delete((req, res) => {
    return res.status({ status: "Pending" });
  })


app.listen(8000, () => console.log("The server is listening on port 8000"));