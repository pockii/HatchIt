import React from "react";

export default function GuessButton({ onGuessChoiceClick, imgsrc, name }) {
    return (
        <button 
            class="bg-yellowbarbg w-2/5 hover:bg-yellow-100 border-solid rounded-lg border-2 border-darkblue hover:border-blue-700 shadow hover:shadow-lg"
            onClick={onGuessChoiceClick}
        >
            <img 
                class="w-full px-2 pt-2"
                src={imgsrc}
                    alt={name}>
            </img>
        </button>  
    );
}