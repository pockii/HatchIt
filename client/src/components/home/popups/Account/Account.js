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
            <div class={this.props.isNight ? "text-lightbluebg hover:text-white" : "text-darkblue hover:text-gray-500"}>
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
                        
                    <p class="p-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-flex flex items-center">
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
                    </p>   
                    <p class="pl-5 pr-5">
                        <Scrollbars 
                            autoHeight
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={400}>
                            <p class="flex justify-center sm:text-base md:text-gl lg:text-xl xl:text-2xl">  
                                <p class="text-darkblue">
                                    Username: {this.props.user.name}<br/>
                                    Coins: {this.props.user.coins}<br/>
                                    Happiness Level: {this.props.user.happiness}<br/>
                                    Total Happiness Gained: {this.props.user.totalHappinessGained} <br/>
                                    Total Todos Completed: {this.props.user.tasks} <br/>
                                    Total Sub Todos Completed: {this.props.user.subTasks} <br/>
                                    Date guessed: {this.props.user.dateGuessed} <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </p>
                            </p>         
                        </Scrollbars>
                    </p>
                </Modal>
            </div>
        );
    }
}

