const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ name: req.body.name }).then(user => {
    if (user) {
      return res.status(400).json({ name: "Username already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
    
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
    
  const name = req.body.name;
  const password = req.body.password;
    
  // Find user by username
  User.findOne({ name }).then(user => {
      
  // Check if user exists
    if (!user) {
      return res.status(404).json({ namenotfound: "Username not found" });
    }
      
  // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route GET api/users/userdata
// @desc return userdata
// @access Public
router.get("/userdata", (req, res) => {
  User.findOne({ name: req.body.name }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ namenotfound: "Username not found" });
    } else {
      return res.send(user);
    }
  });
})

// @route PUT api/users/userdata
// @desc update userdata
// @access Public
router.put("/userdata", (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Data to update can not be empty!" });
  }

  User.findOneAndUpdate({ name: req.body.name }, req.body, {useFindAndModify: false})
    .then(result => {
      if (!result) {
        res.status(404).send({
          message: `Cannot update data of user with username=${name}. Maybe User was not found!`
        });
      } else res.send({ message: "Data was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating data of user with username=" + name
      });
    });
})

module.exports = router;