import React, { Component } from "react";

export default class Account extends Component {
  onExitClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div class="modal">
        <div class="modal-content border border-darkblue rounded-lg bg-purplewindowbg w-3/6 pointer-events-none fixed w-3/6 h-auto top-0 left-0 flex justify-center">
          <span class="close" onClick={this.onExitClick}>
            <svg
              class="absolute right-0 top-0 h-10 w-10"
              viewBox="0 0 96 96" 
              xmlns="http://www.w3.org/2000/svg" 
              xlink="http://www.w3.org/1999/xlink" 
              id="Icons_Close" overflow="hidden">
                <path 
                  d="M83.4 21.1 74.9 12.6 48 39.5 21.1 12.6 12.6 21.1 39.5 48 12.6 74.9 21.1 83.4 48 56.5 74.9 83.4 83.4 74.9 56.5 48Z" 
                  stroke-width="0.229186" 
                  fill="#203864"/>
            </svg>
          </span>

          <div class="flex flex-col">
            <p class=" text-darkblue text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Account
            </p> 
            
          </div>          
        </div>
      </div>
    );
  }
}

