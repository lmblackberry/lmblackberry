const router = require("express").Router();
const User = require("../models/User");
const Product = require("../models/Product");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      id: req.body.id,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      suite: req.body.suite,
      profilePicture: req.body.profilePicture,
      premium: req.body.premium,
      isAdmin: req.body.isAdmin,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      country: req.body.country,
      paypal: req.body.paypal,

    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

//PRODUCT REGISTER 
router.post("/product", async (req, res) => {
  try {

    //create new user
    const newProduct = new Product({
      id: req.body.id,
      user_id: req.body.user_id,
      SKU: req.body.SKU,
      name: req.body.name,
      description: req.body.description,
      from: req.body.from,
      img: req.body.img,
      units: req.body.units,
      invoice: req.body.invoice,
      status: req.body.status,
      price: req.body.price,
      in_tracking: req.body.in_tracking,
      in_shipper: req.body.in_shipper,
      package_lengh: req.body.package_lengh,
      package_width: req.body.package_width,
      package_height: req.body.package_height,
      weight: req.body.weight,
      purchased_by: req.body.purchased_by,
      purchased_date: req.body.purchased_date,
      arrived_date: req.body.arrived_date,
      shipped_date: req.body.shipped_date,
      notes: req.body.notes,
      combined_package_id: req.body.combined_package_id,
      out_tracking: req.body.out_tracking,
      out_shipper: req.body.out_shipper,
    });

    //save user and respond
    const product = await newProduct.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;