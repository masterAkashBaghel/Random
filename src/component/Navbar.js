import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row h-[100px] px-4 sm:px-20 md:px-32 lg:px-30 xl:px-48  mt-0 justify-between items-center text-black pt-2 sm:py-7 akash fixed right-0 left-0 top-0 bottom-0 z-20  ">
      {/* for  */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>
      <nav className=" flex ">
        <ul className=" flex gap-8 a">
          <li className="text-xl font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-semibold">
            <Link to="/About">About</Link>
          </li>
          <li className="text-xl font-semibold">        
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* search bar */}
      <div>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};

export default Navbar;
