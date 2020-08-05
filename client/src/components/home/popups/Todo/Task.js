import React, { Component } from "react";
import PropTypes from "prop-types";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { updateUserData } from "../../../../actions/userdataActions";
import { 
    updateTodo, 
    updateTask, 
    deleteTask
} from "../../../../actions/todoActions";
import { 
    cloneAndDenormalizeTask, 
    getStyle,
    getDroppableStyle
} from "./TodoHelper";

import TaskItem from './TaskItem';
import TaskItemClone from './TaskItemClone';
import SubTasks from './SubTasks';

class Task extends Component {
    #style = "text-darkblue border border-darkblue rounded-lg h-auto relative flex flex-col bg-purple-100";

    constructor(props) {
        super(props);
        this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.onDeleteTaskClick = this.onDeleteTaskClick.bind(this);
        this.onCompleteTaskClick = this.onCompleteTaskClick.bind(this);
    }

    handleDeadlineChange(deadline) {
        const newTask = cloneAndDenormalizeTask(this.props.todo.tasks, this.props.todo.subTasks, this.props.taskId);
        newTask.deadline = deadline;
        this.props.updateTask({
            name: this.props.auth.user.name,
            task: newTask
        });   
    }

    handleLevelChange(event) {
        const newTask = cloneAndDenormalizeTask(this.props.todo.tasks, this.props.todo.subTasks, this.props.taskId);
        newTask.level = event.target.value;
        this.props.updateTask({
            name: this.props.auth.user.name,
            task: newTask
        });
    }

    handleDescriptionChange(description) {
        const newTask = cloneAndDenormalizeTask(this.props.todo.tasks, this.props.todo.subTasks, this.props.taskId);
        newTask.description = description;
        this.props.updateTask({
            name: this.props.auth.user.name,
            task: newTask
        });
    }

    onDeleteTaskClick() {
        this.props.deleteTask({
            name: this.props.auth.user.name,
            task_id: this.props.todo.tasks[this.props.taskId]._id
        });        
    }

    onCompleteTaskClick() {
        var happinessGained = this.props.todo.tasks[this.props.taskId].level * 5;
        var newCoins = this.props.auth.user.coins + this.props.todo.tasks[this.props.taskId].level * 5;
        
        const allSubTasks = this.props.todo.tasks[this.props.taskId].subTasks
        var i;
        for (i = 0; i < allSubTasks.length; i++) {
            happinessGained += this.props.todo.subTasks[allSubTasks[i]].level * 5;
            newCoins += this.props.todo.subTasks[allSubTasks[i]].level * 5;
        }

        const userData = {
            name: this.props.auth.user.name,
            tasks: this.props.auth.user.tasks + 1,
            subTasks: this.props.auth.user.subTasks + allSubTasks.length,
            coins: newCoins
        };
        this.props.updateUserData(userData); 

        if (!this.props.isNight) {
            this.props.incrementHappiness(happinessGained, "Complete Todo");
        }

        this.onDeleteTaskClick();
        this.props.todoCallBack(true);
        this.props.onTodoExitClick();
    }

    render() {
        return (
            <Draggable
                draggableId={this.props.taskId}
                index={this.props.index}
            >
                { provided => (
                    <div class="pt-2 pl-2 pr-2">
                        <div 
                            class={getStyle(this.props.todo.tasks[this.props.taskId].deadline)}
                            {...provided.draggableProps}
                            ref={provided.innerRef}>
                            <div {...provided.dragHandleProps}>
                                <TaskItem 
                                    deadline={this.props.todo.tasks[this.props.taskId].deadline}
                                    level={this.props.todo.tasks[this.props.taskId].level}
                                    description={this.props.todo.tasks[this.props.taskId].description}
                                    handleDeadlineChange={this.handleDeadlineChange}
                                    handleLevelChange={this.handleLevelChange}
                                    handleDescriptionChange={this.handleDescriptionChange}
                                    onCompleteTaskClick={this.onCompleteTaskClick}
                                    onDeleteTaskClick={this.onDeleteTaskClick}
                                />
                            </div>
                        
                            <Droppable 
                                droppableId={this.props.taskId}
                                type="subTask"
                                renderClone={ (provided, snapshot, rubric) => {
                                    const subTaskId = this.props.todo.tasks[this.props.taskId].subTasks[rubric.source.index];
                                    const subTask = this.props.todo.subTasks[subTaskId]
                                    return (
                                        <div    
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            <TaskItemClone
                                                deadline={subTask.deadline}
                                                level={subTask.level}
                                                description={subTask.description}
                                                style={this.#style}
                                            />
                                        </div>
                                    );
                                }}
                                >
                                { (provided, snapshot)  => (
                                    <div 
                                        ref={provided.innerRef} 
                                        class={getDroppableStyle(snapshot.isDraggingOver)}
                                    >
                                        <SubTasks 
                                            subTasks={this.props.todo.tasks[this.props.taskId].subTasks} 
                                            todoCallBack={this.props.todoCallBack}
                                            onTodoExitClick={this.props.onTodoExitClick}
                                            isNight={this.props.isNight} 
                                            incrementHappiness={this.props.incrementHappiness}
                                        />
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </div>
                )}                
            </Draggable>
        );
    }
};

Task.propTypes = {
    updateUserData: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
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
        updateTodo,
        updateTask,
        deleteTask
    }
)(Task);
