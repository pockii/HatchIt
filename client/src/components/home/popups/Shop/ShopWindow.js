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
    
<<<<<<< HEAD
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
                    <div class="pl-64 ml-10">
                        <button 
                            class="inline-block px-3 bg-yellowbarbg rounded-lg border-2 border-darkblue h-10 w-20 hover:bg-gray-100"
                            onClick={() => this.changeWindow()}>
                                {this.state.foodWindowSeen ? 'Pets' : 'Food' }
                        </button>    
                    </div>                  
=======
                <div class="text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-flex flex items-center">
                    <div class="p-3 inline-flex flex items-center">
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
                    </div>

                    <ul class="flex pl-48">
                        <li class="-mb-px pl-4">
                            <button 
                                class="inline-block border-l-2 border-r-2 py-1 px-4 border-darkblue w-20 hover:underline"
                                onClick={() => this.changeWindow(true)}>
                                    Food
                            </button>
                        </li>
                        <li>
                            <button 
                                class="inline-block border-r-2 py-1 px-4 border-darkblue w-20 hover:underline"
                                onClick={() => this.changeWindow(false)}>
                                    Pet
                            </button>
                        </li>
                    </ul>
>>>>>>> 998843a213325958d6137304c623d188753a82a5
                </div> 
                {this.state.foodWindowSeen ? 
                    <ShopFoodWindow petId={this.props.petId} onShopExitClick={this.onShopExitClick} /> : 
                    <ShopPetWindow 
                        decrementCoins={this.props.decrementCoins} />}
            </div>
        );
    }
}