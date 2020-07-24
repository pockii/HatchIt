import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import PetIcon from "./PetIcon.js"

import rabbit from "../../../state/pics/rabbit/normal_state1.svg"
import cat from "../../../state/pics/cat/normal_state1.svg"

export default function ShopPetWindow({decrementCoins}) {
    return (
        <div class="relative h-9/10">
            <div class="pr-5 w-full h-6/10">
                <Scrollbars 
                    style={{ height: '100%', width: '100%' }} 
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={400}
                > 
                    <div class="flex items-center grid grid-cols-3 row-gap-4 col-gap-6 px-6"> 
                        <PetIcon name="Rabbit" imgsrc={rabbit} id={0} coins="0" decrementCoins={decrementCoins} />  
                        <PetIcon name="Cat" imgsrc={cat} id={1} coins="100" decrementCoins={decrementCoins} />                    
                        <br />
                    </div>
                </Scrollbars>
            </div>

            <div class="pt-4 px-4 text-darkblue sm:text-base md:text-lg lg:text-xl xl:text-2xl flex items-center">
                <div class="inline-flex abolute left-0">
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
                    <span>Pets</span>
                </div>
            </div> 
        </div>
    );
}