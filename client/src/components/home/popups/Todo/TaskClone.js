import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStyle } from "./TodoHelper";

import TaskItemClone from './TaskItemClone';

class TaskClone extends Component {
    #style = "text-darkblue rounded-lg h-auto relative flex flex-col bg-purple-100";
    
    render() {
        return (
            <div class="p-2">
                <div class="border border-darkblue rounded-lg h-auto relative flex flex-col bg-purple-100">
                    <TaskItemClone
                        deadline={this.props.todo.tasks[this.props.taskId].deadline}
                        level={this.props.todo.tasks[this.props.taskId].level}
                        description={this.props.todo.tasks[this.props.taskId].description} 
                        style={this.#style}       
                    />                        
                    {this.props.todo.tasks[this.props.taskId].subTasks.map(subTaskId => (
                        <div class="pl-5 pr-5 pb-5">
                            <TaskItemClone
                                deadline={this.props.todo.subTasks[subTaskId].deadline}
                                level={this.props.todo.subTasks[subTaskId].level}
                                description={this.props.todo.subTasks[subTaskId].description}
                                style={getStyle(this.props.todo.subTasks[subTaskId].deadline)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

TaskClone.propTypes = {
    taskId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    todo: state.todo
});

export default connect(mapStateToProps)(TaskClone);
