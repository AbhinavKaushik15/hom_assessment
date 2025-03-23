import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const PricingTable = () => {
  const [priceCard, setpriceCard] = useState([
    {
      title: "Basic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium iaculis magna, ac ornare eros aliquet sed.",
      price: "Free",
      validity: "Forever Free",
      point1: "Upto 5 Artboards",
      point2: "Collaboration of 2 users",
      point3: "Free to use fonts and graphics",
      point4: "5 GB of Storage",
    },
    {
      title: "Professional",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium iaculis magna, ac ornare eros aliquet sed.",
      price: "$23",
      validity: "/Per Months",
      point1: "Upto 30 Artboards",
      point2: "Collaboration of 6 users",
      point3: "Premium fonts and graphics",
      point4: "50 GB of Storage",
    },
    {
      title: "Professional +",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium iaculis magna, ac ornare eros aliquet sed.",
      price: "$43",
      validity: "/Per Months",
      point1: "Upto 80 Artboards",
      point2: "Collaboration of 20 users",
      point3: "Unlimited fonts and graphics",
      point4: "500 GB of Storage",
    },
    {
      title: "Professional Advance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium iaculis magna, ac ornare eros aliquet sed.",
      price: "$73",
      validity: "/Per Months",
      point1: "Unlimited Artboards",
      point2: "Collaboration of 40 users",
      point3: "Unlimited Premium fonts and graphics",
      point4: "2 TB of Storage",
    },
  ]);

  return (
    <div className="w-full min-h-[120vh] bg-gradient-to-b from-blue-500 to-blue-300 pt-8">
      <h1 className="text-4xl md:text-5xl text-start font-[600] text-zinc-100 px-4 md:px-9">
        Pricing Table
      </h1>
      <div className="flex items-center justify-evenly flex-wrap gap-10 xl:gap-0 py-20">
        {/* Pricing Cards */}
        {priceCard.map((p, i) => {
          return (
            <div
              key={i}
              className="w-[46vh] max-h-[80vh] backdrop-blur-md bg-[#fafafa59] rounded-xl shadow-xl border-[1.7px] border-zinc-300 py-6 px-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                </span>
                <h1 className="text-[3.5vh] font-[500]">{p.title}</h1>
              </div>

              <p className="text-xs pt-2">{p.description}</p>

              <h1 className="text-4xl font-[700] text-blue-700 pt-5">
                {p.price}
              </h1>
              <p className="text-xs text-zinc-500">{p.validity}</p>

              <div className="flex flex-col pt-5 gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full">
                    <TiTick className="text-blue-500 text-2xl" />
                  </span>
                  <p className="text-zinc-500 text-xs">{p.point1}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full">
                    <TiTick className="text-blue-500 text-2xl" />
                  </span>
                  <p className="text-zinc-500 text-xs">{p.point2}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full">
                    <TiTick className="text-blue-500 text-2xl" />
                  </span>
                  <p className="text-zinc-500 text-xs">{p.point3}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full">
                    <TiTick className="text-blue-500 text-2xl" />
                  </span>
                  <p className="text-zinc-500 text-xs">{p.point4}</p>
                </div>
              </div>

              <div className="flex flex-col items-center pt-7">
                <button className="w-full bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-[1.2px] rounded-lg py-1 text-white">
                  Get Started
                </button>
                <Link className="text-zinc-600 hover:text-zinc-400 mt-4">
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingTable;
