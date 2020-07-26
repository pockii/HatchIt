import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';

import GuessButton from './GuessButton';

import purplegift from './pics/purplegift.svg';
import redgift from './pics/redgift.svg';

export default class GuessButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstChoice: this.props.firstChoice,
            guessed: false,
            correctGuess: false
        };
    }

    randomizeReward() {
        if (this.props.randomizer()) {
            this.props.incrementHappiness(10);
            return "happiness";
        } else {
            this.props.incrementCoins(10);
            return "coins";
        }
    }

    correctChoice(choice) {
        return (choice === 1 && this.state.firstChoice) || (choice === 2 && !(this.state.firstChoice))
    }

    onGuessChoiceClick = (choice) => {
        if (this.correctChoice(choice)) {
            const reward = this.randomizeReward();
            this.props.callBackAfterGuess(reward);
        } else {
            this.props.decrementHappiness(5);
            this.props.callBackAfterGuess("none");
        }
    }

    render() {
        return (
            <div class="pl-5 pr-5 pb-5 w-full h-7/10">
                <Scrollbars 
                    style={{ height: '100%', width: '100%' }} 
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={400}
                > 
                    <div class="inline-flex flex flex-row flex justify-around">  
                        <GuessButton 
                            onGuessChoiceClick={() => this.onGuessChoiceClick(1)}
                            imgsrc={purplegift}
                            name="Purple Gift" />
                        
                        <GuessButton 
                            onGuessChoiceClick={() => this.onGuessChoiceClick(2)}
                            imgsrc={redgift}
                            name="Red Gift" />
                    </div>
                </Scrollbars>
            </div>
        );
    }
}
