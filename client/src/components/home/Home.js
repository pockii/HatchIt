import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import State from "../state/State.js";
import Account from "./popups/Account.js";
import Coins from "./Coins.js";
import Happiness from "./Happiness.js";

import day from '../pics/day.svg';

class Home extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    
    return (
      <div class="bg-lightbluebg h-screen">  
        <div class="h-0">
          <img class="object-contain w-full" 
            src={day} 
            alt="Day"></img>
        </div>

        <State />
        
        <div class="flex flex-col absolute bottom-0 left-0 w-1/4 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue">
          <Coins />
          <Happiness />
        </div>

        <div class="flex flex-col absolute right-0 bottom-0 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue">

          <Account />

          <button
            class="p-1 hover:text-gray-500 inline-flex flex items-center"
            onClick={this.onLogoutClick}
          >
            <svg 
              class="w-6"
              viewBox="0 0 96 96" 
              xmlns="http://www.w3.org/2000/svg" 
              xlink="http://www.w3.org/1999/xlink" 
              id="Icons_Exit" 
              overflow="hidden">
              <path 
                d="M36.315 91 10 80.1 10 14.999 36.315 4.099 36.315 91Z" 
                fill="#203864"/>
              <path 
                d="M63.068 25.866 63.068 38.366 40.315 38.366 40.315 54.366 63.068 54.366 63.068 66.866 87.068 46.366 63.068 25.866Z" 
                fill="#203864"/>
              <path 
                d="M51.068 34.366 57.068 34.366 57.068 14.366 40.315 14.366 40.315 20.366 51.068 20.366 51.068 34.366Z" 
                fill="#203864"/>
              <path 
                d="M51.068 58.366 51.068 74.366 40.315 74.366 40.315 80.366 57.068 80.366 57.068 58.366 51.068 58.366Z" 
                fill="#203864"/>
            </svg>
            <span>Logout</span>
          </button> 
        </div>               
      </div>
    );
  }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);