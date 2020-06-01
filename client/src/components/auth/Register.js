import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import logo from '../pics/Logo2.png';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history); 
  };

  render() {
    const { errors } = this.state;

    return (
      <div class="bg-lightbluebg flex items-center h-screen grid sm:grid-row-10 gap-2 md:grid-cols-10 gap-2 font-test">    
        <div class="col-span-3 sm:col-span-2 md:col-span-3">
          <img class="object-contain w-full" 
            src={logo} 
            alt="Logo"></img>
        </div>
        <div class="w-6/12 rounded sm:col-span-5 md:col-span-6">
          <p class="font-semibold text-center text-darkblue sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Sign Up
          </p>

          <p class="text-center text-darkblue sm:text-xs md:text-sm xl:text-base">
            {"Here's your chance to care for a pet without the hassle!"}
          </p>

          <form noValidate onSubmit={this.onSubmit} 
            class="px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="font-semibold block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1" 
                for="name">
                Username
              </label>
              <input 
              class="appearance-none rounded py-2 px-3 text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight focus:outline-none focus:shadow-outline" 
                onChange={this.onChange} 
                value={this.state.name} 
                error={errors.name} 
                id="name" 
                type="text" 
                placeholder="Username"
                className={classnames("", {
                  invalid: errors.name
                })}
                />
                <p class="text-red-700 sm:text-xs md:text-sm lg:text-base xl:text-lg">
                  {errors.name}
                </p>
            </div>

            <div class="mb-6">
              <label class="font-semibold block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1" 
                for="password">
                Password
              </label>
              <input 
                class="appearance-none rounded py-2 px-3 text-gray-m mb-3 sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-tight focus:outline-none focus:shadow-outline" 
                onChange={this.onChange} 
                value={this.state.password} 
                error={errors.password} 
                id="password" 
                type="password" 
                placeholder="******"
                className={classnames("", {
                  invalid: errors.password
                })}
                />
                <p class="text-red-700 sm:text-xs md:text-sm lg:text-base xl:text-lg">
                 {errors.password}
               </p>  
            </div>

            <div class="mb-6">
              <label class="font-semibold block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1" 
                for="password2">
                Confirm Password
              </label>
              <input 
                class="appearance-none rounded py-2 px-3 text-gray-m mb-3 sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-tight focus:outline-none focus:shadow-outline" 
                onChange={this.onChange} 
                value={this.state.password2} 
                error={errors.password2} 
                id="password2" 
                type="password" 
                placeholder="******"
                className={classnames("", {
                  invalid: errors.password2
                })}/>
                <p class="text-red-700 sm:text-xs md:text-sm lg:text-base xl:text-lg">
                  {errors.password2}
                </p>
            </div>  
            
            <div class="flex items-center flex content-around md:justify-around lg:justify-between">
              <button class="bg-white border border-darkblue text-darkblue hover:text-white hover:bg-darkblue sm:text-sm md:text-base lg:text-xl xl:text-2xl py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">
                Sign Up
              </button>
                <Link to="/" 
                  class="inline-block align-baseline sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue hover:text-gray-500">
                  Back to Sign In
                </Link>
            </div>
          </form>
        </div>
      </div>
    );  
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
