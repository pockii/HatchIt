const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateUserData(userData) {
    let errors = {};
    
    userData.name = !isEmpty(userData.name) ? userData.name : "";
    if (userData.coins !== undefined) {
        userData.coins = userData.coins === 0 ? "0" 
                            : !isEmpty(userData.coins) ? userData.coins + "" 
                            : "";
    }
    if (userData.petId !== undefined) {
        userData.petId = userData.petId === 0 ? "0" 
                            : !isEmpty(userData.petId) ? userData.petId + "" 
                            : "";
    }
    if (userData.petsUnlocked !== undefined) {
        userData.petsUnlocked = !isEmpty(userData.petsUnlocked) ? userData.petsUnlocked + "" : "";
    }
    if (userData.happiness !== undefined) {
        userData.happiness = !isEmpty(userData.happiness) ? userData.happiness + "" : "";
    }
    if (userData.totalHappinessGained !== undefined) {
        userData.totalHappinessGained = userData.totalHappinessGained === 0 ? "0" 
                                        : !isEmpty(userData.totalHappinessGained) ? userData.totalHappinessGained + "" 
                                        : "";

    }
    if (userData.tasks !== undefined) {
        userData.tasks = userData.tasks === 0 ? "0" 
                        : !isEmpty(userData.tasks) ? userData.tasks + "" 
                        : "";
    }
    if (userData.subTasks !== undefined) {
        userData.subTasks = userData.subTasks === 0 ? "0" 
                            : !isEmpty(userData.subTasks) ? userData.subTasks + "" 
                            : "";
    }
    if (userData.dateGuessed !== undefined) {
        userData.dateGuessed = !isEmpty(userData.dateGuessed) ? userData.dateGuessed : "";
    }
    if (userData.dateRescued !== undefined) {
        userData.dateRescued = !isEmpty(userData.dateRescued) ? userData.dateRescued : "";
    }
    if(userData.bestTimeRescued !== undefined) {
        userData.bestTimeRescued = userData.bestTimeRescued === 0 ? "0" 
                                    : !isEmpty(userData.bestTimeRescued) ? userData.bestTimeRescued + "" 
                                    : "";
    }

    if (Validator.isEmpty(userData.name)) {
        errors.name = "Name is required";
    }   

    if (userData.coins !== undefined && !Validator.isInt(userData.coins, { min: 0 } )) {
        errors.coins = "Coins is invalid";
        isValid = false;
    }

    if (userData.petId !== undefined && !Validator.isInt(userData.petId, { min: 0 } )) {
        errors.petId = "petId is invalid";
        isValid = false;
    }

    // if (userData.happiness !== undefined && !Validator.isInt(userData.happiness, { min: 0 , max: 100 } )) {
    //     errors.happiness = "Happiness is invalid";
    //     isValid = false;
    // }

    if (userData.totalHappinessGained !== undefined && !Validator.isInt(userData.totalHappinessGained, { min: 0 } )) {
        errors.totalHappinessGained = "Total Happpiness gained is invalid";
        isValid = false;
    }

    if (userData.tasks !== undefined && !Validator.isInt(userData.tasks, { min: 0 } )) {
        errors.tasks = "Tasks is invalid";
        isValid = false;
    }

    if (userData.subTasks !== undefined && !Validator.isInt(userData.subTasks, { min: 0 } )) {
        errors.subTasks = "subTasks is invalid";
        isValid = false;
    }
    
    if (userData.dateGuessed !== undefined && !Validator.isISO8601(userData.dateGuessed)) {
        errors.dateGuessed = "dateGuessed is invalid";
        isValid = false;
    } 
    
    if (userData.dateRescued !== undefined && !Validator.isISO8601(userData.dateRescued)) {
        errors.dateRescued = "dateRescued is invalid";
        isValid = false;
    } 

    if (userData.bestTimeRescued !== undefined && !Validator.isFloat(userData.bestTimeRescued)) {
        errors.bestTimeRescued = "bestTimeRescued is invalid";
        isValid = false;
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
}
