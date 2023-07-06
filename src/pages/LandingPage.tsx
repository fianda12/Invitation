import React,{ useState } from "react";
import { useNavigate } from "react-router-dom"
import firebase from "./firebase";
import 'firebase/compat/auth';

import Layout from "../component/Layout";

import { IoMailOutline } from "react-icons/io5";

import Birtday from "../assets/asset/Group 1.png"
import BingkaiBunga from '../assets/asset/bingkai-bunga-ungu-23.png'
import BingkaiBungaa from '../assets/asset/bingkai-bunga-ungu-24.png'

const LandingPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          const userCredential = await firebase.auth().signInAnonymously();
          const { user } = userCredential;
          if (user) {
            await user.updateProfile({
              displayName: username,
            });
            navigate('/home');
          }
        } catch (error) {
          console.log('Error during login:', error);
        }
      };


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
            <div className="mt-5 space-y-4">
            <div className="flex justify-center items-center">
            <input
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            </div>
             <button
             onClick={handleLogin}
             className="btn bg] text-white font-sans w-full">
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
