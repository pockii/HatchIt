
import React, { PureComponent } from "react";

import SubTask from './SubTask';

export default class SubTasks extends PureComponent {
    render() {
        return this.props.subTasks.map((subTaskId, index) => (
            <SubTask 
                key={subTaskId} 
                subTaskId={subTaskId} 
                index={index} 
                updateCompletedTask={this.props.updateCompletedTask}
                isNight={this.props.isNight}
                incrementHappiness={this.props.incrementHappiness}
            />
        ));
    }
}
