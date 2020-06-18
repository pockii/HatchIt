import React, { Component } from 'react';

export default class DraggableIcon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.name,
            imgsrc: this.props.imgsrc,
            value: this.props.value
        };
    }

    onDragStart = (e) => {
        console.log("dragstart");
        e.dataTransfer.setData("value", this.props.value);
    }

    foodLabel() {
        if (this.state.name.length > 9) {
            return  <p class="text-center text-darkblue sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                        {this.state.name}
                    </p>
        } else {
            return <p class="text-center text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        {this.state.name}
                    </p>
        }
    }

    render() {
        return (
            <div class="border-solid rounded border-2 border-darkblue bg-yellowbarbg h-32">  
                <div
                    onDragStart = {(e) => this.onDragStart(e)} 
                    draggable="true">
                        <img class="object-contain w-full h-22 px-2 pt-2"
                            src={this.state.imgsrc}
                            alt={this.state.name}>
                        </img>
                </div>
                {this.foodLabel()}
            </div>
        )
    }
}
