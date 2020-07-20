import React, { Component } from "react";

import rabbit_box1 from '../../state/pics/rabbit/box_state1.svg';
import rabbit_box2 from '../../state/pics/rabbit/box_state2.svg';
import rabbit_clap1 from '../../state/pics/rabbit/prod_state1.svg';
import rabbit_clap2 from '../../state/pics/rabbit/prod_state2.svg';

import cat_box1 from '../../state/pics/cat/box_state1.svg';
import cat_box2 from '../../state/pics/cat/box_state2.svg';
import cat_clap1 from '../../state/pics/cat/temp_state1.svg';
import cat_clap2 from '../../state/pics/cat/temp_state2.svg';

export default class RescueState extends Component { 
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.countClick = this.countClick.bind(this);
        this.state = { 
            currentIndex: 0,
            images: this.#box_state[this.props.petId],
            count: 0,
            success: false
        };
    }

    #box_state = [[rabbit_box1, rabbit_box2], [cat_box1, cat_box2]];
    #clap_state = [[rabbit_clap1, rabbit_clap2], [cat_clap1, cat_clap2]];

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

    countClick() {
        if (this.state.count >= 50) {
            this.setState({
                success: true,
                images: this.#clap_state[this.props.petId]
            });
            this.props.onSuccessCallBack();
        } else if (this.props.running) {
            this.setState({
                count: this.state.count + 1
            });
        }
    }

    componentDidMount() {
        setInterval(this.switchImage, 750);
    }

    render() {
        return (
            <div>
                <div class="absolute bottom-0 z-1 flex justify-center">
                    <img 
                        class="object-contain w-2/5"
                        src={this.state.images[this.state.currentIndex]}
                        onClick={this.countClick}
                        alt="Pet" />
                </div>
            </div>
        )
    }
}
