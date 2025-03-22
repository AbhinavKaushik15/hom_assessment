import React from "react";
import reel from "../../../public/video/reel-short.mp4";
import reelMobile from "../../../public/video/reel-short-mobile.mp4";

const HeroSection = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Desktop Video */}
        <video
          className="w-full h-full object-cover hidden md:flex"
          src={reel}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Mobile Video */}
        <video
          className="w-full h-full object-cover flex md:hidden"
          src={reelMobile}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default HeroSection;
