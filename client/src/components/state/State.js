import React, { Component } from "react";

import rabbit_normal1 from './pics/rabbit/normal_state1.svg';
import rabbit_normal2 from './pics/rabbit/normal_state2.svg';
import rabbit_react1 from './pics/rabbit/react_state1.svg';
import rabbit_react2 from './pics/rabbit/react_state2.svg';
import rabbit_eat1 from './pics/rabbit/eating_state1.svg';
import rabbit_eat2 from './pics/rabbit/eating_state2.svg';
import rabbit_happy1 from './pics/rabbit/happy_state1.svg';
import rabbit_happy2 from './pics/rabbit/happy_state2.svg'
import rabbit_max1 from './pics/rabbit/max_state1.svg';
import rabbit_max2 from './pics/rabbit/max_state2.svg';
import rabbit_guess1 from './pics/rabbit/guess_state1.svg';
import rabbit_guess2 from './pics/rabbit/guess_state2.svg';
import rabbit_prod1 from './pics/rabbit/prod_state1.svg';
import rabbit_prod2 from './pics/rabbit/prod_state2.svg';
import rabbit_sleep1 from './pics/rabbit/sleeping_state1.svg';
import rabbit_sleep2 from './pics/rabbit/sleeping_state2.svg';

import cat_normal1 from './pics/cat/normal_state1.svg';
import cat_normal2 from './pics/cat/normal_state2.svg';
import cat_react1 from './pics/cat/react_state1.svg';
import cat_react2 from './pics/cat/react_state2.svg';
import cat_eat1 from './pics/cat/eating_state1.svg';
import cat_eat2 from './pics/cat/eating_state2.svg';
import cat_happy1 from './pics/cat/happy_state1.svg';
import cat_happy2 from './pics/cat/happy_state2.svg'
import cat_max1 from './pics/cat/max_state1.svg';
import cat_max2 from './pics/cat/max_state2.svg';
import cat_guess1 from './pics/cat/guess_state1.svg';
import cat_guess2 from './pics/cat/guess_state2.svg';
import cat_prod1 from './pics/cat/temp_state1.svg';
import cat_prod2 from './pics/cat/temp_state2.svg';
import cat_sleep1 from './pics/cat/sleeping_state1.svg';
import cat_sleep2 from './pics/cat/sleeping_state2.svg';


export default class State extends Component { 
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.toggleReaction = this.toggleReaction.bind(this);
        this.state = { 
            currentIndex: 0,
            images: this.currentState()
        };
    }
    
    #normal_state = [[rabbit_normal1, rabbit_normal2], [cat_normal1, cat_normal2]];
    #react_state = [[rabbit_react1, rabbit_react2], [cat_react1, cat_react2]];
    #eat_state = [[rabbit_eat1, rabbit_eat2], [cat_eat1, cat_eat2]];
    #happy_state = [[rabbit_happy1, rabbit_happy2], [cat_happy1, cat_happy2]];
    #max_state = [[rabbit_max1, rabbit_max2], [cat_max1, cat_max2]];
    #guess_state = [[rabbit_guess1, rabbit_guess2], [cat_guess1, cat_guess2]];
    #prod_state = [[rabbit_prod1, rabbit_prod2], [cat_prod1, cat_prod2]];
    #sleep_state = [[rabbit_sleep1, rabbit_sleep2], [cat_sleep1, cat_sleep2]];

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDrop = (e) => {
        let value = parseInt(e.dataTransfer.getData("value"));
        let coins = parseInt(e.dataTransfer.getData("coins"));
        if (coins === 0 || this.props.decrementCoins(coins)) {
            this.props.incrementHappiness(value);
            this.toggleEating();
        } 
        e.preventDefault();
    }

    switchImage() {
        if (this.state.currentIndex < this.state.images.length - 1) {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            });
        } else { 
            this.setState({
                currentIndex: 0
            });
        }
    }

    currentState() {
        switch (true) {
            case (this.props.happiness === 100):
                return this.#max_state[this.props.petId];
            case (this.props.happiness > 66 && this.props.happiness <= 99):
                return this.#happy_state[this.props.petId];
            default:
                return this.#normal_state[this.props.petId];
        }
    }

    updateImages(newImages, time) {
        if (time === 0) {
            this.setState({
                images: newImages,
            })
        } else {
            this.setState({
                images: newImages,
            })
            setTimeout(() => this.setState({
                images: this.currentState(),
                }), time);
        }
    }

    toggleReaction() {
        this.updateImages(this.#react_state[this.props.petId], 2500);
    }

    toggleEating() {
        this.updateImages(this.#eat_state[this.props.petId], 3000);
    }

    toggleGuessing() {
        this.updateImages(this.#guess_state[this.props.petId], 0);
    }

    toggleProductive() {
        this.updateImages(this.#prod_state[this.props.petId], 3000);
    }
    
    toggleSleeping() {
        this.updateImages(this.#sleep_state[this.props.petId], 0);
    }

    revertToNormal() {
        this.updateImages(this.currentState(), 0);
    }

    componentDidMount() {
        setInterval(this.switchImage, 750);
    }

    render() {
        return (
            <div class="absolute bottom-0 z-1">
                <div class="flex justify-center">
                    <img 
                        class="object-contain w-2/5"
                        src={this.state.images[this.state.currentIndex]}
                        onClick={this.toggleReaction}
                        onDragOver={(e) => this.onDragOver(e)}
                        onDrop={(e) => this.onDrop(e)}
                        alt="Pet" />
                </div>
            </div>
        )
    }
}
