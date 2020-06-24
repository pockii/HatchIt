
import React, { PureComponent } from "react";

import SubTask from './SubTask';

export default class SubTasks extends PureComponent {
    render() {
        return this.props.subTasks.map((subTaskId, index) => (
            <SubTask 
                key={subTaskId} 
                subTaskId={subTaskId} 
                index={index} 
                onTodoExitClick={this.props.onTodoExitClick}/>
        ));
    }
}