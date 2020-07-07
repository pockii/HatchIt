import React, { Component } from "react";
import Modal from "react-modal";

import guess from './guess.module.css';
import GuessButtons from './GuessButtons.js';

Modal.defaultStyles.overlay.backgroundColor = 'transparent';

export default class Guess extends Component {
    #minute = 60000;
    #hour = this.#minute * 60;
    #day = this.#hour * 24;

    constructor(props) {
        super(props);
        this.state = {
            guessSeen: false,
            firstChoice: false,
            guessed: false,
            reward: "none",
            available: this.isAvailable()
        };
    }

    onGuessClick = () => {
        if (this.isAvailable()) {
            this.props.guessCallBack(true);
            this.setState((state) => {
                return {
                    guessSeen: !state.guessSeen,
                    firstChoice: this.randomizer(),
                    available: true
                };
            });
        }
    };

    onGuessExitClick = () => {
        this.props.guessCallBack(false);
        this.setState({
            guessSeen: false,
            guessed: false,
            correctGuess: false,
        });
    };

    randomizer() {
        const rand = Math.random();
        return rand >= 0.5;
    };
    
    isAvailable() {
        const dateGuessed = new Date(this.props.dateGuessed);
        const now = new Date();
        return (now - dateGuessed) >= this.#day && !(this.props.isNight); 
    }

    updateButton() {
        if (this.state.available && !(this.props.isNight)) {
            return "p-1 hover:text-gray-600 inline-flex flex items-center text-darkblue"; 
        } else {
            return "p-1 inline-flex flex items-center text-bluegray opacity-75 cursor-not-allowed";
        }
    }

    callBackAfterGuess = (newReward) => {
        this.setState({
            guessed: true,
            reward: newReward,
            available: false
        })
        this.props.updateDateGuessed();
        setTimeout(() => this.setState({available : this.isAvailable()}), this.#day);
    };

    messageAfterGuess() {
        if (this.state.reward === "none") {
            return "Oh no, better luck next time!"
        } else if (this.state.reward === "coins") {
            return "Congratulations! Here's some coins!"
        } else {
            return "Good guess! Your pet is happy!" 
        }
    };

    render() {
        return (
            <div>
                <button
                    class= {this.updateButton()}
                    onClick= {this.onGuessClick}
                >
                    <svg 
                        class="w-6 fill-current"
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_Guess" 
                        overflow="hidden"
                    >
                        <g 
                            transform="translate(-2.000000,50.000000) scale(0.100000,-0.100000)"
                            stroke="none"
                        >
                            <path d="M188 420 c-135 -41 -182 -191 -91 -291 47 -52 81 -69 139 -69 63 0 126 37 159 94 82 140 -52 313 -207 266z m92 -90 c11 -11 20 -29 20 -41 0 -20 -48 -89 -62 -89 -16 0 -7 25 18 51 46 48 -1 106 -50 60 -24 -23 -36 -26 -36 -11 0 19 40 50 65 50 14 0 34 -9 45 -20z m-30 -181 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z"/>
                        </g>
                    </svg>
                    <span>Guess</span>
                </button> 

                <Modal 
                    isOpen={this.state.guessSeen} 
                    onRequestClose={this.onGuessExitClick}
                    shouldCloseOnEsc={true}
                    className={guess.modal}
                >
                    <button 
                        class="p-3 text-darkblue absolute right-0 top-0 hover:text-gray-500" 
                        onClick={this.onGuessExitClick}
                    >
                        <svg
                            class="w-6 fill-current"
                            viewBox="0 0 96 96" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xlink="http://www.w3.org/1999/xlink" 
                            id="Icons_Close" overflow="hidden"
                        >
                            <path 
                                d="M83.4 21.1 74.9 12.6 48 39.5 21.1 12.6 12.6 21.1 39.5 48 12.6 74.9 21.1 83.4 48 56.5 74.9 83.4 83.4 74.9 56.5 48Z" 
                                stroke-width="0.229186" 
                            />
                         </svg>
                    </button>
                        
                    <p class="p-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-flex flex items-center">
                        <svg 
                            class="w-6 fill-current"
                            viewBox="0 0 48 48" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xlink="http://www.w3.org/1999/xlink" 
                            id="Icons_Guess" 
                            overflow="hidden"
                        >
                            <g 
                                transform="translate(-2.000000,48.000000) scale(0.100000,-0.100000)"
                                stroke="none"
                            >
                                <path d="M188 420 c-135 -41 -182 -191 -91 -291 47 -52 81 -69 139 -69 63 0 126 37 159 94 82 140 -52 313 -207 266z m92 -90 c11 -11 20 -29 20 -41 0 -20 -48 -89 -62 -89 -16 0 -7 25 18 51 46 48 -1 106 -50 60 -24 -23 -36 -26 -36 -11 0 19 40 50 65 50 14 0 34 -9 45 -20z m-30 -181 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z"/>
                            </g>
                        </svg>
                        <span>Guess</span>
                    </p>  
                    {this.state.guessed 
                        ? <p class="pt-12 flex justify-center text-darkblue text-2xl"> 
                            {this.messageAfterGuess()} 
                          </p> 
                        : <GuessButtons 
                            firstChoice={this.state.firstChoice} 
                            randomizer={this.randomizer}
                            callBackAfterGuess={this.callBackAfterGuess}
                            incrementHappiness={this.props.incrementHappiness}
                            incrementCoins={this.props.incrementCoins}
                            decrementHappiness={this.props.decrementHappiness} /> 
                    } 
                </Modal>
            </div>
        );
    }
}

