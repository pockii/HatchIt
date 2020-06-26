import React, { PureComponent } from "react";

import Task from './Task';

export default class Tasks extends PureComponent {
    render() {
        return this.props.tasks.map((taskId, index) => {
            return <Task 
                    key={taskId} 
                    taskId ={taskId} 
                    index={index} 
                    onTodoExitClick={this.props.onTodoExitClick}
                    todoCallBack={this.props.todoCallBack}
                    />;
        });
    }
}
