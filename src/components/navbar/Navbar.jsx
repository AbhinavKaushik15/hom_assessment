import React from "react";
import { NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-[10] w-full h-14 bg-[#1d1b1b7e] flex items-center justify-between text-zinc-400 px-6">
      {/* logo */}
      <h1 className="logo text-zinc-600 md:text-[1.7vw] font-[500] leading-0">
        House of Marktech
      </h1>

      {/* NavLinks */}
      <div className="flex gap-10 items-center">
        <NavLink className="hidden sm:flex text-[2.8vh]" to="/">
          Home
        </NavLink>
        <NavLink
          className="hidden sm:flex text-[2.8vh] hover:text-black"
          to="/users"
        >
          Users
        </NavLink>
        <IoMenuOutline className="flex sm:hidden text-3xl text-zinc-600" />
      </div>
    </div>
  );
}

export default Navbar;
