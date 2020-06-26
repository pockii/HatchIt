import React, { Component } from "react";
import DraggableIcon from "./DraggableIcon.js";
import { Scrollbars } from 'react-custom-scrollbars';

import burger from './pics/burger.svg';
import cookie from './pics/cookie.svg';
import donut from './pics/donut.svg';
import watermelon from './pics/watermelon.svg';
import pizza from './pics/pizza.svg';
import chocolate from './pics/chocolate.svg';

export default class FoodWindow extends Component {
    constructor(props) {
        super(props);
    }

    onFoodExitClick = () => {
        this.props.foodCallBack(false);
    }

    render() {
        return (
            <div class="relative bg-pinkwindowbg border-solid rounded-lg border-2 border-darkblue">
                <button 
                    class="p-3 text-darkblue absolute right-0 hover:text-gray-500" 
                    onClick={this.onFoodExitClick}
                >   
                    <svg
                        class="w-6 fill-current"
                        viewBox="0 0 96 96" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_Close" overflow="hidden"
                    >
                        <path 
                            d="M83.4 21.1 74.9 12.6 48 39.5 21.1 12.6 12.6 21.1 39.5 48 12.6 74.9 21.1 83.4 48 56.5 74.9 83.4 83.4 74.9 56.5 48Z" 
                            stroke-width="0.229186" 
                        />
                    </svg>
                </button>
                <p class="p-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-flex flex items-center">
                    <svg 
                        class="w-6 fill-current"
                        viewBox="0 0 400 400" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_Food" 
                        overflow="hidden"
                        >
                        <g>
                        <path d="M83.333 31.305 C 83.333 35.095,100.208 54.758,120.833 75.000 C 141.458 95.242,158.333 115.582,158.333 120.200 C 158.333 124.819,138.528 109.038,114.321 85.132 C 90.115 61.226,66.805 41.667,62.523 41.667 C 58.240 41.667,75.013 62.199,99.796 87.294 C 124.580 112.389,142.178 135.600,138.903 138.875 C 135.628 142.149,115.094 127.242,93.272 105.748 C 71.449 84.253,50.101 66.667,45.832 66.667 C 41.562 66.667,58.438 87.292,83.333 112.500 C 111.414 140.934,123.572 158.333,115.360 158.333 C 108.079 158.333,86.305 141.173,66.973 120.200 C 20.962 70.284,15.204 77.778,57.985 131.899 C 106.881 193.757,148.277 209.132,177.875 176.427 C 202.754 148.936,195.210 117.205,154.528 78.225 C 115.547 40.874,83.333 19.644,83.333 31.305 M185.417 192.585 C 46.164 330.329,19.519 366.667,57.768 366.667 C 67.298 366.667,98.556 339.459,134.359 300.000 C 172.120 258.383,201.296 233.260,212.008 233.139 C 238.252 232.843,358.333 91.854,358.333 61.337 C 358.333 30.970,317.361 62.069,185.417 192.585 M241.708 245.783 C 228.025 262.271,318.861 365.149,347.917 366.071 C 380.708 367.113,369.311 339.640,314.359 285.176 C 256.794 228.123,256.498 227.962,241.708 245.783 " />
                        </g>
                    </svg>
                    <span>Food</span>
                </p> 
                <div class="pr-5">
                    <Scrollbars 
                        autoHeight
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={400}
                    > 
                        <div class="flex items-center grid grid-cols-3 row-gap-4 col-gap-6 pl-6 pr-6 h-48 overflow-scroll">
                            <DraggableIcon name="Cookie" imgsrc={cookie} value="5" />
                            <DraggableIcon name="Burger" imgsrc={burger} value="10" /> 
                            <DraggableIcon name="Donut" imgsrc={donut} value="15" />
                            <DraggableIcon name="Watermelon" imgsrc={watermelon} value="20" />
                            <DraggableIcon name="Pizza" imgsrc={pizza} value="25" /> 
                            <DraggableIcon name="Chocolate" imgsrc={chocolate} value="30" />
                            <br />
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}
