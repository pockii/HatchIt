import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { updateUserData } from "../../actions/userdataActions";
import {
    addHappinessBreakdown,
    addHappinessEvent,
    updateHappinessEvent
} from "../../actions/happinessBreakdownActions"
import {
    addPetInfo,
    addPet,
    updatePet
} from "../../actions/petInfoActions";

import State from "../state/State.js";
import Account from "./popups/Account/Account.js";
import HappinessBreakdown from "./popups/Account/HappinessBreakdown.js"
import Night from "./Night.js"
import Food from "./popups/Food/Food.js"
import FoodWindow from "./popups/Food/FoodWindow.js";
import Guess from "./popups/Guess/Guess.js";
import RescueButton from "./Rescue/RescueButton.js";
import Logout from "./Logout.js";
import Coins from "./Coins/Coins.js";
import Happiness from "./Happiness.js";
import Todo from "./popups/Todo/Todo.js";
import Shop from "./popups/Shop/Shop.js";
import ShopWindow from "./popups/Shop/ShopWindow.js";
import InsufficientCoinsError from "./Coins/InsufficientCoinsError.js";

import day from '../pics/day.svg';
import night from '../pics/night.svg';
import grass from '../pics/grass.png';
import night_grass from '../pics/night_grass.png'

class Home extends Component {

    #coins = { min: 0 };
    #happiness = {
        min: 0,
        max: 100
    };
    #minute = 60000;
    
    constructor(props) {
        super(props);
        this.name = this.props.auth.user.name;
        this.incrementHappiness = this.incrementHappiness.bind(this);
        this.decrementHappiness = this.decrementHappiness.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.incrementCoins = this.incrementCoins.bind(this);
        this.decrementCoins = this.decrementCoins.bind(this);
        this.updateDateGuessed = this.updateDateGuessed.bind(this);
        this.petState = React.createRef();
        this.onHappinessBreakdownClick = this.onHappinessBreakdownClick.bind(this);
        this.onHappinessBreakdownExitClick = this.onHappinessBreakdownExitClick.bind(this);
        this.showInsufficientCoinsError = this.showInsufficientCoinsError.bind(this);
        this.onInsufficientCoinsErrorExitClick = this.onInsufficientCoinsErrorExitClick.bind(this);
        this.state = {
            foodSeen: false,
            shopSeen: false,
            night: false,
            happinessBreakdownSeen: false,
            insufficientCoinsErrorSeen: false,
        };
    }    

    componentDidMount() {
        if (!this.state.night) {
            setTimeout(() => this.decrementHappiness(1), this.#minute * 5);
        }
        const happinessBreakdown = {
            name: this.name,
            events: [
                { event: "Devour Food" },
                { event: "Complete Todo" }, 
                { event: "Complete Sub Todo" },
                { event: "Play Guess" },
                { event: "Play Rescue" }
            ]
        };
        this.props.addHappinessBreakdown(happinessBreakdown);

        const petInfo = {
            name: this.name,
            pets: [
                { pet: "Rabbit", unlocked: true },
                { pet: "Cat", unlocked: false }
            ]
        }
        this.props.addPetInfo(petInfo);
    }

    componentDidUpdate(prevProps) {
        const prevPetId = prevProps.auth.user.petId;
        const prev_id = prevProps.petInfo.petIdArr[prevPetId];
        const prevHappiness = prevProps.petInfo.pets[prev_id].happiness;
        if (this.isMinHappiness() && prevHappiness !== this.#happiness.min) {
            this.setMinCoins();
        }

        if (this.isMaxHappiness()) {
            this.updateHappinessGained(this.#happiness.min);
            this.incrementCoins(100);
            this.onHappinessBreakdownClick();
        }
    }

    // Coins
    updateCoins(newCoins) {
        const userData = {
            name: this.name,
            coins: newCoins,
        };
        this.props.updateUserData(userData); 
    }

    incrementCoins(num) {
        this.updateCoins(this.props.auth.user.coins + num);
    }

    decrementCoins(num) {
        if (this.props.auth.user.coins - num >= this.#coins.min) {
            this.updateCoins(this.props.auth.user.coins - num);
            return true;
        } else {
            this.showInsufficientCoinsError();
            return false;
        }
    }

    setMinCoins() {
        this.updateCoins(this.#coins.min);
    }
    
    showInsufficientCoinsError() {
        this.setState({
            insufficientCoinsErrorSeen: true
        });
        setTimeout(this.onInsufficientCoinsErrorExitClick, 1000);
    }

    onInsufficientCoinsErrorExitClick() {
        this.setState({
            insufficientCoinsErrorSeen: false
        });
    }    

    // Happiness
    getCurrentHappiness() {
        const petId = this.props.auth.user.petId;
        const _id = this.props.petInfo.petIdArr[petId];
        const currentHappiness = this.props.petInfo.pets[_id].happiness;
        return currentHappiness;
    }

    updateHappiness(newHappiness) {
        const petId = this.props.auth.user.petId;
        const _id = this.props.petInfo.petIdArr[petId];
        const newPet = {
            pet: this.props.petInfo.pets[_id].pet,
            happiness: newHappiness,
            unlocked: true
        };
        this.props.updatePet({
            name: this.name,
            pet: newPet
        });
    } 

    addEvent(event) {
        this.props.addHappinessEvent({
            name: this.name,
            event
        });
    }

    updateHappinessGainedAndHappiness(newHappiness, num, event) {
        this.updateHappiness(newHappiness); 

        // update Total Happiness Gained
        const userData = {
            name: this.name,
            happinessGained: this.props.auth.user.happinessGained + num,
            totalHappinessGained: this.props.auth.user.totalHappinessGained + num,
        };
        this.props.updateUserData(userData); 

        // update Happiness Breakdown
        this.props.updateHappinessEvent({
            name: this.name,
            event: {
                event: event,
                totalHappinessGained: num
            }            
        })
    }

    incrementHappiness(num, event) {
        const currentHappiness = this.getCurrentHappiness();
        if (currentHappiness + num <= this.#happiness.max) {
            this.updateHappinessGainedAndHappiness(currentHappiness + num, num, event);
            return true;  
        } else {
            this.updateHappinessGainedAndHappiness(this.#happiness.max, this.#happiness.max - currentHappiness, event);
            return false;
        }
    }

    decrementHappiness(num) {
        const currentHappiness = this.getCurrentHappiness();
        if (currentHappiness - num >= this.#happiness.min) {
            this.updateHappiness(currentHappiness - num);
            return true;
        } else {
            this.updateHappiness(this.#happiness.min);
            return false; 
        }
    }    

    updateHappinessGained(newHappinessGained) {
        const userData = {
        name: this.name,
        happinessGained: newHappinessGained
    };
        this.props.updateUserData(userData); 
    }   

    isMinHappiness() {
        return this.getCurrentHappiness() === this.#happiness.min;
    }
     
    isMaxHappiness() {
        return this.props.auth.user.happinessGained >= 100;
    }

    onHappinessBreakdownClick() {
        this.setState((state) => {
            return { 
                ...state,
                happinessBreakdownSeen: !state.happinessBreakdownSeen 
            };
        });
    }

    onHappinessBreakdownExitClick() {
        this.setState({ 
            happinessBreakdownSeen: false 
        });
    }

    // Background
    decideBackground() {
        if (this.state.night) {
            return "bg-nightbluebg h-screen overflow-hidden";
        } else {
            return "bg-lightbluebg h-screen overflow-hidden";
        }
    }

    // Night
    nightCallBack = (childData) => {
        this.setState({
            night: childData
        });
        if (childData) {
            this.petState.current.toggleSleeping();
        } else {
            this.petState.current.revertToNormal();
        }
    };

    // FoodWindow
    foodCallBack = (childData) => {
        this.setState({
            foodSeen: childData,
            shopSeen: false
        })
    };

    getFoodSeen() {
        return this.state.foodSeen && !this.state.shopFoodSeen;
    }

    // ShopWindow 
    shopCallBack = (childData) => {
        this.setState({
            foodSeen: false,
            shopSeen: childData
        })
    }

    getShopSeen() {
        return this.state.shopSeen && !this.state.foodSeen;
    }
    
    // Guess
    updateDateGuessed() {
        const userData = {
            name: this.name,
            dateGuessed: new Date(),
        };
        this.props.updateUserData(userData); 
    };
      
    // GuessState
    guessCallBack = (isGuessing) => {
        if (isGuessing) {
            this.petState.current.toggleGuessing();
        } else {
            this.petState.current.revertToNormal();
        }
    };

    // TodoState
    todoCallBack = (completedTask) => {
        if (completedTask && !(this.state.night)) {
            this.petState.current.toggleProductive();
        }
    }

    updatePetId(newPetId) {
        const userData = {
            name: this.name,
            petId: newPetId
        }
        this.props.updateUserData(userData);
    }

    // Logout
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };    

    render() {   
        if (!this.props.petInfo.postedPetInfo) {
            const petInfo = {
                name: this.name,
                pets: [
                    { pet: "Rabbit", unlocked: true },
                    { pet: "Cat", unlocked: false }
                ]
            }
            this.props.addPetInfo(petInfo);
        }

        return (
            <div class={this.decideBackground()}>  
                <div class="h-0">
                    <img class="object-contain w-full" 
                        src={this.state.night ? night : day} 
                        alt="Background"></img>
                </div>                
                
                <div class="absolute bottom-0">
                    <img class="object-contain w-full"
                        src={this.state.night ? night_grass : grass}
                        alt="Floor"></img>
                </div>

                <State  
                    ref={this.petState}
                    incrementHappiness={num => this.incrementHappiness(num, "Devour Food")} 
                    decrementCoins={this.decrementCoins}
                    happiness={this.props.petInfo.pets[this.props.petInfo.petIdArr[this.props.auth.user.petId]].happiness} 
                    petId={this.props.auth.user.petId} 
                    key={this.props.auth.user.petId} />

                <div class="flex justify-center pt-3 h-full w-full">
                    {this.getFoodSeen() ? <FoodWindow foodCallBack={this.foodCallBack} /> : null}
                    {this.getShopSeen() ? <ShopWindow 
                                                petId={this.props.auth.user.petId} 
                                                shopCallBack={this.shopCallBack} 
                                                decrementCoins={this.decrementCoins} /> : null}
                </div>

                <div class="flex justify-center flex content-center"> 
                    {this.state.insufficientCoinsErrorSeen 
                        ? <InsufficientCoinsError 
                            insufficientCoinsErrorSeen={this.state.insufficientCoinsErrorSeen} 
                            onInsufficientCoinsErrorExitClick={this.onInsufficientCoinsErrorExitClick}/> 
                        : null}
                </div>

                <div class="flex flex-col absolute bottom-0 left-0 w-1/4 sm:text-xs md:text-sm lg:text-base xl:text-xl">                    
                    <Coins 
                        coins={this.props.auth.user.coins}
                        isNight={this.state.night} />
                    <Happiness 
                        happiness={this.props.petInfo.pets[this.props.petInfo.petIdArr[this.props.auth.user.petId]].happiness} 
                        petId={this.props.auth.user.petId}
                        isNight={this.state.night} />
                </div> 
                
                <div class="absolute right-0 bottom-0 sm:text-xs md:text-sm lg:text-base xl:text-xl">
                    <button class="2xl" onClick={() => this.incrementHappiness(20, "Devour Food")}> + </button> 
                    <button class="2xl" onClick={() => this.decrementHappiness(20)}> - </button> 
                    <div class="grid grid-flow-col grid-cols-2 grid-rows-5">
                        <button class="2xl" onClick={() => this.updatePetId(0)}> change 0 </button> 
                        <button class="2xl" onClick={() => this.updatePetId(1)}> change 1 </button> 
                        <Todo 
                            todoCallBack={this.todoCallBack}
                            isNight={this.state.night} 
                            incrementHappiness={this.incrementHappiness} />
                        <RescueButton 
                            isNight={this.state.night} 
                            dateRescued={this.props.auth.user.dateRescued} />
                        <Guess 
                            dateGuessed={this.props.auth.user.dateGuessed}
                            updateDateGuessed={this.updateDateGuessed}
                            incrementHappiness={num => this.incrementHappiness(num, "Play Guess")} 
                            decrementHappiness={this.decrementHappiness} 
                            incrementCoins={this.incrementCoins}
                            guessCallBack={this.guessCallBack} 
                            isNight={this.state.night} />
                        <Account 
                            user={this.props.auth.user} 
                            happiness={this.getCurrentHappiness()}
                            isNight={this.state.night} 
                            onHappinessBreakdownClick={this.onHappinessBreakdownClick} />
                        <HappinessBreakdown 
                            totalHappinessGained={this.props.auth.user.totalHappinessGained}
                            happinessBreakdown={this.props.happinessBreakdown}
                            happinessBreakdownSeen={this.state.happinessBreakdownSeen}
                            onHappinessBreakdownExitClick={this.onHappinessBreakdownExitClick} />
                        <Night nightCallBack={this.nightCallBack} />
                        <Food 
                            foodCallBack={this.foodCallBack} 
                            isNight={this.state.night} />
                        <Shop 
                            shopCallBack={this.shopCallBack}
                            isNight={this.state.night} />
                        <Logout 
                            onLogoutClick={this.onLogoutClick} 
                            isNight={this.state.night} />
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    updateUserData: PropTypes.func.isRequired,
    addHappinessBreakdown: PropTypes.func.isRequired,
    addHappinessEvent: PropTypes.func.isRequired,
    updateHappinessEvent: PropTypes.func.isRequired,
    addPetInfo: PropTypes.func.isRequired,
    addPet: PropTypes.func.isRequired,
    updatePet: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    happinessBreakdown: PropTypes.object.isRequired,
    petInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    happinessBreakdown: state.happinessBreakdown,
    petInfo: state.petInfo
});

export default connect(
    mapStateToProps,
    {   
        logoutUser,
        updateUserData,
        addHappinessBreakdown,
        addHappinessEvent,
        updateHappinessEvent,
        addPetInfo,
        addPet,
        updatePet
    }
)(Home);