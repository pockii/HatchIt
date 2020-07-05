import React, { Component } from "react";
import PropTypes from "prop-types";
import { Scrollbars } from 'react-custom-scrollbars';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { 
    addTodo, 
    addSubTask,
    updateTodo, 
    updateTask,
    deleteSubTask
 } from "../../../../actions/todoActions";
 import { 
    cloneSubTask,
    cloneAndDenormalizeToDo, 
    cloneAndDenormalizeTask, 
    updateTaskId,
    updateSubTaskId,
    getDroppableStyle
} from "./TodoHelper";

import Tasks from "./Tasks.js";
import TaskClone from "./TaskClone.js";
  
class List extends Component {
    constructor(props) {
        super(props);
        this.reorderSubTaskWithTask = this.reorderSubTaskWithTask.bind(this); 
        this.moveSubTaskToOtherTask = this.moveSubTaskToOtherTask.bind(this);
        this.reorderTask = this.reorderTask.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    reorderSubTaskWithTask(taskId, subTaskId, startSubTaskIndex, endSubTaskIndex) {
        const newSubTasks = Array.from(this.props.todo.tasks[taskId].subTasks); // clone subTasks array  
        newSubTasks.splice(startSubTaskIndex, 1); // remove subTaskId at startSubTaskIndex
        newSubTasks.splice(endSubTaskIndex, 0, subTaskId); // insert subTaskId at endSubTaskIndex

        // update task to reflect change in position 
        const newTask = cloneAndDenormalizeTask(this.props.todo.tasks, this.props.todo.subTasks, taskId);
        newTask.subTasks = newSubTasks.map((id, index) => {
            const len = (taskId + "_").length;
            const i = id.substring(len);
            if (i !== index) { // position of subTask changed 
                return updateSubTaskId(newTask.subTasks[i], index);
            } else { // position of subTask is unchanged
                return newTask.subTasks[index];
            }
        });   
        this.props.updateTask({
            name: this.props.auth.user.name,
            task: newTask
        });     
    } 
    
    moveSubTaskToOtherTask(subTaskId, startTaskId, endTaskId) {
        const task_id = this.props.todo.tasks[startTaskId]._id;
        const subTask = cloneSubTask(this.props.todo.subTasks[subTaskId]);
        const subTask_id = subTask._id;
        // delete subTask at start task
        this.props.deleteSubTask({
            name: this.props.auth.user.name,
            task_id,
            subTask_id
        });

        // add subtask to end task 
        const newSubTask = { 
            description: subTask.description,
            deadline: subTask.deadline,
            level: subTask.level
        };
        this.props.addSubTask({
            name: this.props.auth.user.name,
            task_id: this.props.todo.tasks[endTaskId]._id,
            subTask: newSubTask
        });
    }

    reorderTask(taskId, startTaskIndex, endTaskIndex, ) {
        const newTasks = Array.from(this.props.todo.todo.tasks); // clone tasks array
        newTasks.splice(startTaskIndex, 1); // remove task at startTaskIndex
        newTasks.splice(endTaskIndex, 0, taskId); // insert taskId at endTaskIndex

        // update todo to reflect change in position 
        const newTodo = cloneAndDenormalizeToDo(this.props.todo);
        newTodo.tasks = newTasks.map((id, index) => {
            if (id !== index) {
                return updateTaskId(newTodo.tasks[id], index);
            } else {
                return newTodo.tasks[index];
            }
        });
        this.props.updateTodo(newTodo);
    }

    onDragEnd(result) {
        const { destination, source, draggableId, type } = result;

        if (!destination) { // no destination 
            return;
        } else if (destination.droppableId === source.droppableId 
            && destination.index === source.index) { // no change in position of subTask
            return; 
        }

        if (type === 'task') { // task position changes
            this.reorderTask(draggableId, source.index, destination.index);
            return;
        } else if (type === 'subTask') {// subTask position changes
            const startTaskId = source.droppableId; 
            const endTaskId = destination.droppableId; 

            if (startTaskId === endTaskId) { // subTask position change within its task
                this.reorderSubTaskWithTask(startTaskId, draggableId, source.index, destination.index);
                return;
            } else { // subTask is moved to another task
                this.moveSubTaskToOtherTask(draggableId, startTaskId, endTaskId);
                return;
            }           
        }       
    }

    render() {
        return (
            <Scrollbars 
                style={{ height: '100%' }}
                autoHide                        
                autoHideTimeout={1000}
                autoHideDuration={400}>   
                <div class="pr-3">   
                    <DragDropContext onDragEnd={this.onDragEnd}>            
                        <Droppable 
                            droppableId="todo" 
                            type="task"
                            renderClone={ (provided, snapshot, rubric) => {
                                const taskId = rubric.source.index + "";
                                return (
                                    <div    
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <TaskClone taskId={taskId}/>
                                    </div>
                                );
                            }}
                        >
                            { (provided, snapshot) => (
                                <div 
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    class={getDroppableStyle(snapshot.isDraggingOver)}
                                    >
                                    <Tasks 
                                        tasks={this.props.todo.todo.tasks} 
                                        onTodoExitClick={this.props.onTodoExitClick}
                                        todoCallBack={this.props.todoCallBack}
                                        isNight={this.props.isNight} 
                                        incrementHappiness={this.props.incrementHappiness} 
                                    />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>  
            </Scrollbars>
        );
    }
}

List.propTypes = {
    addTodo: PropTypes.func.isRequired,
    addSubTask: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
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
        addTodo,
        addSubTask,
        updateTodo,
        updateTask,
        deleteSubTask
    }
)(List);
