import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../pics/Logo2.png';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    
    const userData = {
      name: this.state.name,
      password: this.state.password,
    };

    this.props.loginUser(userData); 
    // handle redirect within our component
    // don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;

    return (
      <div class="bg-lightbluebg flex items-center h-screen grid sm:grid-row-8 gap-2 md:grid-cols-10 gap-2 font-test">    
        <div class="col-span-3 sm:col-span-2 md:col-span-3">
          <img class="object-contain w-full" 
            src={logo} 
            alt="Logo"></img>
        </div>
        
        <div class="w-6/12 rounded sm:col-span-5 md:col-span-6">          
          <p class="font-semibold text-center text-darkblue sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Sign In
          </p>
          
          <p class="text-center text-darkblue sm:text-xs md:text-sm xl:text-base">
            {"Here's your chance to care for a pet without the hassle!"}
          </p>

          <form noValidate onSubmit={this.onSubmit} 
            class="px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="font-semibold block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1" for="name">
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
                  invalid: this.state.name.email || this.state.name.namenotfound
                })}/>
                <span class="text-red-500">
                  {errors.name}
                  {errors.namenotfound}
                </span>
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
                  invalid: errors.password || errors.passwordincorrect
                })}/>
                <span class="text-red-500">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
            </div>
  
            <div class="flex items-center flex content-around md:justify-around lg:justify-between">
              <button class="bg-white border border-darkblue text-darkblue hover:text-white hover:bg-darkblue sm:text-sm md:text-base lg:text-xl xl:text-2xl py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">
                Sign In
              </button>
                <Link to="/register" 
                  class="inline-block align-baseline sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue hover:text-gray-500">
                  Sign Up
                </Link>
            </div>
          </form>
        </div>
      </div>
    );  
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
