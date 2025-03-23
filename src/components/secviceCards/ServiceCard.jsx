import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = () => {
  const [cards, setcards] = useState([
    {
      title: "Web Design",
      description: "Crafts engaging, user-friendly websites.",
      head: ["Landing Page", "Website", "One Page"],
    },
    {
      title: "Graphic Design",
      description: "Creates impactful visuals and branding.",
      head: ["Packaging", "Brand Identity", "Illustrations", "Logo", "Signage"],
    },
    {
      title: "Developers",
      description: "Build functional and scalable solutions.",
      head: ["Web Applications", "Mobile Apps", "Database", "Add-ons"],
    },
    {
      title: "Copywriting",
      description: "Delivers persuasive and creative content.",
      head: ["Blog Posts", "Video Scripts", "Scales Pages", "Slogans"],
    },
  ]);

  return (
    <div className="w-full min-h-[80vh] bg-gradient-to-b from-blue-200 to-blue-500 py-10">
      <h1 className="text-4xl md:text-5xl font-[600] text-start text-white px-4 md:px-9">
        Our Services
      </h1>
      <div className="flex gap-8 lg:gap-3 items-center justify-evenly flex-wrap mt-10">
        {cards.map((c, i) => {
          return (
            <div key={i} className="w-[45vh] min-h-[45vh] border-[1.8px] border-zinc-300 backdrop-blur-md bg-[#fafafa3b] rounded-lg flex flex-col items-center py-[6px]"
            >
              {/* Service Details */}
              <div className="w-[43vh] min-h-[40vh] bg-blue-100 flex flex-col justify-center rounded-lg px-3 py-3">
                <h1 className="text-3xl font-[700] leading-none">{c.title}</h1>
                <p className="font-[400] leading-none pt-2">{c.description}</p>
                <div className="flex gap-2 pt-4 whitespace-nowrap flex-wrap mt-5 sm:mt-0">
                  {c.head.map((p, i) => (
                    <h2 key={i} className="rounded-full text-md sm:text-sm text-white py-1 px-2 bg-blue-400">{p}</h2>
                  ))}
                </div>
              </div>
              {/* Explore Section */}
              <div className="w-full flex justify-between items-center px-5 py-3">
                <h1 className="text-lg font-[500]">Explore</h1>
                <span className="flex items-center justify-center w-7 h-7 rounded-sm backdrop-blur-md bg-[#fafafa04]">
                  <FaArrowRight />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
