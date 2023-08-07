import React from "react";
import { Link, NavLink } from "react-router-dom";
import { VscSearch, VscPerson } from "react-icons/vsc";
// import { VscHeartFilled} from "react-icons/vsc";

function Navbar() {
  // const hover = "text-submain transitions text-white";
  // const Hover = ({ isActive }) => (isActive ? "text-submain" : hover);
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container py-6 px-2 lg:px-12 justify-around items-center flex">
          {/* logo */}
          <div className="col-span-1 hidden lg:block">
            <Link to="/">
              <span className="text-submain font-bold">NETFLIX</span>
            </Link>
          </div>
          {/* search */}
          <div className="col-span-4 w-full lg:w-[40vw] md:w-full">
            <form
              action=""
              className="  mx-5 md:mx-0 text-sm bg-dryGray rounded flex-btn gap-4 h-12"
            >
              <button className="bg-submain w-12 flex-colo h-12 rounded text-white px-3">
                <VscSearch className="font-bold text-lg" />
              </button>
              <input
                type="search"
                className="font-medium placeholder:text text-sm  w-full h-12 bg-transparent border-0 px-2 text-black"
                placeholder="Search Movie Name Here "
              />
            </form>
          </div>
          {/* menu */}
          <div
            className="col-span-3 font-medium text-sm hidden lg-block xl
            gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center "
          >
            <NavLink
              to="/movie"
              className="text-white hover:text-submain active:text-submain hover:translate-4"
            >
              Movies
            </NavLink>
            <NavLink
              to="/Aboutus"
              className="text-white hover:text-submain active:text-submain hover:translate-4"
            >
              About
            </NavLink>
            <NavLink
              to="/Contactus"
              className="text-white hover:text-submain hover:translate-4"
            >
              Contact{" "}
            </NavLink>{" "}
            <NavLink
              to="/Login"
              className="text-white hover:text-submain hover:translate-4"
            >
              <VscPerson className="text-[25px]" />
            </NavLink>
            {/* <NavLink to="/favorite" className="text-white relative">
              <VscHeartFilled className="text-[25px] hover:text-submain hover:translate-4" />
              <span className="bg-submain rounded-3xl px-[6px] py-[1px] absolute -top-4 -right-[10px] ">
                2
              </span>
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
