import React, { Component } from "react";
import Modal from "react-modal";
import { Scrollbars } from 'react-custom-scrollbars';

import account from './account.module.css';

Modal.defaultStyles.overlay.backgroundColor = 'transparent';

export default class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountSeen: false,
        };
        this.onAccountExitClick = this.onAccountExitClick.bind(this);
    }

    onAccountClick = () => {
        this.setState((state) => {
            return {accountSeen: !state.accountSeen};
        });
    };

    onAccountExitClick = () => {
        this.setState( {accountSeen: false} );
    };

    render() {
        return (
            <div class={this.props.isNight ? "text-lightbluebg hover:text-white" : "text-darkblue hover:text-gray-600"}>
                <button
                    class="p-1 inline-flex flex items-center"
                    onClick={this.onAccountClick}
                >
                    <svg 
                        class="w-6 fill-current"
                        viewBox="0 0 96 96" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_User" 
                        overflow="hidden">
                        <g>
                        <circle cx="48" cy="30" r="16"/>
                        <path d="M80 82 80 66C80 63.6 78.8 61.2 76.8 59.6 72.4 56 66.8 53.6 61.2 52 57.2 50.8 52.8 50 48 50 43.6 50 39.2 50.8 34.8 52 29.2 53.6 23.6 56.4 19.2 59.6 17.2 61.2 16 63.6 16 66L16 82 80 82Z"/>
                        </g>
                    </svg>
                    <span>Account</span>
                </button> 

                <Modal 
                    isOpen={this.state.accountSeen} 
                    onRequestClose={this.onAccountExitClick}
                    shouldCloseOnEsc={true}
                    className={account.modal}
                >
                    <button 
                        class="p-3 text-darkblue absolute right-0 top-0 hover:text-gray-500" 
                        onClick={this.onAccountExitClick}
                    >
                        <svg
                            class="w-6 fill-current"
                            viewBox="0 0 96 96" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xlink="http://www.w3.org/1999/xlink" 
                            id="Icons_Close" overflow="hidden">
                                <path 
                                d="M83.4 21.1 74.9 12.6 48 39.5 21.1 12.6 12.6 21.1 39.5 48 12.6 74.9 21.1 83.4 48 56.5 74.9 83.4 83.4 74.9 56.5 48Z" 
                                stroke-width="0.229186" 
                                />
                         </svg>
                    </button>
                        
                    <div class="p-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-flex flex items-center">
                        <svg 
                            class="w-6 fill-current"
                            viewBox="0 0 96 96" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xlink="http://www.w3.org/1999/xlink" 
                            id="Icons_User" 
                            overflow="hidden">
                            <g>
                                <circle cx="48" cy="30" r="16"/>
                                <path d="M80 82 80 66C80 63.6 78.8 61.2 76.8 59.6 72.4 56 66.8 53.6 61.2 52 57.2 50.8 52.8 50 48 50 43.6 50 39.2 50.8 34.8 52 29.2 53.6 23.6 56.4 19.2 59.6 17.2 61.2 16 63.6 16 66L16 82 80 82Z"/>
                            </g>
                        </svg>
                        <span>Account</span>

                        <div class="pl-5">
                            <button 
                                class="p-1 border-2 border-darkblue rounded-lg bg-yellowbarbg inline-flex text-darkblue sm:text-sm md:text-base lg:text-lg xl:text-xl hover:text-gray-500" 
                                onClick={this.props.onHappinessBreakdownClick}>
                                     <svg 
                                        class="w-6"
                                        viewBox="0 -10 96 96" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        xlink="http://www.w3.org/1999/xlink" 
                                        overflow="hidden">
                                            <g id="Icons_SparklingHeart">
                                                <path 
                                                    d="M48.005 29.428C35.405 4.428 14.005 19.428 14.005 33.428 14.005 38.976 16.39 44.871 19.883 50.546 22.0814 47.4582 23.7749 44.0406 24.9 40.421 27.8 49.682 33.969 56.985 41.791 60.421 38.4279 61.9229 35.3925 64.0705 32.857 66.742 37.599 71.6309 42.6594 76.2006 48.005 80.421 48.005 80.421 82 54.425 82 33.428 82 19.43 60.6 4.432 48.005 29.428ZM63.657 46.421C62.6758 42.9638 60.2541 40.0962 57.01 38.55 60.2539 37.004 62.6755 34.1368 63.657 30.68 64.6376 34.136 67.0576 37.0031 70.3 38.55 67.0574 40.0971 64.6373 42.9646 63.657 46.421Z" 
                                                    fill="#203864"/>
                                                <path 
                                                    d="M24.9 72.674C22.3435 67.7879 18.6527 63.5861 14.137 60.421 18.6525 57.2553 22.3433 53.0532 24.9 48.167 27.4567 53.0538 31.1483 57.256 35.665 60.421 31.1486 63.5859 27.457 67.7877 24.9 72.674Z" 
                                                fill="#203864"/>
                                            </g>
                                    </svg>
                                Happiness Breakdown
                            </button>
                        </div>
                    </div>   

                    <div class="pl-5 pr-5">
                        <Scrollbars 
                            autoHeight
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={400}>
                            <p class="flex justify-center sm:text-base md:text-gl lg:text-xl xl:text-2xl text-darkblue">  
                                Username: {this.props.user.name}<br/>
                                Coins: {this.props.user.coins}<br/>
                                Happiness Level: {this.props.user.happiness}<br/>
                                Total Happiness Gained: {this.props.user.totalHappinessGained} <br/>
                                Total Todos Completed: {this.props.user.tasks} <br/>
                                Total Sub Todos Completed: {this.props.user.subTasks} <br/>
                                Date guessed: {(this.props.user.dateGuessed).substring(0,10)} <br/>
                                Date rescued: {(this.props.user.dateRescued).substring(0,10)} <br/>
                                Best Time for Rescue minigame: {(this.props.user.bestTimeRescued).toFixed(1) + " seconds"} <br />
                                <br />
                            </p>         
                        </Scrollbars>
                    </div>
                </Modal>
            </div>
        );
    }
}

