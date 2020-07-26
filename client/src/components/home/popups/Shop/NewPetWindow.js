import React from "react";
import Modal from "react-modal";
import { Scrollbars } from 'react-custom-scrollbars';

import newpetwindow from './newpetwindow.module.css';

Modal.defaultStyles.overlay.backgroundColor = 'transparent';

export default function NewPetWindow({ newPetWindowSeen, onNewPetWindowExitClick, onPetIconCallBack }) {
    
    function onButtonClick(newPet) {
        onPetIconCallBack(newPet);
        onNewPetWindowExitClick();
    }
    
    return (
        <Modal 
            isOpen={newPetWindowSeen} 
            onRequestClose={onNewPetWindowExitClick}
            shouldCloseOnEsc={true}
            className={newpetwindow.modal}
            ariaHideApp={false}
        >
            <div class="h-1/10">
                <button 
                    class="p-3 text-darkblue absolute right-0 top-0 hover:text-gray-500" 
                    onClick={onNewPetWindowExitClick}
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
            </div>


            <div class="p-2 w-full h-8/10">
                <Scrollbars 
                    style={{ height: '100%', width: '100%' }} 
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={400}
                > 
                    <div class="flex flex-col flex content-center p-3 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl w-full">
                        <svg 
                            class="w-2/12 fill-current self-center"
                            viewBox="0 0 48 48" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xlink="http://www.w3.org/1999/xlink" 
                            id="Icons_Warning" 
                            overflow="hidden">
                                <g 
                                    transform="translate(-2.000000,50.000000) scale(0.100000,-0.100000)"
                                    stroke="none"
                                >
                                    <path d="M188 420 c-135 -41 -182 -191 -91 -291 47 -52 81 -69 139 -69 63 0 126 37 159 94 82 140 -52 313 -207 266z m92 -90 c11 -11 20 -29 20 -41 0 -20 -48 -89 -62 -89 -16 0 -7 25 18 51 46 48 -1 106 -50 60 -24 -23 -36 -26 -36 -11 0 19 40 50 65 50 14 0 34 -9 45 -20z m-30 -181 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z"/>
                                </g>
                        </svg>
                        <div class="text-center"> What do you want to do? </div>
                        <button 
                            class="bg-yellowbarbg hover:bg-gray-100 border border-darkblue rounded-lg mb-1"
                            onClick={() => onButtonClick(true)}>
                                Adopt a new pet
                        </button>
                        <button 
                            class="bg-yellowbarbg hover:bg-gray-100 border border-darkblue rounded-lg"
                            onClick={() => onButtonClick(false)}>
                                Visit your old pet
                        </button>
                        <div />
                    </div>    
                </Scrollbars>
            </div>
        </Modal>
    );
}

