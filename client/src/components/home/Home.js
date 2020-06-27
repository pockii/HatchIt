import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { updateUserData } from "../../actions/userdataActions";

import State from "../state/State.js";
import Account from "./popups/Account/Account.js";
import Night from "./Night.js"
import Food from "./Food.js"
import FoodWindow from "./popups/Food/FoodWindow.js";
import Guess from "./popups/Guess/Guess.js";
import Logout from "./Logout.js";
import Coins from "./Coins.js";
import Happiness from "./Happiness.js";
import Todo from "./popups/Todo/Todo.js"

import day from '../pics/day.svg';
import night from '../pics/night.svg';


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
        this.incrementCoins = this.incrementCoins.bind(this);
        this.updateDateGuessed = this.updateDateGuessed.bind(this);
        this.petState = React.createRef();
        this.state = {
            foodSeen: false,
            maxHappiness: false,
            night: false
        };
    }    

    componentDidMount() {
        if (!this.state.night) {
            setTimeout(this.decrementHappiness(1), this.#minute * 5);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.isMinHappiness() && prevProps.auth.user.happiness !== this.#happiness.min) {
            this.setMinCoins();
        }

        if (this.isMaxHappiness() && prevProps.auth.user.happiness !== this.#happiness.max) {
            this.incrementCoins(100);
            this.setState({
                maxHappiness: true
            })
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
            return false;
        }
    }
      
    setMinCoins() {
        this.updateCoins(this.#coins.min);
    }

    // Happiness
    updateHappiness(newHappiness) {
        const userData = {
            name: this.name,
            happiness: newHappiness,
        };
        this.props.updateUserData(userData); 
    }

    updateHappinessGained(num) {
        const userData = {
            name: this.props.auth.name,
            totalHappinessGained: this.props.auth.user.totalHappinessGained + num,
        };
        this.props.updateUserData(userData); 
    }

    incrementHappiness(num) {
        if (this.props.auth.user.happiness + num <= this.#happiness.max) {
            this.updateHappiness(this.props.auth.user.happiness + num);
            this.updateHappinessGained(num);
            return true;  
        } else {
            this.updateHappiness(this.#happiness.max);
            this.updateHappinessGained(this.#happiness.max - this.props.auth.user.happiness);
            return false;
        }
    }

    decrementHappiness(num) {
        if (this.props.auth.user.happiness - num >= this.#happiness.min) {
            this.updateHappiness(this.props.auth.user.happiness - num);
            return true;
        } else {
            this.updateHappiness(this.#happiness.min);
            return false; 
        }
    }      
    
    isMinHappiness() {
        return this.props.auth.user.happiness === this.#happiness.min;
    }
     
    isMaxHappiness() {
        return this.props.auth.user.happiness === this.#happiness.max;
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
            foodSeen: childData
        })
    };
    
    // Guess
    updateDateGuessed() {
        const userData = {
            name: this.name,
            dateGuessed: new Date()
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

    // Logout
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };    

    render() {   
        return (
            <div class={this.decideBackground()}>  
                <div class="h-0">
                    <img class="object-contain w-full " 
                        src={this.state.night ? night : day} 
                        alt="Background"></img>
                </div>

                <State  
                    ref={this.petState}
                    incrementHappiness={this.incrementHappiness} 
                    maxHappiness={this.state.maxHappiness} />

                <button onClick={() => this.incrementHappiness(10)} class="text-lg">+</button>
                <button onClick={() => this.decrementHappiness(10)} class="text-lg">-</button>

                <div class="flex justify-center">
                    {this.state.foodSeen ? <FoodWindow foodCallBack={this.foodCallBack} /> : null}
                </div>

                <div class="flex flex-col absolute bottom-0 left-0 w-1/4 sm:text-xs md:text-sm lg:text-base xl:text-xl">                    
                    <Coins 
                        coins={this.props.auth.user.coins}
                        isNight={this.state.night} />
                    <Happiness 
                        happiness={this.props.auth.user.happiness} 
                        isNight={this.state.night} />
                </div> 
                
                <div class="absolute right-0 bottom-0 sm:text-xs md:text-sm lg:text-base xl:text-xl">
                    <div class="grid grid-flow-col grid-cols-2 grid-rows-4">
                        <div />
                        <div /> 
                        <Todo 
                            todoCallBack={this.todoCallBack}
                            isNight={this.state.night} />
                        <Guess 
                            dateGuessed={this.props.auth.user.dateGuessed}
                            updateDateGuessed={this.updateDateGuessed}
                            incrementHappiness={this.incrementHappiness} 
                            decrementHappiness={this.decrementHappiness} 
                            incrementCoins={this.incrementCoins}
                            guessCallBack={this.guessCallBack} 
                            isNight={this.state.night} />
                        <Account 
                            user={this.props.auth.user} 
                            isNight={this.state.night} />
                        <Night nightCallBack={this.nightCallBack} />
                        <Food 
                            foodCallBack={this.foodCallBack} 
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
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    {   
        logoutUser,
        updateUserData 
    }
)(Home);
