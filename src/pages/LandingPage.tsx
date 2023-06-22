import Layout from "../component/Layout";

import { IoMailOutline } from "react-icons/io5";

import Birtday from "../assets/asset/Group 1.png"
import BingkaiBunga from '../assets/asset/bingkai-bunga-ungu-23.png'
import BingkaiBungaa from '../assets/asset/bingkai-bunga-ungu-24.png'

const LandingPage = () => {
  return (
    <Layout>
        <div className="mx-auto p-1">
            <div className="flex justify-end items-end">
            <div className="w-56">
                <img src={BingkaiBunga} alt="" />
            </div>
            </div>
            <div>
            <div className="flex flex-col justify-center items-center -mt-52">
            <div className="w-80">
            <img src={Birtday} alt=""  />
            </div>
            <div className="text-black text-center space-y-4">
                <h1 className="text-4xl">Zahra Azaria</h1>
                <p className="font-mono text-lg">WOULD BE DELIGHTED TO INVITE YOU TO MY BIRTDAY</p>
            </div>
            <div className="mt-5">
                <button className="btn bg-[#CCA9DD] text-white font-sans w-full">
                  <IoMailOutline style={{ width: '30px', height: '25px' }} />
                   OPEN INVITATION 
                </button>
            </div>
            </div> 
            <div className="flex justify-start">
            <div className="w-56">
                <img src={BingkaiBungaa} alt="" />
            </div>
            </div>
            </div>
        </div>
    </Layout>
  )
};

export default LandingPage;
