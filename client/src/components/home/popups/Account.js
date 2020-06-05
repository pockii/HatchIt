import React, { Component } from "react";

export default class Account extends Component {

  state = {
    accountSeen: false,
  };

  onAccountClick = () => {
    this.setState((state) => {
      return {accountSeen: !state.accountSeen};
    });
  };

  onAccountExitClick = () => {
    this.setState(() => {
      return {accountSeen: false};
    });
  };

  render() {
    return (
      <div>
        <button
          class="p-1 hover:text-gray-500 inline-flex flex items-center"
          onClick={this.onAccountClick}
        >
          <svg 
            class="w-6"
            viewBox="0 0 96 96" 
            xmlns="http://www.w3.org/2000/svg" 
            xlink="http://www.w3.org/1999/xlink" 
            id="Icons_User" 
            overflow="hidden">
            <g>
            <circle cx="48" cy="30" r="16" fill="#203864"/>
              <path 
                d="M80 82 80 66C80 63.6 78.8 61.2 76.8 59.6 72.4 56 66.8 53.6 61.2 52 57.2 50.8 52.8 50 48 50 43.6 50 39.2 50.8 34.8 52 29.2 53.6 23.6 56.4 19.2 59.6 17.2 61.2 16 63.6 16 66L16 82 80 82Z" 
                fill="#203864"/>
            </g>
          </svg>
          <span>Account</span>
        </button> 

        {this.state.accountSeen ? (
          <div class="modal">
            <div class="modal-content border border-darkblue rounded-lg bg-purplewindowbg w-3/6 pointer-events-none fixed w-3/6 h-auto top-0 left-0 flex justify-center">
              <button 
                class="p-1 absolute right-0 top-0 hover:text-gray-500" 
                onClick={this.onAccountExitClick}
              >
                <svg
                  class="h-10 w-10"
                  viewBox="0 0 96 96" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xlink="http://www.w3.org/1999/xlink" 
                  id="Icons_Close" overflow="hidden">
                    <path 
                      d="M83.4 21.1 74.9 12.6 48 39.5 21.1 12.6 12.6 21.1 39.5 48 12.6 74.9 21.1 83.4 48 56.5 74.9 83.4 83.4 74.9 56.5 48Z" 
                      stroke-width="0.229186" 
                      fill="#203864"/>
                </svg>
              </button>

              <div class="flex flex-col">
                <p class=" text-darkblue text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Account
                </p>     
              </div>          
            </div>
          </div>
          ) : null }
      </div>
    );
  }
}

