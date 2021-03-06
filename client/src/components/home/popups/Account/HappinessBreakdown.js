import React from "react";
import Modal from "react-modal";
import { Scrollbars } from 'react-custom-scrollbars';
import style from './happinessbreakdown.module.css';
import { getChartData } from "./happinessBreakdownHelper";

import Chart from "./Chart";

Modal.defaultStyles.overlay.backgroundColor = 'transparent';

export default function HappinessBreakdown(props) {
    const {
        happinessBreakdownSeen,
        totalHappinessGained,
        happinessBreakdown,
        onHappinessBreakdownExitClick
    } = props;

    return (
        <Modal 
            isOpen={happinessBreakdownSeen} 
            onRequestClose={onHappinessBreakdownExitClick}
            shouldCloseOnEsc={true}
            className={style.modal}
            ariaHideApp={false}
        >
            <button 
                class="p-3 text-darkblue absolute right-0 top-0 hover:text-gray-500" 
                onClick={onHappinessBreakdownExitClick}
            >
                <svg
                    class="w-6 fill-current"
                    viewBox="0 0 96 96" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xlink="http://www.w3.org/1999/xlink" 
                    id="Icons_Close" overflow="hidden">
                        <path 
                        d="M83.4 21.1 74.9 12.6 48 39.5 21.1 12.6 12.6 21.1 39.5 48 12.6 74.9 21.1 83.4 48 56.5 74.9 83.4 83.4 74.9 56.5 48Z" 
                        strokeWidth="0.229186" 
                        />
                </svg>
            </button>
                
            <div class="pl-3 pt-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-flex flex items-center"> 
                <svg 
                    class="w-8 fill-current"
                    viewBox="0 -10 96 96" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xlink="http://www.w3.org/1999/xlink" 
                    overflow="hidden">
                        <g id="Icons_SparklingHeart">
                            <path d="M48.005 29.428C35.405 4.428 14.005 19.428 14.005 33.428 14.005 38.976 16.39 44.871 19.883 50.546 22.0814 47.4582 23.7749 44.0406 24.9 40.421 27.8 49.682 33.969 56.985 41.791 60.421 38.4279 61.9229 35.3925 64.0705 32.857 66.742 37.599 71.6309 42.6594 76.2006 48.005 80.421 48.005 80.421 82 54.425 82 33.428 82 19.43 60.6 4.432 48.005 29.428ZM63.657 46.421C62.6758 42.9638 60.2541 40.0962 57.01 38.55 60.2539 37.004 62.6755 34.1368 63.657 30.68 64.6376 34.136 67.0576 37.0031 70.3 38.55 67.0574 40.0971 64.6373 42.9646 63.657 46.421Z" />
                            <path d="M24.9 72.674C22.3435 67.7879 18.6527 63.5861 14.137 60.421 18.6525 57.2553 22.3433 53.0532 24.9 48.167 27.4567 53.0538 31.1483 57.256 35.665 60.421 31.1486 63.5859 27.457 67.7877 24.9 72.674Z" />
                        </g>
                </svg>
                <span>Happiness Breakdown</span>
            </div>   

            <p class="flex justify-center sm:text-sm md:text-base lg:text-lg xl:text-xl text-darkblue">  
                Total Happiness Gained: {totalHappinessGained} <br/>
            </p>     

            <div class="pl-5 pr-5 h-6/10 w-full">
                <Scrollbars 
                    style={{ height: '100%', width: '100%' }} 
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={400}>
                    <div class="flex justify-center inline-flex h-9/10 w-full">  
                        <Chart data={getChartData(happinessBreakdown)}/>
                    </div>         
                </Scrollbars>
            </div>
        </Modal>
    );
}

