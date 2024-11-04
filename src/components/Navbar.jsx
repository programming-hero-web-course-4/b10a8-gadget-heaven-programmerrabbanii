import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <div className="bg-white text-black ">
            <div className="navbar w-11/12 mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
            <li className="mr-3 text-black "><NavLink  to="/">Home</NavLink></li> 
            <li className="mr-3 text-black "><NavLink to="/statistics">Statistics</NavLink></li>
            <li className="mr-3 text-black"><NavLink to="/about">About</NavLink> </li>
            <li className="mr-3 text-black"><NavLink to="/dashboard">Dashboard</NavLink> </li>
           
           
            

      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-black">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white text-lg">
            <li className="mr-3 text-black"><NavLink  to="/">Home</NavLink></li>
            <li className="mr-3 text-black"><NavLink to="/statistics">Statistics</NavLink></li>
            <li className="mr-3 text-black"><NavLink to="/about">About</NavLink> </li>
            <li className="mr-3 text-black"><NavLink to="/dashboard">Dashboard</NavLink> </li>
           
           
    </ul>
  </div>
  <div className="navbar-end gap-5">
  <i class="fa-solid fa-cart-shopping bg-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"></i>
  <i class="fa-regular fa-heart    bg-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"></i>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Navbar;