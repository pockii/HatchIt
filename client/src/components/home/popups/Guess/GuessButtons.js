import React, { Component } from "react";

export default class GuessButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstChoice: this.props.firstChoice,
            guessed: false,
            correctGuess: false
        };
    }

    randomizeReward() {
        if (this.props.randomizer()) {
            return this.props.incrementHappiness(10);
        } else {
            return this.props.incrementCoins(10);
        }
    }

    correctChoice(choice) {
        return (choice === 1 && this.state.firstChoice) || (choice === 2 && !(this.state.firstChoice))
    }

    onGuessChoiceClick = (choice) => {
        if (this.correctChoice(choice)) {
            this.randomizeReward();
            this.props.callBackAfterGuess(true);
        } else {
            this.props.decrementHappiness(5);
            this.props.callBackAfterGuess(false);
        }
    }

    render() {
        return (
            <div class="flex justify-center grid grid-cols-2 col-gap-2 pl-8 pt-2 pb-4">  
                <button 
                    class="bg-yellowbarbg hover:bg-yellow-100 border-solid rounded-lg border-2 border-darkblue hover:border-blue-700 shadow hover:shadow-lg w-48 h-40 overflow-hidden"
                    onClick={() => this.onGuessChoiceClick(1)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink"
                        viewBox="-20 20 400 400"
                        overflow="hidden"
                        id="Icons_Red_Gift"
                    >
                        <g 
                            transform="scale(0.900, 0.900)">
                            <path 
                                d="M82.962 117.154 C 82.078 117.555,80.848 118.548,80.228 119.360 L 79.102 120.837 78.992 148.993 C 78.874 179.497,78.855 179.183,80.972 181.172 C 82.997 183.074,81.919 183.032,124.902 182.890 L 165.234 182.757 165.234 149.841 L 165.234 116.925 138.803 116.666 C 93.451 116.221,84.852 116.296,82.962 117.154 M254.199 116.699 L 234.375 116.804 234.375 149.781 L 234.375 182.758 274.902 182.890 C 318.093 183.032,317.003 183.074,319.028 181.172 C 321.145 179.183,321.126 179.497,321.008 148.993 L 320.898 120.837 319.802 119.399 C 317.227 116.025,324.567 116.327,254.199 116.699 " 
                                fill="#f49c74">
                            </path>
                            <path 
                                d="M148.340 116.699 L 165.625 116.805 165.625 149.750 L 165.625 182.695 169.434 182.947 C 171.528 183.086,185.767 183.200,201.074 183.201 L 228.906 183.203 228.906 255.857 L 228.906 328.511 199.707 328.613 L 170.508 328.716 199.902 328.811 L 229.297 328.906 229.297 255.859 L 229.297 182.813 231.836 182.813 L 234.375 182.813 234.375 149.869 L 234.375 116.926 199.740 116.666 C 180.691 116.523,157.444 116.448,148.080 116.500 L 131.055 116.593 148.340 116.699 " 
                                fill="#eb3c54"> 
                            </path>
                            <path 
                                d="M137.109 71.671 C 114.669 76.684,106.438 105.749,124.829 115.039 L 127.148 116.211 161.914 116.453 C 256.301 117.111,274.966 116.888,278.699 115.062 C 297.626 105.802,288.169 75.214,265.234 71.510 C 255.222 69.893,253.433 70.653,226.914 87.799 L 214.179 96.032 212.072 94.989 C 210.005 93.965,209.818 93.945,202.321 93.945 L 194.678 93.945 192.319 95.181 L 189.960 96.417 186.484 94.154 C 178.700 89.087,171.515 84.434,168.750 82.670 C 167.139 81.643,164.238 79.765,162.305 78.498 C 152.001 71.745,145.122 69.882,137.109 71.671 M155.247 86.286 C 158.315 87.364,176.923 99.386,177.950 100.953 C 179.345 103.081,178.429 106.450,176.133 107.637 C 174.532 108.465,139.942 108.479,138.360 107.652 C 134.801 105.793,133.626 102.263,134.932 97.358 C 137.232 88.718,147.007 83.390,155.247 86.286 M257.480 86.106 C 268.222 89.367,273.234 103.432,265.156 107.652 C 263.531 108.501,228.980 108.463,227.331 107.611 C 225.177 106.497,224.252 102.804,225.633 100.833 C 226.248 99.954,229.743 97.593,243.359 88.855 C 248.240 85.723,253.100 84.777,257.480 86.106 M170.703 255.859 L 170.703 328.516 199.805 328.516 L 228.906 328.516 228.906 255.859 L 228.906 183.203 199.805 183.203 L 170.703 183.203 170.703 255.859 " 
                                fill="#dc3444">
                            </path>
                            <path 
                                d="M165.330 149.705 L 165.234 182.809 128.027 182.908 L 90.820 183.008 90.707 252.734 C 90.588 325.212,90.567 324.219,92.254 326.363 C 94.342 329.018,92.231 328.888,133.496 328.898 L 170.703 328.906 170.703 255.859 L 170.703 182.813 168.166 182.813 L 165.629 182.813 165.527 149.707 L 165.425 116.602 165.330 149.705 M229.297 255.858 L 229.297 328.906 266.504 328.898 C 307.769 328.888,305.658 329.018,307.746 326.363 C 309.433 324.219,309.412 325.212,309.293 252.734 L 309.180 183.008 269.238 182.908 L 229.297 182.809 229.297 255.858 " 
                                fill="#ec845c">
                            </path>
                        </g>
                    </svg>
                </button>  
                        
                <button 
                    class="bg-yellowbarbg hover:bg-yellow-100 border-solid rounded-lg border-2 border-darkblue hover:border-blue-700 shadow hover:shadow-lg w-48 h-40 overflow-hidden"
                    onClick={() => this.onGuessChoiceClick(2)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink"
                        viewBox="-20 20 400 400"
                        overflow="hidden"
                        id="Icons_Red_Gift"
                    >
                        <g 
                            transform="scale(0.900, 0.900)">
                            <path 
                                d="M82.962 117.154 C 82.078 117.555,80.848 118.548,80.228 119.360 L 79.102 120.837 78.992 148.993 C 78.874 179.497,78.855 179.183,80.972 181.172 C 82.997 183.074,81.919 183.032,124.902 182.890 L 165.234 182.757 165.234 149.841 L 165.234 116.925 138.803 116.666 C 93.451 116.221,84.852 116.296,82.962 117.154 M254.199 116.699 L 234.375 116.804 234.375 149.781 L 234.375 182.758 274.902 182.890 C 318.093 183.032,317.003 183.074,319.028 181.172 C 321.145 179.183,321.126 179.497,321.008 148.993 L 320.898 120.837 319.802 119.399 C 317.227 116.025,324.567 116.327,254.199 116.699 " 
                                fill="#a4a4f4">
                            </path>
                            <path 
                                d="M148.340 116.699 L 165.625 116.805 165.625 149.750 L 165.625 182.695 169.434 182.947 C 171.528 183.086,185.767 183.200,201.074 183.201 L 228.906 183.203 228.906 255.857 L 228.906 328.511 199.707 328.613 L 170.508 328.716 199.902 328.811 L 229.297 328.906 229.297 255.859 L 229.297 182.813 231.836 182.813 L 234.375 182.813 234.375 149.869 L 234.375 116.926 199.740 116.666 C 180.691 116.523,157.444 116.448,148.080 116.500 L 131.055 116.593 148.340 116.699 " 
                                fill="#fccc6c">
                            </path>
                            <path 
                                d="M137.109 71.671 C 114.669 76.684,106.438 105.749,124.829 115.039 L 127.148 116.211 161.914 116.453 C 256.301 117.111,274.966 116.888,278.699 115.062 C 297.626 105.802,288.169 75.214,265.234 71.510 C 255.222 69.893,253.433 70.653,226.914 87.799 L 214.179 96.032 212.072 94.989 C 210.005 93.965,209.818 93.945,202.321 93.945 L 194.678 93.945 192.319 95.181 L 189.960 96.417 186.484 94.154 C 178.700 89.087,171.515 84.434,168.750 82.670 C 167.139 81.643,164.238 79.765,162.305 78.498 C 152.001 71.745,145.122 69.882,137.109 71.671 M155.247 86.286 C 158.315 87.364,176.923 99.386,177.950 100.953 C 179.345 103.081,178.429 106.450,176.133 107.637 C 174.532 108.465,139.942 108.479,138.360 107.652 C 134.801 105.793,133.626 102.263,134.932 97.358 C 137.232 88.718,147.007 83.390,155.247 86.286 M257.480 86.106 C 268.222 89.367,273.234 103.432,265.156 107.652 C 263.531 108.501,228.980 108.463,227.331 107.611 C 225.177 106.497,224.252 102.804,225.633 100.833 C 226.248 99.954,229.743 97.593,243.359 88.855 C 248.240 85.723,253.100 84.777,257.480 86.106 M170.703 255.859 L 170.703 328.516 199.805 328.516 L 228.906 328.516 228.906 255.859 L 228.906 183.203 199.805 183.203 L 170.703 183.203 170.703 255.859 " 
                                fill="#f6c04e">
                            </path>
                            <path 
                                d="M165.330 149.705 L 165.234 182.809 128.027 182.908 L 90.820 183.008 90.707 252.734 C 90.588 325.212,90.567 324.219,92.254 326.363 C 94.342 329.018,92.231 328.888,133.496 328.898 L 170.703 328.906 170.703 255.859 L 170.703 182.813 168.166 182.813 L 165.629 182.813 165.527 149.707 L 165.425 116.602 165.330 149.705 M229.297 255.858 L 229.297 328.906 266.504 328.898 C 307.769 328.888,305.658 329.018,307.746 326.363 C 309.433 324.219,309.412 325.212,309.293 252.734 L 309.180 183.008 269.238 182.908 L 229.297 182.809 229.297 255.858 " 
                                fill="#9494ec">
                            </path>
                        </g>
                </svg>
            </button>  
        </div>
        );
    }
}