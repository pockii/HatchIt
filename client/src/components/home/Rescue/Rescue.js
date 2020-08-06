import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { updateUserData } from "../../../actions/userdataActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RescueState from './RescueState.js'

import day from '../../pics/day.svg';
import grass from '../../pics/grass.png';

class Rescue extends Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.updateCoins = this.updateCoins.bind(this);
        this.state = {
            timeLeft: 10,
            running: false,
            timer: 0 
        }
    }
    
    updateCoins(successful) {
        const timeRescued = 10 - this.state.timeLeft;
        let newCoins = this.props.auth.user.coins + (successful) ? 10 : -5;

        if (newCoins < 0) {
            newCoins = 0;
        }

        // update coins, dateRescued and bestTimeRescued
        const userData = {
            name: this.props.auth.user.name,
            coins: this.props.auth.user.coins + 2,
            dateRescued: new Date(),
            bestTimeRescued: (timeRescued < this.props.auth.user.bestTimeRescued) ? timeRescued : this.props.auth.user.bestTimeRescued
        }
        this.props.updateUserData(userData);
    }

    startTimer() {
        this.setState({
            running: true
        })
        
        if (this.state.timeLeft > 0) {
            this.timer = setInterval(this.countDown, 100);
        }
    }

    countDown() {
        const newTimeLeft = (this.state.timeLeft - 0.1).toFixed(1);      
        
        // Time's up
        if (newTimeLeft < 0) {
            clearInterval(this.timer);
            this.setState({
                running: false
            })
            this.updateCoins(false);
        } else {
            this.setState({
                timeLeft: newTimeLeft,
            });
        }
    }

    displayMessage() {
        if (this.state.running) {
            return <div class="flex justify-center text-2xl"> 
                         <p class="whitespace-pre text-blue-700"> {this.state.timeLeft} </p> seconds left  
                    </div>
        } else if (this.state.timeLeft === 10) {
            return <p class="flex justify-center text-xl"> Click repeatedly on your stuck pet to rescue it! </p> 
        } else if (this.state.timeLeft > 0) {
            return <p class="flex justify-center text-xl"> 
                        Congratulations, you've saved your pet with {this.state.timeLeft} seconds left! <br />
                        Your pet gives you some coins as thanks. </p>
        } else {
            return <p class="flex justify-center px-2 text-xl text-darkblue">  
                        Time's up! Your pet is sad that it's still stuck in the box... <br />
                        Your pet steals some coins from you. </p>
        }        
    }

    displayButton() {
        if (!(this.state.running) && this.state.timeLeft === 10) {
            return  <button 
                        class="bg-yellowbarbg border-2 border-solid border-darkblue rounded-lg text-2xl z-10 px-2"
                        onClick={this.startTimer}>
                            Start!
                    </button>
        }
    }

    displayProgressBar() {
        if (this.state.running) {
            return <div class="relative pt-4">
                        <div 
                            style={{ width: 200 }} 
                            class="overflow-hidden h-3 mb-4 text-xs flex rounded border border-darkblue bg-pink-100">
                            <div 
                                style={{ width: this.state.timeLeft / 10 * 200 }} 
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-400">
                            </div>
                        </div>
                    </div>
        }
    }

    onSuccessCallBack() {
        clearInterval(this.timer);
        this.setState({
            running: false
        })
        this.updateCoins(true);
    }

    render() {
        return (
            <div class="bg-lightbluebg h-screen overflow-hidden">
                <div class="h-0">
                    <img class="object-contain w-full" 
                        src={day} 
                        alt="Background"></img>
                </div>                
                
                <div class="absolute bottom-0">
                    <img class="object-contain w-full"
                        src={grass}
                        alt="Floor"></img>
                </div>

                <RescueState 
                        startTimer={this.startTimer} 
                        running={this.state.running}
                        onSuccessCallBack={this.onSuccessCallBack} 
                        petId={this.props.auth.user.petId} />
                        
                <div class="flex justify-center pt-3 text-darkblue">
                    <div class="relative p-3 bg-pinkwindowbg border-solid rounded-lg border-2 border-darkblue w-1/3">
                        <div class="flex text-2xl pb-2">
                            <svg 
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24pt" 
                            height="24pt" 
                            viewBox="0 -10 144 144"
                            >
                                <g 
                                    transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)"
                                >
                                    <path d="M811 1225 c-67 -66 -83 -87 -73 -97 21 -21 13 -27 -34 -25 -34 2 -48 -2 -55 -15 -6 -10 -19 -18 -29 -18 -10 0 -23 -7 -28 -16 -5 -9 -17 -14 -27 -13 -24 5 -21 23 5 27 11 2 20 10 20 18 0 8 9 14 21 14 12 0 31 10 44 22 l23 22 -55 50 c-30 28 -68 58 -84 67 -16 9 -35 22 -43 28 -10 9 -16 8 -26 -4 -7 -8 -21 -15 -31 -15 -10 0 -21 -5 -24 -10 -3 -6 -25 -19 -48 -31 -73 -36 -101 -52 -115 -66 -7 -7 -20 -13 -28 -13 -8 0 -14 -4 -14 -9 0 -4 -22 -19 -50 -32 -27 -13 -50 -28 -50 -34 0 -16 58 -73 134 -133 33 -26 94 -30 102 -7 4 8 15 15 25 15 10 0 19 -7 19 -15 0 -8 -7 -15 -15 -15 -17 0 -55 -35 -55 -50 0 -5 7 -10 15 -10 9 0 18 -7 21 -15 4 -8 17 -15 30 -15 15 0 24 -6 24 -15 0 -9 9 -15 25 -15 14 0 25 -5 25 -10 0 -6 11 -15 25 -20 14 -5 25 -14 25 -20 0 -5 11 -10 25 -10 16 0 25 -6 25 -15 0 -9 9 -15 25 -15 14 0 25 -5 25 -10 0 -6 11 -15 25 -20 14 -5 25 -14 25 -20 0 -5 18 -10 40 -10 29 0 40 4 40 15 0 9 9 15 25 15 14 0 25 5 25 10 0 6 11 15 25 20 14 5 25 14 25 20 0 5 11 10 25 10 16 0 25 6 25 15 0 9 9 15 25 15 14 0 25 5 25 10 0 6 11 15 25 20 14 5 25 14 25 20 0 5 9 10 20 10 10 0 23 6 27 13 4 8 17 17 27 21 18 6 18 8 -4 31 -13 14 -29 25 -36 25 -6 0 -14 7 -18 15 -3 8 -17 15 -31 15 -16 0 -25 6 -25 15 0 8 -9 15 -20 15 -11 0 -23 7 -26 15 -4 8 -14 15 -24 15 -10 0 -20 7 -24 15 -3 8 -17 15 -31 15 -16 0 -25 6 -25 15 0 8 -9 15 -20 15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15 0 -9 9 -15 25 -15 14 0 25 -5 25 -10 0 -6 11 -15 25 -20 14 -5 25 -14 25 -20 0 -5 11 -10 25 -10 16 0 25 -6 25 -15 0 -9 9 -15 25 -15 14 0 25 -5 25 -10 0 -6 11 -15 25 -20 14 -5 25 -14 25 -20 0 -5 18 -10 40 -10 41 0 57 11 159 107 35 34 36 58 4 70 -10 3 -34 19 -54 35 -20 15 -44 28 -53 28 -9 0 -16 3 -16 8 0 4 -23 21 -51 37 -28 17 -63 38 -78 48 -14 9 -34 20 -43 23 -10 4 -18 10 -18 14 0 4 -10 10 -22 13 -18 5 -39 -10 -107 -78z m-271 -200 c0 -8 -9 -15 -19 -15 -10 0 -21 -7 -25 -15 -3 -8 -14 -15 -25 -15 -11 0 -24 -7 -29 -16 -5 -9 -17 -14 -26 -13 -24 5 -21 23 4 27 11 2 20 10 20 18 0 8 10 14 25 14 14 0 28 7 31 15 4 8 15 15 25 15 10 0 19 -7 19 -15z"/>
                                    <path d="M205 785 c-44 -41 -83 -75 -87 -75 -21 0 -4 -29 27 -46 19 -10 35 -22 35 -26 0 -5 7 -8 15 -8 8 0 23 -9 32 -20 10 -11 23 -20 30 -20 7 0 13 -4 13 -10 0 -5 11 -12 25 -16 14 -3 25 -12 25 -20 0 -8 10 -14 25 -14 14 0 28 -7 31 -15 4 -8 15 -15 25 -15 10 0 19 -7 19 -15 0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 9 -9 15 -25 15 -13 0 -28 7 -33 16 -5 9 -18 14 -28 12 -15 -2 -20 -13 -22 -52 -2 -27 2 -54 7 -59 6 -6 11 -18 11 -27 0 -16 49 -70 64 -70 4 0 22 -11 39 -24 18 -13 42 -27 54 -30 11 -4 24 -13 27 -21 3 -8 12 -15 20 -15 18 0 76 -32 76 -42 0 -5 8 -8 17 -8 9 0 27 -10 39 -21 13 -12 30 -19 38 -16 14 6 16 35 16 205 0 109 -3 201 -6 205 -3 3 -40 -28 -81 -69 -51 -50 -84 -74 -99 -74 -15 0 -24 6 -24 15 0 8 -9 15 -20 15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15 0 -27 24 -16 80 36 30 28 72 65 92 82 30 25 35 34 27 49 -6 11 -21 23 -35 28 -13 5 -24 14 -24 20 0 5 -11 10 -24 10 -13 0 -26 7 -30 15 -3 8 -15 15 -26 15 -11 0 -20 5 -20 10 0 6 -11 15 -25 20 -14 5 -25 14 -25 20 0 5 -11 10 -24 10 -13 0 -26 7 -30 15 -3 8 -14 15 -25 15 -10 0 -21 7 -25 15 -3 8 -12 15 -19 15 -8 0 -20 7 -27 15 -7 8 -15 15 -19 15 -3 0 -42 -34 -86 -75z"/>
                                    <path d="M1094 845 c-4 -8 -15 -15 -25 -15 -11 0 -22 -7 -25 -15 -4 -8 -17 -15 -30 -15 -13 0 -24 -5 -24 -10 0 -6 -11 -15 -25 -20 -14 -5 -25 -14 -25 -20 0 -5 -11 -10 -25 -10 -16 0 -25 -6 -25 -15 0 -9 -9 -15 -24 -15 -13 0 -26 -7 -30 -15 -3 -8 -15 -15 -26 -15 -11 0 -20 -7 -20 -15 0 -9 -9 -15 -23 -15 -12 0 -28 -10 -36 -22 -13 -21 -10 -25 45 -73 32 -27 74 -65 92 -82 38 -37 47 -40 56 -18 3 8 14 15 25 15 10 0 21 7 25 15 3 8 15 15 26 15 11 0 20 7 20 15 0 9 9 15 25 15 16 0 25 6 25 15 0 8 8 15 18 15 10 0 32 14 50 30 18 17 39 30 46 30 7 0 21 9 31 20 10 11 23 20 30 20 7 0 19 8 29 19 16 17 14 20 -31 57 -26 21 -66 58 -89 82 -44 46 -52 49 -60 27z"/>
                                    <path d="M714 550 c-5 -5 -8 -96 -6 -209 l3 -201 24 0 c14 0 29 8 35 20 6 11 19 20 30 20 10 0 21 4 25 9 3 6 26 20 50 32 25 12 45 26 45 31 0 4 7 8 14 8 8 0 35 14 59 30 25 17 49 30 55 30 10 0 35 34 59 78 13 25 23 100 16 119 -7 19 -53 16 -53 -2 0 -9 -9 -15 -25 -15 -14 0 -25 -5 -25 -10 0 -6 -11 -15 -25 -20 -14 -5 -25 -14 -25 -20 0 -5 -9 -10 -20 -10 -11 0 -23 -7 -26 -15 -7 -18 -31 -19 -49 -2 -7 6 -30 26 -50 42 -21 17 -52 45 -70 62 -19 20 -35 29 -41 23z m141 -230 c10 -16 -28 -59 -52 -60 -31 0 -38 17 -19 45 17 25 59 34 71 15z"/>
                                </g>
                            </svg>
                            <span>Rescue</span>
                        </div>
                            {this.displayMessage()}
                            <div class="flex justify-center">
                                {this.displayButton()}
                                {this.displayProgressBar()}
                            </div>
                    </div>
                </div>

                <Link
                    to="/home"
                    class="absolute bottom-0 right-0 p-1 inline-flex flex items-center text-darkblue hover:text-gray-600 sm:text-sm md:text-md lg:text-lg xl:text-xl">
                        <svg
                            class="fill-current" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xlink="http://www.w3.org/1999/xlink" 
                            width="24" 
                            height="24" 
                            viewBox="0 10 400 400"
                            id="Icons_Home" 
                            overflow="hidden"
                        >
                            <g>
                                <path d="M193.667 58.436 C 190.404 59.331,188.538 60.141,186.110 61.716 C 183.305 63.535,22.830 197.395,21.966 198.637 C 20.839 200.254,20.651 204.013,21.603 205.864 C 22.192 207.008,33.631 220.951,36.447 223.957 C 38.565 226.218,41.823 226.929,44.743 225.767 C 45.693 225.389,71.835 203.797,123.259 160.919 C 165.660 125.565,200.541 96.566,200.772 96.477 C 201.004 96.388,236.064 125.392,278.683 160.931 C 323.794 198.546,356.645 225.710,357.303 225.939 C 361.930 227.553,363.317 226.633,372.280 216.000 C 381.472 205.097,382.223 203.559,380.359 199.453 C 379.613 197.811,380.900 198.922,352.037 175.000 L 329.716 156.500 329.608 109.612 L 329.500 62.724 328.496 61.279 C 327.908 60.434,326.875 59.522,326.008 59.083 L 324.525 58.333 300.916 58.333 C 274.894 58.333,276.103 58.241,274.099 60.389 C 272.301 62.317,272.333 61.843,272.333 86.163 L 272.333 108.680 256.287 95.257 C 211.710 57.964,215.295 60.770,209.850 58.914 C 205.579 57.458,198.045 57.236,193.667 58.436 M149.824 157.364 C 121.779 180.485,92.875 204.299,85.592 210.284 L 72.350 221.167 72.425 277.333 L 72.500 333.500 73.542 335.667 C 74.857 338.402,76.470 340.258,79.002 341.949 C 82.750 344.451,80.271 344.333,129.149 344.333 L 172.667 344.333 172.667 301.333 L 172.667 258.333 201.000 258.333 L 229.333 258.333 229.333 301.333 L 229.333 344.333 272.817 344.333 C 303.743 344.333,316.811 344.225,318.067 343.959 C 323.162 342.877,327.492 338.972,328.996 334.100 C 329.656 331.963,329.667 331.086,329.667 276.630 L 329.667 221.331 322.250 215.195 C 315.466 209.582,297.463 194.738,226.399 136.167 C 212.608 124.800,201.210 115.461,201.070 115.414 C 200.930 115.366,177.869 134.244,149.824 157.364"/>
                            </g>
                        </svg>
                        <span> Home </span>
                </Link>
            </div>
        );
    }
}

Rescue.propTypes = {
    updateUserData: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    { 
        updateUserData
    }
)(withRouter(Rescue));