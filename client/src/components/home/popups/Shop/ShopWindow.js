import React, { Component } from "react";
import ShopFoodWindow from "./ShopFoodWindow.js"
import ShopPetWindow from "./ShopPetWindow.js"

export default class ShopWindow extends Component {

    constructor(props) {
        super(props);               
        this.onShopExitClick = this.onShopExitClick.bind(this);
        this.state = {
            foodWindowSeen: true
        }
    };

    onShopExitClick() {
        this.props.shopCallBack(false);
    }

    changeWindow() {
        this.setState({
            foodWindowSeen: !this.state.foodWindowSeen
        })
    }

    updateButton() {
        if (this.state.foodWindowSeen) {
            return "relative bg-pinkwindowbg border-solid rounded-lg border-2 border-darkblue w-2/5 h-4/10"
        } else {
            return "relative bg-purplewindowbg border-solid rounded-lg border-2 border-darkblue w-2/5 h-4/10"
        }
    }

    displayButton() {
        if (this.state.foodWindowSeen) {
            return <div class="p-1 border-2 border-darkblue rounded-lg bg-yellowbarbg inline-flex text-darkblue sm:text-sm md:text-base lg:text-lg xl:text-xl hover:text-gray-500">
                    <svg 
                        class="w-6 fill-current"
                        viewBox="0 -100 1250 1250" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_Pets" 
                        overflow="hidden"
                    >
                        <g>
                            <path d="M491.3,926.6c-45.7,0.4-86.8,9.6-128,18.3c-39.3,8.3-78.4,16.9-119,16.8c-86.2-0.3-135.1-78.1-108.8-155.3c15.7-46.2,44.1-83.9,80.2-115.7c30.8-27.1,62.5-53.2,87.5-86.1c18.6-24.5,36.2-49.8,54.2-74.7c17.6-24.5,35.4-48.9,59-68.1c41.4-33.7,87.9-44,139-27.8c25.9,8.2,45.7,25.9,60.6,48c14.9,22,27.7,45.4,41.3,68.3c34,57.5,74.8,109.6,123.6,155c33.5,31.2,60.1,66.5,70.2,112.3c6,27.4,4.1,54.2-6.3,80.5c-16.6,42.2-47.1,64.1-92.3,65.1c-34.4,0.8-67.7-6.3-101.3-12.2c-46.7-8.2-93.5-15.8-140.4-23.3C503.4,926.5,495.6,926.8,491.3,926.6"/>
                            <path d="M800,196.7c-1.7,53.8-17.2,104.7-54,147.8c-13.2,15.5-28.9,28-47.3,36.8c-43.2,20.7-90,10.9-121.3-25.6c-26.6-31-38-68-39.7-108.2c-2.6-62.2,13.9-118.3,55.3-165.5c22-25.1,49-42.6,82.9-45c43.7-3.1,74.9,18.5,97.4,54.5C792.8,122.9,799.6,157.9,800,196.7"/>
                            <path d="M463.6,242.6c-0.7,39.2-7.8,73.5-27.1,104.3c-36.3,57.8-101.4,70.6-156.1,30.1c-41.7-30.8-64.1-74.1-74.5-124c-9.2-44.1-7.2-87.7,11.2-129.4c14.6-33,36.8-59,72.4-69.3c41.8-12.1,77.4,2.3,107.9,30.6c39.1,36.2,58.1,82.7,64.5,135.1C462.9,228.5,463.2,237.2,463.6,242.6"/>
                            <path d="M990,460.4c-3,55.8-24.7,110-74.5,150.3c-24.3,19.7-52.2,30.4-83.8,23.3c-37.9-8.5-57.3-36.3-67.3-71.7C744.1,490,779.4,396,841.7,354.7c21.5-14.2,44.8-22.2,70.6-18.1c30.5,4.8,50.8,23.8,64,51.1C986.2,408.3,989.8,430.4,990,460.4"/>
                            <path d="M241.4,519.3c-0.2,24.1-4.2,47.3-15.5,68.8c-22.6,42.9-66.9,59.1-111.3,40.3c-37-15.7-62.5-43.8-80.3-79.1C10,501.1,1.2,450.7,20.5,398.5c12.6-34.1,36.4-56.5,73.8-59.9c26.3-2.4,49.6,7.1,70.2,22.9c44.6,34.1,67.7,80.7,75.4,135.7c0.7,5.1,1.1,10.2,1.4,15.4C241.6,514.8,241.4,517.1,241.4,519.3"/>
                        </g>
                    </svg>
                    <span> Pets </span>
                </div>
        } else {
            return <div class="p-1 border-2 border-darkblue rounded-lg bg-yellowbarbg inline-flex text-darkblue sm:text-sm md:text-base lg:text-lg xl:text-xl hover:text-gray-500">
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
                        <span> Food </span>
                    </div>
        }
    }
    render() {
        return (
            <div class={this.updateButton()}>
                <button 
                    class="p-3 text-darkblue absolute right-0 hover:text-gray-500" 
                    onClick={this.onShopExitClick}
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
                            strokeWidth="0.229186" 
                        />
                    </svg>
                </button>
    
                <div class="p-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-flex flex items-center">
                    <svg 
                        class="w-6 fill-current"
                        viewBox="0 0 96 96" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_Store" 
                        overflow="hidden"
                    >
                            <path d="M76 44C76 46.2 74.2 48 72 48 69.8 48 68 46.2 68 44L68 40 66 20 74 20 76 40 76 44ZM60 44C60 46.2 58.2 48 56 48 53.8 48 52 46.2 52 44L52 40 51 20 59 20 60 40 60 44ZM44 40 44 44C44 46.2 42.2 48 40 48 37.8 48 36 46.2 36 44L36 40 37 20 45 20 44 40ZM40 72 24 72 24 56 40 56 40 72ZM20 44 20 40 22 20 30 20 28 40 28 44C28 46.2 26.2 48 24 48 21.8 48 20 46.2 20 44ZM80 14 16 14 12 40 12 44C12 46.2 13.8 48 16 48L16 82 50 82 50 56 72 56 72 82 80 82 80 48C82.2 48 84 46.2 84 44L84 40 80 14Z" />
                    </svg>
                    <span>Shop</span>
                    <div class="pl-6">
                        <button 
                            class="inline-block"
                            onClick={() => this.changeWindow()}>
                                {this.displayButton()}
                        </button>   
                        {this.state.foodWindowSeen ? 
                            <span class="pl-16 ml-1 sm:text-base md:text-sm lg:text-md xl:text-lg">Drag food to your pet to feed it!</span> 
                            : null}
                    </div>                  
                </div> 
                {this.state.foodWindowSeen ? 
                    <ShopFoodWindow 
                        petId={this.props.petId} /> : 
                    <ShopPetWindow 
                        decrementCoins={this.props.decrementCoins} />}
            </div>
        );
    }
}