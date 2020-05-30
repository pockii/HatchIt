import React, { Component } from "react";
import logo from '../pics/Logo2.png';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
    e.preventDefault();

    const newUserData = {
      name: this.state.name,
      password: this.state.password,
    };

    console.log(newUserData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div class="bg-lightbluebg flex items-center h-screen grid sm:grid-row-8 gap-2 md:grid-cols-8 gap-2 font-test">    
        <div class="border col-span-3 sm:col-span-2 md:col-span-3">
          <img class="object-contain w-full" src={logo} alt="Logo"></img>
        </div>
        <div class="w-6/12 rounded col-span-3 sm:col-span-2 md:col-span-3">
            <p class="font-semibold text-center text-darkblue sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Sign Up
            </p>
            <p class="text-center text-darkblue sm:text-xs md:text-sm xl:text-base">
              {"Here's your chance to care for a pet without the hassle!"}
            </p>
          <form noValidate onSubmit={this.onSubmit} class="content-center px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
            <label class="font-semibold block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1" for="name">
              Username
            </label>
            <input class="appearance-none rounded py-2 px-3 text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight focus:outline-none focus:shadow-outline" 
              onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text" placeholder="Username"/>
            </div>

            <div class="mb-6">
              <label class="font-semibold block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1" for="password">
                Password
              </label>
              <input class="appearance-none rounded py-2 px-3 text-gray-m mb-3 sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-tight focus:outline-none focus:shadow-outline" 
                onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" placeholder="******"/>
            </div>

            <div class="mb-6">
            <label class="font-semibold block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1" for="name">
              Password2
            </label>
            <input class="appearance-none rounded py-2 px-3 text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight focus:outline-none focus:shadow-outline" 
              onChange={this.onChange} value={this.state.password2} error={errors.password2} id="name" type="password" placeholder="******"/>
            </div>
  
            <div class="flex items-center md:justify-around lg:justify-between">
              <button class="bg-white border border-darkblue text-darkblue hover:text-white hover:bg-darkblue sm:text-sm md:text-base lg:text-xl xl:text-2xl py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );  
  }
}

export default SignUp;
