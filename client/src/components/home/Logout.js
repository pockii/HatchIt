import React, { Component } from "react";

export default class Logout extends Component {
    render() {
        return (
            <div>
                <button
                    class="p-1 hover:text-gray-500 inline-flex flex items-center"
                    onClick={this.props.onLogoutClick}
                >
                    <svg 
                        class="w-6 fill-current"
                        viewBox="0 0 96 96" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_Exit" 
                        overflow="hidden">
                            <path d="M36.315 91 10 80.1 10 14.999 36.315 4.099 36.315 91Z"/>
                            <path d="M63.068 25.866 63.068 38.366 40.315 38.366 40.315 54.366 63.068 54.366 63.068 66.866 87.068 46.366 63.068 25.866Z"/>
                            <path d="M51.068 34.366 57.068 34.366 57.068 14.366 40.315 14.366 40.315 20.366 51.068 20.366 51.068 34.366Z"/>
                            <path d="M51.068 58.366 51.068 74.366 40.315 74.366 40.315 80.366 57.068 80.366 57.068 58.366 51.068 58.366Z"/>
                    </svg>
                    <span>Logout</span>
                </button> 
            </div>
        );
    }
}