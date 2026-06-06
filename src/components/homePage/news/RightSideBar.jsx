import Image from 'next/image';
import React from 'react';
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import qzone1 from '../../../assets/swimming.png';
import qzone2 from '../../../assets/class.png';
import qzone3 from '../../../assets/playground.png';
import qzone4 from '../../../assets/bg.png';
const RightSideBar = () => {
   return (
      <div>
         <h1 className="font-bold text-xl">Login With</h1>
         <div className="my-2.5 space-y-2">
            <button className="btn  btn-outline btn-info w-full">
               <FaGoogle /> Login With Google
            </button>
            <button className="btn  btn-outline w-full">
               <FaGithub /> Login With Github
            </button>
         </div>
         <div className="my-8">
            <h1 className="font-semibold text-lg mb-4">Find Us On</h1>

            <button className="btn w-full justify-start  mb-2 bg-white gap-2">
               <CiFacebook className="text-[#1877F2] text-2xl" />
               Facebook
            </button>

            <button className="btn w-full justify-start  mb-2 bg-white gap-2">
               <CiTwitter className="text-[#1DA1F2] text-2xl" />
               Twitter
            </button>

            <button className="btn w-full justify-start  bg-white gap-2">
               <CiInstagram className="text-[#E4405F] text-2xl" />
               Instagram
            </button>
         </div>
         <div className="bg-[#f3f3f3] p-2 ">
            <h1 className="font-semibold text-lg mb-4">Q-Zone</h1>
            <div className="flex flex-col justify-center items-center space-y-4">
               <Image src={qzone1} alt="Q-Zone" width={300} height={255} />
               <Image src={qzone2} alt="Q-Zone" width={300} height={255} />
               <Image src={qzone3} alt="Q-Zone" width={300} height={255} />
            </div>
         </div>
         <div className="mt-2.5">
            <Image src={qzone4} alt="Q-Zone" width={300} height={255} />
         </div>
      </div>
   );
};

export default RightSideBar;
