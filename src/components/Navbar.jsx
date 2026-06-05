import Link from 'next/link';
import React from 'react';
import logo from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
   return (
      <div className="w-11/12 md:w-10/12 mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-4">
            {/* Empty column only for desktop */}
            <div className="hidden md:block"></div>

            {/* Menu */}
            <div>
               <ul className="flex justify-center gap-4 md:gap-6 text-[#706F6F]">
                  <li>
                     <NavLink href="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink href="/about">About</NavLink>
                  </li>
                  <li>
                     <NavLink href="/career">Career</NavLink>
                  </li>
               </ul>
            </div>

            {/* Right Side */}
            <div className="flex justify-center md:justify-end items-center gap-4">
               <Image src={logo} alt="Logo" width={50} height={50} className="rounded-full" />
               <Link href="/login" className="btn bg-purple-600 text-white font-bold px-7">
                  Login
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
