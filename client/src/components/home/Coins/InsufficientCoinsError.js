import React from "react";
import Modal from "react-modal";

import insufficientcoinserror from './insufficientcoinserror.module.css';

Modal.defaultStyles.overlay.backgroundColor = 'transparent';

export default function InsufficientCoinsError({ insufficientCoinsErrorSeen, onInsufficientCoinsErrorExitClick }) {
    return (
        <Modal 
            isOpen={insufficientCoinsErrorSeen} 
            onRequestClose={onInsufficientCoinsErrorExitClick}
            shouldCloseOnEsc={true}
            className={insufficientcoinserror.modal}
            ariaHideApp={false}
        >
            <button 
                class="p-3 text-darkblue absolute right-0 top-0 hover:text-gray-500" 
                onClick={onInsufficientCoinsErrorExitClick}
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
                
            <div class="flex flex-col flex content-center p-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                <svg 
                    class="w-3/12 fill-current self-center"
                    viewBox="0 0 96 96" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xlink="http://www.w3.org/1999/xlink" 
                    id="Icons_Warning" 
                    overflow="hidden">
                    <path d="M90.6 80 51.5 12C50 9.3 46.1 9.3 44.6 12L5.4 80C3.9 82.7 5.8 86 8.9 86L48 86 87.1 86C90.2 86 92.1 82.7 90.6 80ZM45 28 51 28 51 63 45 63 45 28ZM48 77C45.2 77 43 74.8 43 72 43 69.2 45.2 67 48 67 50.8 67 53 69.2 53 72 53 74.8 50.8 77 48 77Z"/>
                </svg>
                <p class="text-center">ERROR: Purchase failed. Insufficient Coins!</p>
            </div>    
        </Modal>
    );
}

