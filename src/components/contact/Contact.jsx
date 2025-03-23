import React from "react";
import { RxPerson } from "react-icons/rx";
import { MdWorkOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { LiaIndustrySolid } from "react-icons/lia";
import { AiOutlineQuestion } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full min-h-[110vh] flex flex-col items-center py-5 gap-9 bg-gradient-to-b from-blue-300 to-blue-500">
      <h1 className="text-4xl md:text-5xl text-center font-[600] text-blue-700">
        Contact Us
      </h1>
      {/* Contact Form */}
      <div className="w-[80vw] min-h-[110vh] pt-7 rounded-xl shadow-xl backdrop-blur-md bg-[#fafafa1a] border-[1.8px] border-zinc-300 px-5 flex flex-col gap-5">
        {/* First Name & Last Name */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-md font-[500]">First Name</span>
            <div className="relative">
              <input
                className="border-[1px] border-zinc-300 text-white rounded-full py-2 w-[35vh] sm:w-[34vw] pl-10 outline-none"
                type="text"
                placeholder="Enter your first name..."
              />
              <RxPerson className="absolute top-[10px] left-3 text-xl text-zinc-100" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-md font-[500]">Last Name</span>
            <div className="relative">
              <input
                className="border-[1px] border-zinc-300 rounded-full text-white py-2 w-[35vh] sm:w-[34vw] pl-10 outline-none"
                type="text"
                placeholder="Enter your last name..."
              />
              <RxPerson className="absolute top-[10px] left-3 text-xl text-zinc-100" />
            </div>
          </div>
        </div>

        {/* job & email */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-md font-[500]">Job Title</span>
            <div className="relative">
              <input
                className="border-[1px] border-zinc-300 text-white rounded-full py-2 w-[35vh] sm:w-[34vw] pl-10 outline-none"
                type="text"
                placeholder="Enter your job title..."
              />
              <MdWorkOutline className="absolute top-[10px] left-3 text-xl text-zinc-100" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-md font-[500]">Email Address</span>
            <div className="relative">
              <input
                className="border-[1px] border-zinc-300 text-white rounded-full py-2 w-[35vh] sm:w-[34vw] pl-10 outline-none"
                type="text"
                placeholder="Enter your email address..."
              />
              <CiMail className="absolute top-[10px] left-3 text-xl text-zinc-100" />
            </div>
          </div>
        </div>

        {/* company & interest */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-md font-[500]">Company Name*</span>
            <div className="relative">
              <input
                className="border-[1px] border-zinc-300 rounded-full text-white py-2 w-[35vh] sm:w-[34vw] pl-10 outline-none"
                type="text"
                placeholder="Enter your company name..."
              />
              <LiaIndustrySolid className="absolute top-[10px] left-3 text-xl text-zinc-100" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-md font-[500]">
              What are you interested in?
            </span>
            <div className="relative">
              <input
                className="border-[1px] border-zinc-300 rounded-full text-white py-2 w-[35vh] sm:w-[34vw] pl-10 outline-none"
                type="text"
                placeholder="Enter your interest..."
              />
              <AiOutlineQuestion className="absolute top-[10px] left-3 text-xl text-zinc-100" />
            </div>
          </div>
        </div>

        {/* message */}
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex flex-col">
            <span className="text-md font-[500]">Main Message</span>
            <div className="relative">
              <textarea
                className="border-[1px] border-zinc-300 rounded-md text-white py-2 h-[30vh] max-h-[20vh] w-[35vh] sm:w-[72vw] lg:w-[76vw] pl-10 outline-none"
                type="text"
                placeholder="Enter your main message..."
              ></textarea>
              <BsChatDots className="absolute top-[10px] left-3 text-xl text-zinc-100" />
            </div>
          </div>
        </div>
        {/* button */}
        <button className="bg-blue-700 w-fit hover:bg-white text-white hover:text-blue-700 text-lg font-[600] ml-5 py-1 px-3 rounded-full border-[1.6px] border-blue-700">
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default Contact;
