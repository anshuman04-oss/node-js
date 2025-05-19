const { User } = require("../models/user");

async function handleAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function getUserById(req, res) {
  const id = Number(req.params.id);
  const user = await User.findById(id);
  if(!user) return res.status(404).json("User not found");
  return res.json(user);
}

async function patchUser(req, res) {
  const id = req.params.id;
  const body = req.body;
  await User.findByIdAndUpdate(id, {last_name: "Changed"});
  return res.status(200).json("Success");
}

async function deleteUser(req, res) {
  const id = Number(req.params.id);
  await User.findByIdAndDelete(id);
  return res.status(200).json("Success");
}

async function handleNewUser(req, res) {
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address) {
    res.status(400).json("All the parameters are requested");
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    ip_address: body.ip_address,
    address: body.address
  });

  res.status(201).json({msg: "Success", id: result._id});
}

module.exports = {
  handleAllUsers,
  getUserById,
  patchUser,
  deleteUser,
  handleNewUser
};