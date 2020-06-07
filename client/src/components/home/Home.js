import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getUserData, updateUserData } from "../../actions/userdataActions";

import State from "../state/State.js";
import Account from "./popups/Account.js";
import Logout from "./Logout.js";
import Coins from "./Coins.js";
import Happiness from "./Happiness.js";

import day from '../pics/day.svg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.auth.user.name;
        this.updateCoins = this.updateCoins.bind(this);
        this.updateHappiness = this.updateHappiness.bind(this);
    }

    componentDidMount() {
        if (!this.props.userdata.hasUserData) {
            const userData = { name: this.name };
            this.props.getUserData(userData); 
        }  
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };    

    updateCoins(newCoins) {
        const userData = {
            name: this.name,
            coins: newCoins,
        };
        this.props.updateUserData(userData); 
    }

    updateHappiness(newHappiness) {
        const userData = {
            name: this.name,
            happiness: newHappiness,
        };
        this.props.updateUserData(userData); 
    }

    render() {
        return (
            <div class="bg-lightbluebg h-screen">  
                <div class="h-0">
                    <img class="object-contain w-full" 
                        src={day} 
                        alt="Day"></img>
                </div>

                <State />
                <p> {this.name + " " + this.props.userdata.hasUserData + ""} </p>
              
                <div class="flex flex-col absolute bottom-0 left-0 w-1/4 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue">
                    <Coins coins={this.props.userdata.user.coins} updateCoins={this.updateCoins} />
                    <Happiness happiness={this.props.userdata.user.happiness} updateHappiness={this.updateHappiness} />
                </div> 

                <div class="flex flex-col absolute right-0 bottom-0 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue">
                    <Account />
                    <Logout onLogoutClick={this.onLogoutClick} />
                </div>               
            </div>
        );
    }
}

Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    getUserData: PropTypes.func.isRequired,
    updateUserData: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    userdata: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    userdata: state.userdata
});

export default connect(
    mapStateToProps,
    { logoutUser,
      getUserData,
      updateUserData }
)(Home);