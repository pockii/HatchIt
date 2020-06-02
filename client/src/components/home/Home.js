import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import State from "../state/State.js";

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
        <button
         class="absolute bottom-0 right-0 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue hover:text-gray-500"
         onClick={this.onLogoutClick}
        >
         Logout
        </button>        
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