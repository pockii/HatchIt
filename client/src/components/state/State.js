import React, { Component } from "react";

import normal_state1 from '../pics/normal_state1.svg';
import normal_state2 from '../pics/normal_state2.svg';
import react_state1 from '../pics/reaction_state1.svg';
import react_state2 from '../pics/reaction_state2.svg';


export default class State extends Component { 
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.toggleReaction = this.toggleReaction.bind(this);
        this.state = { 
            currentIndex: 0,
            images: [normal_state1, normal_state2]
        };
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

    toggleReaction() {
        this.setState({
            images: [react_state1, react_state2]
        },
            () => {setTimeout(
                () => {
                    this.setState({
                        images: [normal_state1, normal_state2]
                    })}
                , 2500);
        })
    }
    componentDidMount() {
        setInterval(this.switchImage, 750);
    }

    render() {
        return (
            <div class="absolute bottom-0 pl-64 z-1">
                <img class="object-contain object-right w-1/2"
                    src={this.state.images[this.state.currentIndex]}
                    onClick={this.toggleReaction}
                    alt="Normal State">
                </img>
            </div>
        )
    }
}