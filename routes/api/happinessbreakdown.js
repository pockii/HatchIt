const express = require("express");
const router = express.Router();

// Load event validation
const validation = require("../../validation/happinessbreakdown");
const validateEventPOST = validation.validateEventPOST;
const validateEventPUT = validation.validateEventPUT;
const validateHappinessBreakdown = validation.validateHappinessBreakdown;

// Load happinessBreakdown model
const HappinessBreakdown = require("../../models/HappinessBreakdown");

// @route POST api/happinessbreakdown/
// @desc Add happinessBreakdown
// @access Public
// req.body is a happinessBreakdown, totalHappinessGained is optional
router.post("/", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "HappinessBreakdown to add cannot be empty!" });
    }

    // HappinessBreakdown validation
    const { errors, isValid } = validateHappinessBreakdown(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    HappinessBreakdown.findOne({ name: req.body.name })
        .then((result) => {
            if (!result) {
                const newHappinessBreakdown = new HappinessBreakdown({
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
});

// @route POST api/happinessbreakdown/event
// @desc Add event
// @access Public
/*
req.body = {
    name: "name",
    event: {
        event: "event description",
        totalHappinessGained: 12 // integer, optional
    }
}
*/
router.post("/event", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Event to add cannot be empty!" });
    }

    // Event validation
    const { errors, isValid } = validateEventPOST(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    HappinessBreakdown.findOne({ name: req.body.name })
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: `Cannot add event of user with username ${req.body.name}. Maybe happinessBreakdown was not found!` });
            } else if (result.events.findIndex(event => event.event.localeCompare(req.body.event.event) === 0) !== -1) {
                return res.status(404).json({ message: `Cannot add event of user with username ${req.body.name}. Event already exists!` });
            } else {
                const len = result.events.length;
                result.events.push(req.body.event);
                result.save()
                    .then(happinessBreakdown => res.json(happinessBreakdown.events[len]))
                    .catch(err => console.log(err));
            }
        })
        .catch((err) => {
            res.status(500).send({
                err,
                message: "Error adding event of user with username: " + req.body.name,
            });
        });
});

// @route PUT api/happinessbreakdown/event
// @desc Update event
// @access Public
// replaces the event object
/*
req.body = {
    name: "name",
    event: {
        event: "event description",
        totalHappinessGained: 12 // integer
    }
} 
*/
router.put("/event", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Event to update cannot be empty!" });
    }

    // Event validation
    const { errors, isValid } = validateEventPUT(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    HappinessBreakdown.findOne({ name: req.body.name })
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: `Cannot update event of user with username ${req.body.name}. Maybe happinessBreakdown was not found!` });
            } else {
                const index = result.events.findIndex(event => event.event.localeCompare(req.body.event.event) === 0);
                if (index == -1) {
                    return res.status(404).json({ message: `Cannot update event of user with username ${req.body.name}. Event was not found.` });
                } else {
                    result.events[index].totalHappinessGained += parseInt(req.body.event.totalHappinessGained);
                    result.save()
                        .then(happinessBreakdown => res.json(result.events[index]))
                        .catch(err => console.log(err));
                }
            }
        })
        .catch((err) => {
            res.status(500).send({
                err,
                message: "Error updating event of user with username: " + req.body.name,
            });
        });
});

module.exports = router;