const Validator = require("validator");
const isEmpty = require("is-empty");

function validateName(name) {
    let errors = {};

    name = !isEmpty(name) ? name : "";

    if (Validator.isEmpty(name)) {
        errors.name = "Name is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

function validateEventStrict(event) {
    let errors = {};

    event.event = !isEmpty(event.event) ? event.event : "";
    event.totalHappinessGained = event.totalHappinessGained === 0 ? "0" 
                                : !isEmpty(event.totalHappinessGained) ? event.totalHappinessGained + "" 
                                : "";

    if (Validator.isEmpty(event.event)) {
        errors.event = "Description for event is required";
    }

    if (Validator.isEmpty(event.totalHappinessGained)) {
        errors.totalHappinessGained = "Total Happiness gained for event is required";
    }

    if (!Validator.isInt(event.totalHappinessGained, { min: 0 })) {
        errors.totalHappinessGained = "Total Happiness gained for event is invalid";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}


function validateEvent(event) {
    let errors = {};

    event.event = !isEmpty(event.event) ? event.event : "";
    if (event.totalHappinessGained !== undefined) {
        event.totalHappinessGained =  event.totalHappinessGained === 0 ? "0" 
                                        : !isEmpty(event.totalHappinessGained) ? event.totalHappinessGained + "" 
                                        : "";
    }

    if (Validator.isEmpty(event.event)) {
        errors.event = "Description for event is required";
    }

    if (event.totalHappinessGained !== undefined && !Validator.isInt(event.totalHappinessGained, { min: 0 } )) {
        errors.totalHappinessGained = "Total Happpiness gained is invalid";
        isValid = false;
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

// export functions from here 

function validateEventPOST(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.event === undefined) {
        errors.event = "Event is required";
        isValid = false;
    } else {
        const eventError = validateEvent(data.event);
        if (!eventError.isValid) {
            errors.event = eventError.errors;
            isValid = false;
        }
    }

    return {
        errors,
        isValid: nameError.isValid && isValid

    }
}

function validateEventPUT(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.event === undefined) {
        errors.event = "Event is required";
        isValid = false;
    } else {
        const eventError = validateEventStrict(data.event);
        if (!eventError.isValid) {
            errors.event = eventError.errors;
            isValid = false;
        }
    }

    return {
        errors,
        isValid: nameError.isValid && isValid

    }
}

function validateHappinessBreakdown(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.events === undefined) {
        errors.events = "Events is required";
        isValid = false;
    } else {
        errors.events = [];
        for (let i = 0; i < data.events.length; i++) {
            const error = validateEvent(data.events[i]);
            if (!error.isValid) {
                errors.events[i] = error.errors;
                isValid = false;
            }
        }
    }

    return {
        errors,
        isValid: nameError.isValid && isValid
    };
};

module.exports = {
    validateEventPOST,
    validateEventPUT,
    validateHappinessBreakdown
}