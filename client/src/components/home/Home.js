import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { updateUserData } from "../../actions/userdataActions";

import State from "../state/State.js";
import Account from "./popups/Account.js";
import Food from "./Food.js"
import FoodWindow from "./FoodWindow.js";
import Logout from "./Logout.js";
import Coins from "./Coins.js";
import Happiness from "./Happiness.js";

import day from '../pics/day.svg';


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
        this.incrementHappiness = this.incrementHappiness.bind(this)
        this.state = {
            foodSeen: false
        };
    }    

    componentDidMount() {
        setTimeout(this.decrementHappiness(1), this.#minute * 5);
    }

    componentDidUpdate(prevProps) {
        if (this.isMinHappiness() && prevProps.auth.user.happiness !== this.#happiness.min) {
            this.setMinCoins();
        }

        if (this.isMaxHappiness() && prevProps.auth.user.happiness !== this.#happiness.max) {
            this.incrementCoins(100);
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
            name: this.props.auth.user.name,
            happiness: newHappiness,
        };
        this.props.updateUserData(userData); 
    }

    updateHappinessGained(num) {
        const userData = {
            name: this.props.auth.user.name,
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

    foodCallBack = (childData) => {
        this.setState({
            foodSeen: childData
        })
    };

    // Logout
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };    

    render() {   
        return (
            <div class="bg-lightbluebg h-screen">  
                <div class="h-0">
                    <img class="object-contain w-full" 
                        src={day} 
                        alt="Day"></img>
                </div>

                <State incrementHappiness={this.incrementHappiness} />

                <button onClick={() => this.incrementHappiness(10)} class="text-xl">+</button>
                <button onClick={() => this.decrementHappiness(10)} class="text-xl">-</button>

                <div class="absolute top-0 pt-3 pr-16">
                    {this.state.foodSeen ? <FoodWindow foodCallBack={this.foodCallBack} /> : null}
                </div>
                <div class="flex flex-col absolute bottom-0 left-0 w-1/4 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue">
                    <Coins coins={this.props.auth.user.coins} />
                    <Happiness happiness={this.props.auth.user.happiness} />
                </div> 

                <div class="flex flex-col absolute right-0 bottom-0 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue">
                    <Account user={this.props.auth.user} />
                    <Food foodCallBack={this.foodCallBack} />
                    <Logout onLogoutClick={this.onLogoutClick} />
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
    { logoutUser,
      updateUserData }
)(Home);
