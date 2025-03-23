import React from "react";
import { NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-[10] w-full h-14 bg-[#1d1b1bcc] flex items-center justify-between text-zinc-400 px-5 md:px-6">
      {/* logo */}
      <h1 className="logo text-zinc-100 text-[2.4vh] tracking-tighter md:text-[1.7vw] font-[500] leading-0">
        House of Marktech
      </h1>

      {/* NavLinks */}
      <div className="flex gap-[5vw] items-center">
        <NavLink
          className="flex text-[1.9vh] md:text-[2.8vh] text-white hover:text-zinc-400"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="flex text-[1.9vh] md:text-[2.8vh] text-white hover:text-zinc-400"
          to="/users"
        >
          Users
        </NavLink>
        {/* <IoMenuOutline className="flex sm:hidden text-3xl text-zinc-600" /> */}
      </div>
    </div>
  );
}

export default Navbar;
