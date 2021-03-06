import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
    addTodo, 
    addTask, 
    addSubTask, 
    updateTodo, 
    updateTask, 
    updateSubTask,
    deleteTask,
    deleteSubTask
 } from "../../../../actions/todoActions";
import Modal from "react-modal";
import todo from './todo.module.css';

import List from './List';

Modal.defaultStyles.overlay.backgroundColor = 'transparent';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoSeen: false,
            completedTask: false
        };
        this.onTodoExitClick = this.onTodoExitClick.bind(this);
        this.updateCompletedTask = this.updateCompletedTask.bind(this);
    }

    componentDidMount() {
        this.props.addTodo({ 
            name: this.props.auth.user.name,
            tasks: [{
                id: "0",
                description: "My first todo!"
            }]                       
        });   
    }

    onTodoClick = () => {
        this.setState((state) => {
            return { todoSeen: !state.todoSeen };
        });
    };

    onTodoExitClick = () => {
        this.props.todoCallBack(this.state.completedTask);
        this.setState({ todoSeen: false, completedTask: false });
    };

    onAddTaskClick = () => {
        const newTask = { description: "New Todo" };
        this.props.addTask({
            name: this.props.auth.user.name,
            task: newTask
        });
    }

    onAddSubTaskClick = () => {
        const newSubTask = { description: "New Sub Todo" };
        this.props.addSubTask({
            name: this.props.auth.user.name,
            subTask: newSubTask
        });
    }

    updateCompletedTask() {
        this.setState( {completedTask: true} );
    }

    render() {
        return (
            <div class={this.props.isNight ? "text-lightbluebg hover:text-white" : "text-darkblue hover:text-gray-600"}>
                <button
                    class="p-1 inline-flex flex items-center"
                    onClick={this.onTodoClick}
                >
                    <svg 
                        class="w-6 fill-current" 
                        viewBox="0 0 96 96" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_PostitNotes2" 
                        overflow="hidden">
                        <path d="M88.123 33.517 84.65 32.082 84.65 32.077 83.4 31.561C84.08 29.957 84.7707 28.307 85.472 26.611L86.237 24.762 31 1.923 30.235 3.772C19.923 28.714 12 43.385 5.286 49.94L3.116 52.06 11.8 55.651 10.627 58.489 10.606 58.48 9.477 61.217 12.863 70.172 70.491 94 92 41.976ZM10.123 50.628C16.623 43.128 23.863 29.452 33.168 7.147L81.011 26.929C71.53 49.651 64.086 63.536 57.742 70.317ZM15.5 57.179 58.682 75.034 59.624 74.112C65.986 67.896 72.944 55.748 81.824 35.238L83.65 35.993 65.05 80.993 14.326 60.017ZM68.324 88.779 15.992 67.137 15.049 64.644 67.217 86.214 86.5 39.576 87.638 42.058Z"/>
                    </svg>
                    <span>Todos</span>
                </button> 

                <Modal 
                    isOpen={this.state.todoSeen} 
                    onRequestClose={this.onTodoExitClick}
                    shouldCloseOnEsc={true}
                    className={todo.modal}
                    ariaHideApp={false}
                >
                    <button 
                        class="p-3 text-darkblue absolute right-0 top-0 hover:text-gray-500" 
                        onClick={this.onTodoExitClick}
                    >
                        <svg
                            class="w-6 fill-current"
                            viewBox="0 0 96 96" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xlink="http://www.w3.org/1999/xlink" 
                            id="Icons_Close" overflow="hidden">
                                <path 
                                    d="M83.4 21.1 74.9 12.6 48 39.5 21.1 12.6 12.6 21.1 39.5 48 12.6 74.9 21.1 83.4 48 56.5 74.9 83.4 83.4 74.9 56.5 48Z" 
                                    strokeWidth="0.229186"/>
                         </svg>
                    </button>

                    <p class="p-3 text-darkblue sm:text-sm md:text-base lg:text-lg xl:text-xl inline-flex flex items-center">
                        <svg 
                            class="w-6 fill-current" 
                            viewBox="0 0 96 96" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xlink="http://www.w3.org/1999/xlink" 
                            id="Icons_PostitNotes2" 
                            overflow="hidden">
                            <path d="M88.123 33.517 84.65 32.082 84.65 32.077 83.4 31.561C84.08 29.957 84.7707 28.307 85.472 26.611L86.237 24.762 31 1.923 30.235 3.772C19.923 28.714 12 43.385 5.286 49.94L3.116 52.06 11.8 55.651 10.627 58.489 10.606 58.48 9.477 61.217 12.863 70.172 70.491 94 92 41.976ZM10.123 50.628C16.623 43.128 23.863 29.452 33.168 7.147L81.011 26.929C71.53 49.651 64.086 63.536 57.742 70.317ZM15.5 57.179 58.682 75.034 59.624 74.112C65.986 67.896 72.944 55.748 81.824 35.238L83.65 35.993 65.05 80.993 14.326 60.017ZM68.324 88.779 15.992 67.137 15.049 64.644 67.217 86.214 86.5 39.576 87.638 42.058Z"/>
                        </svg>
                        <span>Todos</span>
                    </p>   

                    <div class="px-10 h-8/10">
                        <List 
                            updateCompletedTask={this.updateCompletedTask}
                            isNight={this.props.isNight} 
                            incrementHappiness={this.props.incrementHappiness} 
                        />
                    </div>

                    <div class="h-1/10">
                        <div class="flex flex-col absolute bottom-0 left-0 p-2 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue">
                            <button
                                class="hover:text-gray-500 inline-flex flex items-center"
                                onClick={this.onAddTaskClick}
                            >
                                <svg 
                                    class="w-5 fill-current"
                                    viewBox="0 0 96 96" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    xlink="http://www.w3.org/1999/xlink" 
                                    id="Icons_Add" overflow="hidden">
                                        <path 
                                            d="M88 42 54 42 54 8 42 8 42 42 8 42 8 54 42 54 42 88 54 88 54 54 88 54Z" 
                                            strokeWidth="0.250079"/>
                                </svg>
                                <span>New Todo</span>
                            </button> 
                            <button
                                class="hover:text-gray-500 inline-flex flex items-center"
                                onClick={this.onAddSubTaskClick}
                            >
                                <svg 
                                    class="w-5 fill-current"
                                    viewBox="0 0 96 96" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    xlink="http://www.w3.org/1999/xlink" 
                                    id="Icons_Add" overflow="hidden">
                                        <path 
                                            d="M88 42 54 42 54 8 42 8 42 42 8 42 8 54 42 54 42 88 54 88 54 54 88 54Z" 
                                            strokeWidth="0.250079"/>
                                </svg>
                                <span>New Sub Todo</span>
                            </button> 
                        </div>

                        <div class="flex flex-col absolute bottom-0 right-0 p-2 sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue">
                            <div class="inline-flex flex items-center">
                                <svg 
                                    class="w-6 fill-current"
                                    viewBox="0 0 96 96" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    xlink="http://www.w3.org/1999/xlink" 
                                    id="Icons_BadgeTick_M" overflow="hidden">
                                    <g id="Icons">
                                        <path d="M81.9 48.6C81.6 48.3 81.6 47.8 81.9 47.4L84.3 44.5C85.3 43.2 85.1 41.4 83.9 40.4 83.8 40.3 83.7 40.3 83.6 40.2L80.4 38.1C80 37.9 79.9 37.4 80 37L81.4 33.5C82 32 81.2 30.3 79.7 29.7 79.6 29.7 79.5 29.6 79.4 29.6L75.7 28.6C75.3 28.5 75 28.1 75 27.6L75.2 23.8C75.3 22.2 74.1 20.8 72.4 20.7 72.3 20.7 72.2 20.7 72.1 20.7L68.3 20.9C67.8 20.9 67.4 20.6 67.3 20.2L66.3 16.5C65.9 14.9 64.3 14 62.7 14.4 62.6 14.4 62.5 14.5 62.4 14.5L58.9 15.9C58.5 16.1 58 15.9 57.8 15.5L55.7 12.3C54.8 10.9 53 10.5 51.6 11.4 51.5 11.5 51.4 11.5 51.3 11.6L48.4 14C48.1 14.3 47.5 14.3 47.2 14L44.3 11.6C43 10.6 41.2 10.8 40.2 12 40.1 12.1 40.1 12.2 40 12.3L37.9 15.5C37.7 15.9 37.2 16 36.8 15.9L33.3 14.5C31.8 13.9 30.1 14.6 29.5 16.1 29.5 16.2 29.4 16.3 29.4 16.5L28.4 20.2C28.3 20.6 27.9 20.9 27.4 20.9L23.6 20.7C22 20.6 20.6 21.8 20.5 23.5 20.5 23.6 20.5 23.7 20.5 23.8L20.7 27.6C20.7 28 20.4 28.5 20 28.6L16.3 29.6C14.7 30 13.8 31.6 14.2 33.2 14.2 33.3 14.3 33.4 14.3 33.5L15.7 37C15.9 37.4 15.7 37.9 15.3 38.1L12.1 40.1C10.7 41 10.3 42.8 11.2 44.2 11.3 44.3 11.3 44.4 11.4 44.5L13.8 47.4C14.1 47.7 14.1 48.3 13.8 48.6L11.4 51.5C10.4 52.8 10.6 54.6 11.8 55.6 11.9 55.7 12 55.7 12.1 55.8L15.3 57.9C15.7 58.1 15.8 58.6 15.7 59L14.3 62.5C13.7 64 14.5 65.7 16 66.3 16.1 66.3 16.2 66.4 16.3 66.4L20 67.4C20.4 67.5 20.7 67.9 20.7 68.4L20.5 72.2C20.4 73.8 21.6 75.2 23.3 75.3 23.4 75.3 23.5 75.3 23.6 75.3L27.4 75.1C27.8 75.1 28.3 75.4 28.4 75.8L29.4 79.5C29.8 81.1 31.4 82 33 81.6 33.1 81.6 33.2 81.5 33.3 81.5L36.8 80.1C37.2 79.9 37.7 80.1 37.9 80.5L40 83.7C40.9 85.1 42.7 85.5 44.1 84.6 44.2 84.5 44.3 84.5 44.3 84.4L47.2 82C47.5 81.7 48.1 81.7 48.4 82L51.3 84.4C51.8 84.8 52.5 85.1 53.2 85.1 53.4 85.1 53.5 85.1 53.7 85.1 54.5 85 55.3 84.5 55.7 83.8L57.8 80.6C58 80.2 58.5 80.1 58.9 80.2L62.4 81.6C63.9 82.2 65.6 81.4 66.2 79.9 66.2 79.8 66.3 79.7 66.3 79.6L67.3 75.9C67.4 75.5 67.8 75.2 68.3 75.2L72.1 75.4C73.7 75.5 75.1 74.3 75.2 72.6 75.2 72.5 75.2 72.4 75.2 72.3L75 68.5C75 68.1 75.3 67.6 75.7 67.5L79.4 66.5C81 66.1 81.9 64.5 81.5 62.9 81.5 62.8 81.4 62.7 81.4 62.6L80 59.1C79.8 58.7 80 58.2 80.4 58L83.6 55.9C85 55 85.4 53.2 84.5 51.8 84.5 51.7 81.9 48.6 81.9 48.6ZM79.4 56.3C78.2 57.1 77.7 58.5 78.3 59.8L79.7 63.3C79.9 63.8 79.6 64.3 79.2 64.5L79.1 64.5 75.4 65.5C74 65.9 73.1 67.1 73.2 68.5L73.4 72.3C73.4 72.8 73 73.3 72.5 73.3L72.4 73.3 68.6 73.1C67.2 73 65.9 73.9 65.6 75.3L64.6 79C64.5 79.5 63.9 79.8 63.4 79.7L63.3 79.7 59.8 78.3C58.5 77.8 57 78.3 56.2 79.4L54.1 82.6C53.8 83 53.2 83.2 52.8 82.9 52.8 82.9 52.7 82.9 52.7 82.8L49.8 80.4C48.7 79.5 47.2 79.5 46.1 80.4L43.2 82.8C42.8 83.1 42.2 83.1 41.9 82.7 41.9 82.7 41.9 82.7 41.8 82.6L39.7 79.4C38.9 78.2 37.5 77.7 36.2 78.3L32.7 79.7C32.2 79.9 31.7 79.6 31.5 79.2L31.5 79.1 30.5 75.4C30.1 74 28.9 73.1 27.5 73.2L23.7 73.4C23.2 73.4 22.7 73 22.7 72.5L22.7 72.4 22.9 68.6C23 67.2 22.1 65.9 20.7 65.6L17 64.6C16.7 64.5 16.5 64.4 16.4 64.1 16.3 63.9 16.3 63.6 16.4 63.3L17.8 59.8C18.3 58.5 17.8 57 16.7 56.3L13.5 54.2C13.1 53.9 12.9 53.3 13.2 52.9 13.2 52.9 13.2 52.8 13.3 52.8L15.7 49.9C16.6 48.8 16.6 47.3 15.7 46.2L13.3 43.3C13 42.9 13 42.3 13.4 42 13.4 42 13.5 42 13.5 41.9L16.7 39.9C17.9 39.1 18.4 37.7 17.8 36.4L16.4 32.9C16.3 32.7 16.3 32.4 16.4 32.1 16.5 31.9 16.7 31.7 17 31.6L20.7 30.6C22.1 30.2 23 29 22.9 27.6L22.7 23.8C22.7 23.5 22.8 23.3 23 23.1 23.2 22.9 23.5 22.8 23.7 22.8L27.5 23C28.9 23.1 30.1 22.2 30.5 20.8L31.5 17.1C31.6 16.8 31.7 16.6 32 16.5 32.2 16.4 32.5 16.4 32.8 16.5L36.3 17.9C37.6 18.4 39.1 17.9 39.8 16.8L41.8 13.6C42.1 13.2 42.7 13 43.1 13.3 43.1 13.3 43.2 13.3 43.2 13.4L46.1 15.8C47.2 16.7 48.7 16.7 49.8 15.8L52.7 13.4C53.1 13.1 53.7 13.1 54 13.5 54 13.5 54 13.5 54.1 13.6L56.2 16.8C57 18 58.4 18.5 59.7 17.9L63.2 16.5C63.7 16.3 64.2 16.6 64.4 17L64.4 17.1 65.4 20.8C65.8 22.2 67 23.1 68.4 23L72.2 22.8C72.5 22.8 72.7 22.9 72.9 23.1 73.1 23.3 73.2 23.6 73.2 23.8L73 27.6C72.9 29 73.8 30.3 75.2 30.6L78.9 31.6C79.4 31.7 79.7 32.3 79.6 32.8L79.6 32.9 78.2 36.4C77.7 37.7 78.2 39.2 79.3 39.9L82.5 41.9C82.9 42.2 83.1 42.8 82.8 43.2 82.8 43.2 82.8 43.3 82.7 43.3L80.3 46.2C79.4 47.3 79.4 48.8 80.3 49.9L82.7 52.8C83.2 53.2 83.1 53.8 82.6 54.2 82.6 54.2 79.4 56.3 79.4 56.3Z"/><path d="M48 23C34.2 23 23 34.2 23 48 23 61.8 34.2 73 48 73 61.8 73 73 61.8 73 48 73 34.2 61.8 23 48 23ZM48 71C35.3 71 25 60.7 25 48 25 35.3 35.3 25 48 25 60.7 25 71 35.3 71 48L71 48C71 60.7 60.7 71 48 71Z"/>
                                        <path d="M45 53.6 36.7 45.3 35.3 46.7 45 56.4 61.7 39.7 60.3 38.3Z"/>
                                    </g>
                                </svg>
                                <span>Mark Task as Done</span>
                            </div>            
                            <div class="inline-flex flex items-center">
                                <svg 
                                    class="w-6 fill-current"
                                    viewBox="0 0 96 96" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    xlink="http://www.w3.org/1999/xlink" 
                                    id="Icons_BadgeCross_M" overflow="hidden">
                                    <g id="Icons">
                                        <path d="M48 10C27.0071 9.99393 9.98408 27.0071 9.978 48 9.97193 68.9929 26.9851 86.0159 47.978 86.022 68.9709 86.0281 85.9939 69.0149 86 48.022 86 48.018 86 48.014 86 48.01 86.011 27.0287 69.0113 10.011 48.03 10 48.02 10 48.01 10 48 10ZM48 84.021C28.1117 84.0271 11.9841 67.9093 11.978 48.021 11.9719 28.1327 28.0897 12.0051 47.978 11.999 67.8663 11.9929 83.9939 28.1107 84 47.999 84 48.0037 84 48.0083 84 48.013 83.9802 67.8888 67.8758 83.9981 48 84.024Z"/><path d="M62.041 32.557 47.998 46.6 33.955 32.557 32.541 33.971 46.584 48.014 32.541 62.057 33.955 63.471 47.998 49.428 62.041 63.471 63.455 62.057 49.412 48.014 63.455 33.971 62.041 32.557Z"/>
                                    </g>
                                </svg>
                                <span>Delete Task</span>
                            </div>              
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

Todo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    addSubTask: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    updateSubTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
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
        addTask,
        addSubTask,
        updateTodo,
        updateTask,
        updateSubTask,
        deleteTask,
        deleteSubTask
    }
)(Todo);
