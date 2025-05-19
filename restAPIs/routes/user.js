const express = require("express");
const { handleAllUsers, getUserById, patchUser, deleteUser, handleNewUser } = require("../controllers/user");

const router = express.Router();

router.route("/")
  .get("/", handleAllUsers)
  .post("/", handleNewUser);

router.route("/:id")
  .get(async (req, res) => getUserById)
  .patch(async(req, res) => patchUser)
  .delete(async (req, res) => deleteUser)

module.exports = { router };