import React from 'react';
import logo from './pics/Logo2.png';

function App() {
  return (
    <div class="bg-lightbluebg w-full flex items-center grid sm:grid-row-8 md:grid-cols-8 gap-2 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl font-curly">    
      <div class="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-4 inset-0">
        <img class="object-contain w-full" src={logo} alt="Logo"></img>
      </div>
      <div class="w-7/12 rounded content center col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-4">
        <p class="text-center text-darkblue sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Sign In
        </p>
        <p class="text-center text-darkblue sm:text-xs md:text-sm xl:text-base">
          {"Here's your chance to care for a pet without the hassle!"}
        </p>
        <form class="content-center px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
          <label class="block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>

          <div class="mb-6">
            <label class="block text-darkblue sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none rounded py-2 px-3 text-gray-m mb-3 sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******"/>
          </div>

          <div class="flex items-center justify-between">
            <button class="bg-white border border-darkblue text-darkblue hover:bg-blue-700 text-white sm:text-base md:text-base lg:text-xl xl:text-2xl py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
              <a class="inline-block align-baseline sm:text-xs md:text-sm lg:text-base xl:text-xl text-darkblue hover:text-blue-800" href="#">
                Sign up
              </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
