import { NavLink } from "react-router-dom";
import bannarIm from '../assets/banner.jpg'

const Header = () => {
    return (
        <div>
            <div className="bg-[#9538E2] ">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li className="mr-3"><NavLink  to="/">Home</NavLink></li>
            <li className="mr-3"><NavLink to="/statistics">Statistics</NavLink></li>
            <li className="mr-3"><NavLink to="/about">About</NavLink> </li>
            <li className="mr-3"><NavLink to="/dashboard">Dashboard</NavLink> </li>
           
           
            

      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white text-lg">
            <li className="mr-3"><NavLink  to="/">Home</NavLink></li>
            <li className="mr-3"><NavLink to="/statistics">Statistics</NavLink></li>
            <li className="mr-3"><NavLink to="/about">About</NavLink> </li>
            <li className="mr-3"><NavLink to="/dashboard">Dashboard</NavLink> </li>
           
           
    </ul>
  </div>
  <div className="navbar-end gap-5">
  <i class="fa-solid fa-cart-shopping bg-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"></i>
  <i class="fa-regular fa-heart    bg-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"></i>
  </div>
</div>
            </div>
            {/* bannar */}

            <div>
            <div className=" bg-[#9538E2] min-h-screen ">
  <div className="hero-content text-center  w-11/12 mx-auto">
    <div className="">
      <h1 className="text-5xl text-white font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 text-white">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
      </p>
      <button className="py-2 px-7 rounded-3xl bg-white text-[#9538E2] font-semibold mt-3">Shop Now</button>
    </div>
  </div>
</div>
            {/* bannarIMg */}

            </div>

               <div className="w-7/12 mx-auto relative -mt-52 border-2 p-5 rounded-2xl">
               <img className="rounded-2xl" src={bannarIm} alt="" />
               </div>
          
        </div>
    );
};

export default Header;