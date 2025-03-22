import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getUsers();
    }, 800);

    return () => clearTimeout(timeOut);
  }, []);

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 w-full min-h-[120vh] px-10">
      {/* Search Input */}

      <div className="w-full h-20 relative flex items-center">
        <Link className="absolute left-0" to="/">
          <IoMdArrowRoundBack className="text-3xl text-white" />
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <IoSearch className="absolute text-2xl left-3 top-[10px] text-zinc-300 " />
          <input
            className="w-[40vw] outline-none border-[1.6px] border-zinc-300 rounded-full py-2 pl-[45px] placeholder:text-zinc-300"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="search users..."
          />
          {searchQuery.length > 0 && (
            <IoMdClose
              onClick={() => setSearchQuery("")}
              className="absolute text-2xl right-3 top-[10px] text-zinc-300"
            />
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="flex sm:justify-center xl:justify-normal gap-2 whitespace-nowrap flex-wrap py-3">
        {filterUsers.length > 0 ? (
          filterUsers.map((u, i) => (
            <div
              key={i}
              className="w-[190px] h-[280px] backdrop-blur-md bg-[#fafafa59] flex flex-col rounded-xl py-3"
            >
              <h1 className="text-md font-[500] text-center">
                {u.name.slice(0, 22)}
              </h1>
              <h1 className="text-xs text-zinc-600 text-center">{u.email}</h1>
              <h1 className="flex px-4 text-sm text-zinc-800 mt-5">
                Website: <h1 className="text-zinc-300 ml-1">{u.website}</h1>
              </h1>
              <h1 className="flex px-4 text-sm text-zinc-800">
                Phone no :
                <h1 className="text-zinc-300 ml-1">{u.phone.slice(0, 12)}</h1>
              </h1>
              <h1 className="pl-4 text-md mt-3 text-zinc-600">Address:</h1>
              <h1 className="pl-4 text-sm text-zinc-800 mt-2 flex">
                City : <h1 className="text-zinc-300 ml-1">{u.address.city}</h1>
              </h1>
              <h1 className="pl-4 text-sm text-zinc-800 flex">
                Street :
                <h1 className="text-zinc-300 ml-1">{u.address.street}</h1>
              </h1>
              <h1 className="pl-4 text-sm text-zinc-800 flex">
                Pin-code :
                <h1 className="text-zinc-300 ml-1">{u.address.zipcode}</h1>
              </h1>

              <h1 className="pl-4 text-sm text-zinc-800 mt-1">
                Company Name :
                <h1 className="text-zinc-300">{u.company.name}</h1>
              </h1>
            </div>
          ))
        ) : (
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center col-span-3 text-white text-2xl">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Users;
