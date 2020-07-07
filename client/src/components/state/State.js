import React, { Component } from "react";

import normal_state1 from './pics/normal_state1.svg';
import normal_state2 from './pics/normal_state2.svg';
import react_state1 from './pics/reaction_state1.svg';
import react_state2 from './pics/reaction_state2.svg';
import eating_state1 from './pics/eating_state1.svg';
import eating_state2 from './pics/eating_state2.svg';
import happy_state1 from './pics/happy_state1.svg';
import happy_state2 from './pics/happy_state2.svg'
import max_state1 from './pics/max_state1.svg';
import max_state2 from './pics/max_state2.svg';
import guess_state1 from './pics/guess_state1.svg';
import guess_state2 from './pics/guess_state2.svg';
import productive_state1 from './pics/prod_state1.svg';
import productive_state2 from './pics/prod_state2.svg';
import sleeping_state1 from './pics/sleeping_state1.svg';
import sleeping_state2 from './pics/sleeping_state2.svg';

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
    
    onDragOver = (e) => {
        e.preventDefault();
    }

    onDrop = (e) => {
        let value = parseInt(e.dataTransfer.getData("value"));
        this.props.incrementHappiness(value);
        this.toggleEating();
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
        //const happinessLevel = Math.floor(this.props.happiness / 20);
        switch (true) {
            case (this.props.happiness > 66 && this.props.happiness <= 99):
                return [happy_state1, happy_state2];
            case (this.props.happiness === 100):
                return [max_state1, max_state2];
            default:
                return [normal_state1, normal_state2];
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
        this.updateImages([react_state1, react_state2], 2500);
    }

    toggleEating() {
        this.updateImages([eating_state1, eating_state2], 3000);
    }

    toggleGuessing() {
        this.updateImages([guess_state1, guess_state2], 0);
    }

    toggleProductive() {
        this.updateImages([productive_state1, productive_state2], 3000);
    }
    
    toggleSleeping() {
        this.updateImages([sleeping_state1, sleeping_state2], 0);
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
