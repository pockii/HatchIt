const express = require("express");
const router = express.Router();

// Load pet validation
const validation = require("../../validation/petinfo");
const validatePetPOST = validation.validatePetPOST;
const validatePetPUT = validation.validatePetPUT;
const validatePetInfo = validation.validatePetInfo;

// Load pet model
const PetInfo = require("../../models/PetInfo");

// @route POST api/petinfos/
// @desc Add pet
// @access Public
// req.body is a petInfo, happiness is optional
router.post("/", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "PetInfo to add cannot be empty!" });
    }

    // PetInfo validation
    const { errors, isValid } = validatePetInfo(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    PetInfo.findOne({ name: req.body.name })
        .then((result) => {
            if (!result) {
                const newPet = new PetInfo({
                    name: req.body.name,
                    pets: req.body.pets,
                });
                newPet
                    .save()
                    .then((petInfo) => res.json(petInfo))
                    .catch((err) => console.log(err));
            } else {
                return res.json(result);
            }
        })
        .catch((err) => {
            res.status(500).send({
                err,
                message: "Error adding petInfo of user with username: " + req.body.name,
            });
        });
});

// @route POST api/petinfos/pet
// @desc Add pet
// @access Public
/*
req.body = {
    name: "name",
    pet: {
        pet: "pet name",
        happiness: 12 // integer, optional
        unlocked: true // boolean
    }
}
*/
router.post("/pet", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Pet to add cannot be empty!" });
    }

    // PetInfo validation
    const { errors, isValid } = validatePetPOST(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    PetInfo.findOne({ name: req.body.name })
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: `Cannot add pet of user with username ${req.body.name}. Maybe petInfo was not found!` });
            } else if (result.pets.findIndex(pet => pet.pet.localeCompare(req.body.pet.pet) === 0) !== -1) {
                return res.status(404).json({ message: `Cannot add pet of user with username ${req.body.name}. Pet already exists!` });
            } else {
                const len = result.pets.length;
                result.pets.push(req.body.pet);
                result.save()
                    .then(petInfo => res.json(petInfo.pets[len]))
                    .catch(err => console.log(err));
            }
        })
        .catch((err) => {
            res.status(500).send({
                err,
                message: "Error adding pet of user with username: " + req.body.name,
            });
        });
});

// @route PUT api/petinfos/pet
// @desc Update pet
// @access Public
// replaces the pet object
/*
req.body = {
    name: "name",
    pet: {
        pet: "pet name",
        happiness: 12 // integer,
        unlocked: true // boolean
    }
}
*/
router.put("/pet", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Pet to update cannot be empty!" });
    }

    // PetInfo validation
    const { errors, isValid } = validatePetPUT(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    PetInfo.findOne({ name: req.body.name })
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: `Cannot update pet of user with username ${req.body.name}. Maybe petInfo was not found!` });
            } else {
                const index = result.pets.findIndex(pet => pet.pet.localeCompare(req.body.pet.pet) === 0);
                if (index == -1) {
                    return res.status(404).json({ message: `Cannot update pet of user with username ${req.body.name}. Pet was not found.` });
                } else {
                    result.pets[index].happiness = parseInt(req.body.pet.happiness);
                    result.pets[index].unlocked = req.body.pet.unlocked;
                    result.save()
                        .then(petInfo => res.json(result.pets[index]))
                        .catch(err => console.log(err));
                }
            }
        })
        .catch((err) => {
            res.status(500).send({
                err,
                message: "Error updating pet of user with username: " + req.body.name,
            });
        });
});

module.exports = router;