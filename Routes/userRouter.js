const express = require("express");
const {
  getAllusers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
} = require("../Controller/usersController");

const router = express.Router();

router.route("/").get(getAllusers).post(addUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
