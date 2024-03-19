import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false)
  return (
    <header class="shadow mb-2 bg-blue-400">
  <div class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center ">
    <a href="/" class="flex items-center whitespace-nowrap text-2xl font-black">
    <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
      <image href="https://res.cloudinary.com/projectbackend/image/upload/v1710839912/WhatsApp_Image_2024-03-18_at_11.46.37_PM-removebg-preview_indlvn.png" height="60" width="60" />
    </svg>
    <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
      <image href="https://res.cloudinary.com/projectbackend/image/upload/v1710839699/GFG_Logo_circluar-removebg-preview_oh0qhh.png" height="60" width="60" />
    </svg>
      <span class="text-black text-2xl font-bold ml-3">Programmers Club</span>
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class="text-white md:mr-12 hover:text-black font-bold text-xl"><a href="/">Home</a></li>
        <li class="text-white md:mr-12 hover:text-black font-bold text-xl"><a href="/members">Members</a></li>
        <li class="text-white md:mr-12 hover:text-black font-bold text-xl"><a href="/events">Events</a></li>
        <li class="text-white md:mr-12 hover:text-black font-bold text-xl"><a href="/about">About</a></li>
    
      </ul>
    </nav>
  </div>
</header>
  );
};

export default Navbar;
