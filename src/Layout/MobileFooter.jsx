import React from "react";
import { NavLink } from "react-router-dom";
import { BsCollectionPlay } from "react-icons/bs";
import { BiUserPin, BiLogInCircle } from "react-icons/bi";
import { IoLogInSharp } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

function MobileFooter() {
  const active = " bg-white text-main";
  const inActive =
    "transitions text-2xl flex-colo hover:bg-white hover:text-main text-  rounded-md px-4 py-3";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;
  return (
    <>
      <div className="flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full"></div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1">
          <NavLink to="/" className={Hover}>
            <AiFillHome />
          </NavLink>
          <NavLink to="/movie" className={Hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/Contactus" className={Hover}>
            <BiUserPin />
          </NavLink>
          <NavLink to="/Login" className={Hover}>
            <BiLogInCircle />
          </NavLink>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
