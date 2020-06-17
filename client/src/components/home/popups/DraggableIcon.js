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

    render() {
        return (
            <div
                onDragStart = {(e) => this.onDragStart(e)} 
                draggable="true">
                <img class="object-contain w-full h-20 px-4 py-2"
                    src={this.state.imgsrc}
                    alt={this.state.name}>
                </img>
            </div>
        )
    }


}