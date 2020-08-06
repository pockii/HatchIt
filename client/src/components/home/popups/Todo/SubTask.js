import React, { Component } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { updateUserData } from "../../../../actions/userdataActions";
import { 
    updateTask, 
    updateSubTask,
    deleteSubTask
 } from "../../../../actions/todoActions";
 import { 
    cloneSubTask, 
    getStyle
} from "./TodoHelper";

import TaskItem from './TaskItem';

class SubTask extends Component {
    constructor(props) {
        super(props);
        this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.onCompleteSubTaskClick = this.onCompleteSubTaskClick.bind(this);
        this.onDeleteSubTaskClick = this.onDeleteSubTaskClick.bind(this);
    }

    handleDeadlineChange(deadline) {
        const newSubTask = cloneSubTask(this.props.todo.subTasks[this.props.subTaskId]);
        newSubTask.deadline = deadline;
        this.props.updateSubTask({
            name: this.props.auth.user.name,
            task_id: this.props.todo.tasks[newSubTask.taskId]._id,
            subTask: newSubTask
        });   
    }

    handleLevelChange(event) {
        const newSubTask = cloneSubTask(this.props.todo.subTasks[this.props.subTaskId]);
        newSubTask.level = event.target.value;
        this.props.updateSubTask({
            name: this.props.auth.user.name,
            task_id: this.props.todo.tasks[newSubTask.taskId]._id,
            subTask: newSubTask
        });   
    }

    handleDescriptionChange(description) {
        const newSubTask = cloneSubTask(this.props.todo.subTasks[this.props.subTaskId]);
        newSubTask.description = description;
        this.props.updateSubTask({
            name: this.props.auth.user.name,
            task_id: this.props.todo.tasks[newSubTask.taskId]._id,
            subTask: newSubTask
        });  
    }

    onDeleteSubTaskClick() {
        const subTask = this.props.todo.subTasks[this.props.subTaskId];
        const task_id = this.props.todo.tasks[subTask.taskId]._id;
        const subTask_id = subTask._id;
        this.props.deleteSubTask({
            name: this.props.auth.user.name,
            task_id,
            subTask_id
        });
    }

    onCompleteSubTaskClick() {
        const userData = {
            name: this.props.auth.user.name,
            subTasks: this.props.auth.user.subTasks + 1,
            coins: this.props.auth.user.coins + this.props.todo.subTasks[this.props.subTaskId].level * 5
        };
        this.props.updateUserData(userData); 
        
        if (!this.props.isNight) {
            const happinessGained = this.props.todo.subTasks[this.props.subTaskId].level * 5
            this.props.incrementHappiness(happinessGained, "Complete Sub Todo");
        }
        
        this.onDeleteSubTaskClick();
        this.props.updateCompletedTask();
    }

    render() {
        return (
            <div class="pl-5 pr-5 pb-5">
                <Draggable
                    draggableId={this.props.subTaskId}
                    index={this.props.index}
                    > 
                    { provided => (
                        <div 
                            class={getStyle(this.props.todo.subTasks[this.props.subTaskId].deadline)}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <TaskItem 
                                deadline={this.props.todo.subTasks[this.props.subTaskId].deadline}
                                level={this.props.todo.subTasks[this.props.subTaskId].level}
                                description={this.props.todo.subTasks[this.props.subTaskId].description}
                                handleDeadlineChange={this.handleDeadlineChange}
                                handleLevelChange={this.handleLevelChange}
                                handleDescriptionChange={this.handleDescriptionChange}
                                onCompleteTaskClick={this.onCompleteSubTaskClick}
                                onDeleteTaskClick={this.onDeleteSubTaskClick}
                            />
                        </div>
                    )}                
                </Draggable>
            </div>
        );
    }
};

SubTask.propTypes = {
    updateUserData: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    updateSubTask: PropTypes.func.isRequired,
    deleteSubTask: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    todo: state.todo
});

export default connect(
    mapStateToProps,
    {   
        updateUserData,
        updateTask,
        updateSubTask,
        deleteSubTask
    }
)(SubTask);
