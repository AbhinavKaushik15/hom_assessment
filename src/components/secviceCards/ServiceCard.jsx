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
    <div className="w-full min-h-[80vh] bg-gradient-to-b from-blue-300 to-blue-500 py-20 flex gap-8 lg:gap-3 items-center justify-evenly flex-wrap">

      {cards.map((c, i) => {
        return (
          <div
            key={i}
            className="w-[45vh] h-[49.5vh] border-[1.8px] border-zinc-300 backdrop-blur-md bg-[#fafafa3b] rounded-lg flex flex-col items-center py-[6px]"
          >
            <div className="w-[43vh] h-[40vh] bg-blue-200 rounded-lg px-3">
              <h1 className="text-3xl font-[700] pt-6">{c.title}</h1>
              <p className="font-[400] leading-none pt-2">{c.description}</p>
              <div className="flex gap-2 pt-4 whitespace-nowrap flex-wrap">
                {c.head.map((p, i) => (
                  <h2
                    key={i}
                    className="rounded-full text-sm text-white py-1 px-2 bg-blue-400"
                  >
                    {p}
                  </h2>
                ))}
              </div>
            </div>
            <div className="w-full flex justify-between items-center px-5 py-3">
              <h1 className="text-lg font-[500]">Explore</h1>
              <span className="flex items-center justify-center w-7 h-7 rounded-sm bg-zinc-100">
                <FaArrowRight />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
