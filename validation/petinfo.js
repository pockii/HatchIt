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

function validatePetStrict(pet) {
    let errors = {};

    pet.pet = !isEmpty(pet.pet) ? pet.pet : "";
    pet.happiness = pet.happiness === 0 ? "0" 
                                : !isEmpty(pet.happiness) ? pet.happiness + "" 
                                : "";
<<<<<<< HEAD
    pet.unlocked = !isEmpty(pet.unlocked) ? pet.unlocked + "" : ""
=======
    pet.unlocked = !isEmpty(pet.unlocked) ? pet.unlocked + "" : "";
>>>>>>> 4a474be1182107b7d9405ecb28553a6bf0f6da53

    if (Validator.isEmpty(pet.pet)) {
        errors.pet = "Name of pet is required";
    }

    if (Validator.isEmpty(pet.happiness)) {
        errors.happiness = "Happiness for pet is required";
    }

    if (!Validator.isInt(pet.happiness, { min: 0, max: 100 })) {
        errors.happiness = "Happiness for pet is invalid";
    }

    if (Validator.isEmpty(pet.unlocked)) {
        errors.happiness = "Unlocked for pet is required";
    }

    if (!Validator.isBoolean(pet.unlocked)) {
        errors.happiness = "Unlocked for pet is invalid";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}


function validatePet(pet) {
    let errors = {};

    pet.pet = !isEmpty(pet.pet) ? pet.pet : "";
    if (pet.happiness !== undefined) {
        pet.happiness =  pet.happiness === 0 ? "0" 
                                        : !isEmpty(pet.happiness) ? pet.happiness + "" 
                                        : "";    
    }
    pet.unlocked = !isEmpty(pet.unlocked) ? pet.unlocked + "" : "";

    if (Validator.isEmpty(pet.pet)) {
        errors.pet = "Name of pet is required";
    }

    if (pet.happiness !== undefined && !Validator.isInt(pet.happiness, { min: 0, max: 100 } )) {
        errors.happiness = "Happiness is invalid";
        isValid = false;
    }

    if (!Validator.isBoolean(pet.unlocked)) {
        errors.unlocked = "Unlocked is invalid";
        isValid = false;
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

// export functions from here 

function validatePetPOST(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.pet === undefined) {
        errors.pet = "Pet is required";
        isValid = false;
    } else {
        const petError = validatePet(data.pet);
        if (!petError.isValid) {
            errors.pet = petError.errors;
            isValid = false;
        }
    }

    return {
        errors,
        isValid: nameError.isValid && isValid

    }
}

function validatePetPUT(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.pet === undefined) {
        errors.pet = "Pet is required";
        isValid = false;
    } else {
        const petError = validatePetStrict(data.pet);
        if (!petError.isValid) {
            errors.pet = petError.errors;
            isValid = false;
        }
    }

    return {
        errors,
        isValid: nameError.isValid && isValid

    }
}

function validatePetInfo(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.pets === undefined) {
        errors.pets = "Pets is required";
        isValid = false;
    } else {
        errors.pets = [];
        for (let i = 0; i < data.pets.length; i++) {
            const error = validatePet(data.pets[i]);
            if (!error.isValid) {
                errors.pets[i] = error.errors;
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
    validatePetPOST,
    validatePetPUT,
    validatePetInfo
}