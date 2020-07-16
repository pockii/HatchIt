import React from 'react';

export default function DraggableIcon({ name, imgsrc, value, coins }) {
    function onDragStart(e) {
        e.dataTransfer.setData("value", value);
        e.dataTransfer.setData("coins", coins);
    }

    function foodLabel() {
        if (name.length > 8) {
            return  <p class="pt-1 text-center text-darkblue sm:text-md md:text-lg lg:text-xl xl:text-xl">
                        {name}
                    </p>
        } else {
            return <p class="text-center text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                        {name}
                    </p>
        }
    }

    return (
        <div class="flex flex-col flex justify-center border-solid rounded border-2 border-darkblue bg-yellowbarbg w-full h-full">  
            <div
                class="w-8/12 self-center"
                onDragStart = {onDragStart} 
                draggable="true">
                    <img class="w-full px-2 pt-2"
                        src={imgsrc}
                        alt={name}>
                    </img>
            </div>
            {foodLabel()}
        </div>
    );
}