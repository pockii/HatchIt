import React, { PureComponent } from "react";

import Task from './Task';

export default class Tasks extends PureComponent {
    render() {
        return this.props.tasks.map((taskId, index) => {
            return <Task 
                        key={taskId} 
                        taskId ={taskId} 
                        index={index} 
                        updateCompletedTask={this.props.updateCompletedTask}
                        isNight={this.props.isNight}
                        incrementHappiness={this.props.incrementHappiness}
                        />;
        });
    }
}
