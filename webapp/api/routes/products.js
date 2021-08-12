const Product = require("../models/Product");
const router = require("express").Router();
const bcrypt = require("bcrypt");



//get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) throw Error("No products");
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products
router.get("/:_id", async (req, res) => {
  try {
    const products = await Product.findById(req.params._id);
    if (!products) throw Error("No products");
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;