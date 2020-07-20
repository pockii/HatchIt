import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUserData } from "../../../../actions/userdataActions";

import NewPetWindow from "./NewPetWindow.js"

class PetIcon extends Component {
    
    constructor(props) {
        super(props);
        this.onPetIconClick = this.onPetIconClick.bind(this);
        this.onPetIconCallBack = this.onPetIconCallBack.bind(this);
        this.onNewPetWindowExitClick = this.onNewPetWindowExitClick.bind(this);
        this.state = {
            unlocked: this.isUnlocked(),
            newPetWindowSeen: false
        }
    }

    isUnlocked() {
        return this.props.coins === "0" ? true : false;
    };

    onPetIconClick() {
        if (this.state.unlocked) {
            this.setState({
                newPetWindowSeen: true
            })         
        } else if (this.props.decrementCoins(this.props.coins)) {
            this.setState({
                unlocked: true
            })
        }
    };
    
    onPetIconCallBack(newPet) {
        const arr = {...this.props.auth.happiness};
        if (newPet) {
            arr[this.props.id] = 50
        };

        const userData = {
            name: this.props.auth.user.name,
            petId: this.props.id,
            happiness: arr
        };   
        this.props.updateUserData(userData);
    };

    onNewPetWindowExitClick() {
        this.setState({
            newPetWindowSeen: false
        })
    }

    updateButton() {
        if (this.state.unlocked) {
            return "flex flex-col flex justify-center border-solid rounded border-2 border-darkblue w-full h-full bg-yellowbarbg hover:opacity-75"
        } else {
            return "flex flex-col flex justify-center border-solid rounded border-2 border-darkblue w-full h-full bg-yellowbarbg hover:bg-yellow-100 opacity-50"
        }
    } 

    render() {
        return (
            <div>
                {this.state.newPetWindowSeen 
                    ?   <NewPetWindow 
                            newPetWindowSeen={this.state.newPetWindowSeen}
                            onNewPetWindowExitClick={this.onNewPetWindowExitClick} 
                            onPetIconCallBack={this.onPetIconCallBack} /> : null}
                <button 
                    class={this.updateButton()}
                    onClick={this.onPetIconClick}>  
                    <div
                        class="w-full h-24 self-center"
                    >
                            <img class="w-full h-full px-2"
                                src={this.props.imgsrc}
                                alt={this.props.name}>
                            </img>
                    </div>
                    <div class="flex inline-flex text-center text-darkblue sm:text-md md:text-lg lg:text-xl xl:text-xl">
                        <span class="pl-3">{this.props.name}</span>
                        {this.state.unlocked  
                            ? null
                            : <div class="flex inline-flex pl-3">
                                <svg class="w-6 fill-current"
                                    viewBox="0 0 96 96" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    id="Icons_Coins_M" 
                                    overflow="hidden">
                                    <g id="Icons">
                                        <path d="M85.4 58.7 85.4 51.6C85.4 46.8 77.7 43.6 68.4 42.3L68.4 36.6C68.4 35 67.5 32.8 63.4 30.7L63.4 23.6C63.4 17.1 49.5 13.6 36.4 13.6 23.3 13.6 9.4 17.1 9.4 23.6L9.4 31.6C9.4 34 11.3 36 14.4 37.6L14.4 44.6C14.4 44.6 14.4 44.6 14.4 44.7 10.3 46.8 9.4 49.1 9.4 50.6L9.4 58.6C9.4 65.1 23.3 68.6 36.4 68.6L36.4 72.6C36.4 79.1 50.3 82.6 63.4 82.6 76.5 82.6 90.4 79.1 90.4 72.6L90.4 64.6C90.4 63.1 89.5 60.8 85.4 58.7ZM88.4 64.7C88.4 68.5 78.1 72.7 63.4 72.7 51.7 72.7 42.8 70 39.6 67 39.6 67 39.6 67 39.6 67 45.7 68.9 52 69.8 58.3 69.7 70.5 69.7 83.5 66.6 85.1 61 87.3 62.1 88.4 63.4 88.4 64.7ZM71.4 74.2 71.4 80.2C70.1 80.3 68.8 80.5 67.4 80.5L67.4 74.5C68.8 74.5 70.1 74.4 71.4 74.2ZM73.4 74C74.8 73.8 76.1 73.6 77.4 73.3L77.4 79.2C76.2 79.5 74.8 79.7 73.4 79.9L73.4 74ZM79.4 72.8C80.8 72.5 82.1 72 83.4 71.5L83.4 77.3C82.1 77.9 80.8 78.3 79.4 78.7L79.4 72.8ZM47.4 78.7C46 78.3 44.7 77.9 43.4 77.3L43.4 71.5C44.7 72 46 72.4 47.4 72.8L47.4 78.7ZM49.4 73.3C50.7 73.6 52 73.8 53.4 74L53.4 80C52 79.8 50.6 79.5 49.4 79.3L49.4 73.3ZM55.4 74.2C56.7 74.3 58.1 74.5 59.4 74.5L59.4 80.5C58 80.4 56.7 80.3 55.4 80.2L55.4 74.2ZM31.4 51.7 31.4 52C30 51.8 28.6 51.5 27.4 51.3L27.4 45.4C28.7 45.7 30 45.9 31.4 46.1L31.4 51.7ZM33.4 59.7 33.4 55.7C34.3 56.5 35.3 57.2 36.4 57.7L36.4 63.4C34.5 62.1 33.4 60.9 33.4 59.7L33.4 59.7ZM83.4 59.7C83.4 60.9 82.3 62.2 80.4 63.3L80.4 57.6C81.5 57.1 82.5 56.4 83.4 55.6L83.4 59.7ZM78.4 64.3C77.1 64.9 75.8 65.3 74.4 65.7L74.4 59.8C75.8 59.5 77.1 59 78.4 58.5L78.4 64.3ZM72.4 66.2C71.2 66.5 69.8 66.7 68.4 66.9L68.4 60.9C69.8 60.7 71.1 60.5 72.4 60.2L72.4 66.2ZM66.4 67.2C65.1 67.3 63.8 67.5 62.4 67.5L62.4 61.5C63.7 61.4 65.1 61.3 66.4 61.2L66.4 67.2ZM60.4 67.6C59.7 67.6 59.1 67.6 58.4 67.6 57.7 67.6 57.1 67.6 56.4 67.6L56.4 61.6C57.1 61.6 57.7 61.6 58.4 61.6 59.1 61.6 59.7 61.6 60.4 61.6L60.4 67.6ZM54.4 67.6C53 67.5 51.7 67.4 50.4 67.3L50.4 61.3C51.7 61.4 53.1 61.6 54.4 61.6L54.4 67.6ZM48.4 67C47 66.8 45.6 66.5 44.4 66.3L44.4 60.4C45.7 60.7 47 60.9 48.4 61.1L48.4 67ZM42.4 65.7C41 65.3 39.7 64.9 38.4 64.3L38.4 58.5C39.7 59 41 59.4 42.4 59.8L42.4 65.7ZM83.4 51.7C83.4 55.5 73.1 59.7 58.4 59.7 43.7 59.7 33.4 55.5 33.4 51.7 33.4 47.9 43.7 43.7 58.4 43.7 73.1 43.7 83.4 47.9 83.4 51.7ZM33.4 47.7 33.4 46.2C34 46.3 34.6 46.3 35.2 46.4 34.6 46.8 34 47.2 33.4 47.7ZM64.7 41.9C65.3 41.5 65.9 41.1 66.5 40.6L66.5 42.1C65.8 42 65.3 42 64.7 41.9ZM63.2 32.9C65.3 34.1 66.4 35.4 66.4 36.6 66.4 38.3 64.2 40.2 60.5 41.6 59.8 41.6 59.1 41.6 58.4 41.6 51.4 41.6 44.1 42.6 38.9 44.6 28.4 44.3 20.6 41.8 17.7 39 17.7 39 17.7 39 17.7 39 23.8 40.9 30.1 41.8 36.4 41.7 48.6 41.7 61.6 38.6 63.2 32.9ZM25.4 44.8 25.4 50.7C24 50.3 22.7 49.9 21.4 49.3L21.4 43.5C22.7 44 24.1 44.5 25.4 44.8ZM19.4 42.6 19.4 48.3C17.5 47.1 16.4 45.9 16.4 44.7L16.4 40.7C17.3 41.4 18.3 42.1 19.4 42.6ZM16.4 36.3 16.4 30.5C17.7 31 19 31.4 20.4 31.8L20.4 37.7C19.1 37.3 17.7 36.9 16.4 36.3ZM22.4 38.2 22.4 32.3C23.7 32.6 25 32.8 26.4 33L26.4 39C25 38.8 23.7 38.5 22.4 38.2ZM28.4 39.2 28.4 33.2C29.7 33.3 31.1 33.5 32.4 33.5L32.4 39.5C31 39.5 29.7 39.4 28.4 39.2ZM34.4 39.6 34.4 33.6C35.1 33.6 35.7 33.6 36.4 33.6 37.1 33.6 37.7 33.6 38.4 33.6L38.4 39.6C37.7 39.6 37.1 39.6 36.4 39.6 35.7 39.6 35.1 39.7 34.4 39.6ZM40.4 39.6 40.4 33.6C41.7 33.5 43.1 33.4 44.4 33.3L44.4 39.3C43.1 39.4 41.8 39.5 40.4 39.6ZM46.4 39 46.4 33C47.8 32.8 49.1 32.6 50.4 32.3L50.4 38.2C49.2 38.5 47.8 38.8 46.4 39ZM52.4 37.7 52.4 31.8C53.8 31.5 55.1 31 56.4 30.5L56.4 36.3C55.1 36.9 53.8 37.3 52.4 37.7ZM58.4 35.3 58.4 29.6C59.5 29.1 60.5 28.4 61.4 27.6L61.4 31.6C61.4 32.9 60.4 34.1 58.4 35.3ZM14.4 35.3C12.5 34.1 11.4 32.9 11.4 31.7L11.4 27.7C12.3 28.5 13.3 29.2 14.4 29.7L14.4 35.3ZM11.4 23.7C11.4 19.9 21.7 15.7 36.4 15.7 51.1 15.7 61.4 19.9 61.4 23.7 61.4 27.5 51.1 31.7 36.4 31.7 21.7 31.7 11.4 27.4 11.4 23.7ZM14.9 46.7C16.7 50.4 23.5 52.8 31.4 53.9L31.4 58.4C19.4 57.6 11.4 53.9 11.4 50.6 11.4 49.3 12.7 48 14.9 46.7ZM14.4 62.3C12.5 61.1 11.4 59.9 11.4 58.7L11.4 54.7C12.3 55.5 13.3 56.2 14.4 56.7L14.4 62.3ZM20.4 64.7C19 64.3 17.7 63.9 16.4 63.3L16.4 57.5C17.7 58 19 58.4 20.4 58.8L20.4 64.7ZM26.4 66C25 65.8 23.6 65.5 22.4 65.3L22.4 59.4C23.7 59.7 25 59.9 26.4 60.1L26.4 66ZM28.4 60.2C29.4 60.3 30.4 60.4 31.5 60.5 31.6 61.2 32 61.9 32.4 62.6L32.4 66.6C31 66.5 29.7 66.4 28.4 66.3L28.4 60.2ZM34.4 64.4C35 64.8 35.7 65.2 36.4 65.6L36.4 66.6C35.7 66.6 35.1 66.6 34.4 66.6L34.4 64.4ZM38.4 72.7 38.4 68.7C39.3 69.5 40.3 70.2 41.4 70.7L41.4 76.4C39.5 75.1 38.4 73.9 38.4 72.7L38.4 72.7ZM61.4 74.6C62.1 74.6 62.7 74.6 63.4 74.6 64.1 74.6 64.7 74.6 65.4 74.6L65.4 80.6C64.7 80.6 64.1 80.6 63.4 80.6 62.7 80.6 62.1 80.6 61.4 80.6L61.4 74.6ZM85.4 70.6C86.5 70.1 87.5 69.4 88.4 68.6L88.4 72.6C88.4 73.8 87.3 75.1 85.4 76.2L85.4 70.6Z" />
                                    </g>
                                </svg>
                                <span> {this.props.coins} </span>
                             </div>}
                    </div>
                </button>
            </div>
        );
    }
}

PetIcon.propTypes = {
    updateUserData: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    {   
        updateUserData
    }
)(PetIcon);