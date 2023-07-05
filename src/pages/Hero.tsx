import React from "react";
import Logo from "../assets/asset/Group 1.png";
import Flower from "../assets/asset/5094.png";

const Hero = () => {
  return (
    <div className="card w-full max-w-[1143px] min-w-xs mx-auto bg-white shadow-xl px-6 py-10 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-16 md:space-x-14 justify-between items-center">
        <img src={Logo} alt="" className="w-48 md:w-72 h-auto" />
        <img src={Flower} alt="" className="w-36 md:w-56 h-auto" />
        <div className="flex flex-col justify-center items-center text-black text-base md:text-2xl">
          <h1>ZAHRA AZARIA</h1>
          <p>30 OCTOBER 2006</p>
        </div>
      </div>
      <div className="card-body mt-8">
        <div className="text-center text-black text-base md:text-2xl">
          <p>
            “Ya Allah kami memohon kepada-Mu keselamatan dalam agama, dan
            kesegaran atau kesejahteraan pada tubuh dan penambahan ilmu, dan
            keberkahan rizqi, serta taubat sebelum mati dan rahmat di waktu mati,
            dan ampunan sesudah mati”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
