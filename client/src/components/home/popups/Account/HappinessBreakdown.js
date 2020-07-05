import React, { Component } from "react";
import Modal from "react-modal";
import { Scrollbars } from 'react-custom-scrollbars';
import style from './happinessbreakdown.module.css';
import { getChartData } from "./happinessBreakdownHelper";

import Chart from "./Chart";

Modal.defaultStyles.overlay.backgroundColor = 'transparent';

export default class HappinessBreakdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal 
                isOpen={this.props.happinessBreakdownSeen} 
                onRequestClose={this.props.onHappinessBreakdownExitClick}
                shouldCloseOnEsc={true}
                className={style.modal}
            >
                <button 
                    class="p-3 text-darkblue absolute right-0 top-0 hover:text-gray-500" 
                    onClick={this.props.onHappinessBreakdownExitClick}
                >
                    <svg
                        class="w-6 fill-current"
                        viewBox="0 0 96 96" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_Close" overflow="hidden">
                            <path 
                            d="M83.4 21.1 74.9 12.6 48 39.5 21.1 12.6 12.6 21.1 39.5 48 12.6 74.9 21.1 83.4 48 56.5 74.9 83.4 83.4 74.9 56.5 48Z" 
                            stroke-width="0.229186" 
                            />
                    </svg>
                </button>
                    
                <div class="pl-3 pt-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-flex flex items-center"> 
                    Happiness Breakdown
                </div>   

                <p class="flex justify-center sm:text-sm md:text-base lg:text-lg xl:text-xl text-darkblue">  
                    Total Happiness Gained: {this.props.totalHappinessGained} <br/>
                </p>     

                <div class="pl-5 pr-5">
                    <Scrollbars 
                        autoHeight
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={400}>
                        <div class="h-48 inline-flex">
                            <Chart data={getChartData(this.props.happinessBreakdown)}/>
                        </div>
                    </Scrollbars>
                </div>
            </Modal>
        );
    }
}

