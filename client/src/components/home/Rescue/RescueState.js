import React, { Component } from "react";

import box_state1 from '../../state/pics/box_state1.svg';
import box_state2 from '../../state/pics/box_state2.svg';
import clap_state1 from '../../state/pics/prod_state1.svg';
import clap_state2 from '../../state/pics/prod_state2.svg';

export default class RescueState extends Component { 
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.countClick = this.countClick.bind(this);
        this.state = { 
            currentIndex: 0,
            images: [box_state1, box_state2],
            count: 0,
            success: false
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

    countClick() {
        if (this.state.count >= 50) {
            this.setState({
                success: true,
                images: [clap_state1, clap_state2]
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
