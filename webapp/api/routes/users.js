const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");



//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No users");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one user
router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;