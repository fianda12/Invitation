import React from "react";
import BingkaiBunga from '../assets/asset/bingkai-bunga-ungu-23.png';
import BingkaiBungaa from '../assets/asset/bingkai-bunga-ungu-24.png';

const Venue = () => {
  return (
    <div className="card w-full max-w-[1143px] mx-auto bg-white shadow-xl px-6 py-10 md:py-16 lg:py-20">
      <div className="flex justify-end items-end">
        <div className="w-28 md:w-56">
          <img src={BingkaiBunga} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="card-body flex flex-col justify-center items-center text-center -mt-20 md:-mt-72">
        <div className="text-2xl md:text-4xl lg:text-7xl text-black font-sans">
          <h1>BIRTHDAY PARTY</h1>
        </div>
        <div className="mt-4 md:mt-9 text-black">
          <p className="text-base md:text-xl lg:text-2xl font-mono">AKAN DILAKSANAKAN PADA</p>
          <div>
            <p className="text-sm md:text-base">30 OCTOBER 2023</p>
            <p className="text-sm md:text-base">17.00 WIB - SELESAI</p>
          </div>
        </div>
        <div className="mt-4 md:mt-9 text-black">
          <p className="text-base md:text-xl lg:text-2xl font-mono">DRESSCODE</p>
          <div>
            <p className="text-sm md:text-base">MAN <span className="font-bold">BLACK AND WHITE</span></p>
            <p className="text-sm md:text-base">WOMEN <span className="font-bold">BLACK AND WHITE</span></p>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="w-28 md:w-56 mr-3 md:mr-6 -mt-20 md:-mt-60">
          <img src={BingkaiBungaa} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Venue;
