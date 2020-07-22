const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load userdata validation
const validateUserData = require("../../validation/userdata");

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
                    name: user.name,
                    coins: user.coins,
                    petId: user.petId,
                    totalHappinessGained: user.totalHappinessGained,
                    tasks: user.tasks,
                    subTasks: user.subTasks,
                    dateGuessed: user.dateGuessed,
                    dateRescued: user.dateRescued,
                    bestTimeRescued: user.bestTimeRescued
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

// @route PUT api/users/userdata
// @desc update userdata
// @access Public
router.put("/userdata", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Data to update cannot be empty!" });
    }

    // userData validation 
    const { errors, isValid } = validateUserData(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOneAndUpdate({ name: req.body.name }, req.body, {returnOriginal: false, useFindAndModify: false})
        .then(result => {
            if (!result) {
                return res.status(404).send({
                    message: `Cannot update data of user with username ${req.body.name}. Maybe User was not found!`
                });
            } else {
                res.json(result);
            }
        })
        .catch(err => {
            return res.status(500).send({
                message: "Error updating data of user with username: " + req.body.name
            });
        });
});

router.post("/userdata/pet", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "PetInfo to add cannot be empty!" });
    }

    // // HappinessBreakdown validation
    // const { errors, isValid } = validateHappinessBreakdown(req.body);

    // // Check validation
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    User.findOne({ name: req.body.name })
        .then((result) => {
            if (!result) {
                const newPetInfo = new HappinessBreakdown({
                    name: req.body.name,
                    events: req.body.events,
                });
                newHappinessBreakdown
                    .save()
                    .then((happinessBreakdown) => res.json(happinessBreakdown))
                    .catch((err) => console.log(err));
            } else {
                return res.json(result);
            }
        })
        .catch((err) => {
            res.status(500).send({
                err,
                message: "Error adding happinessBreakdown of user with username: " + req.body.name,
            });
        });
})

module.exports = router;
