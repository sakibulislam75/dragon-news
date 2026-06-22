'use client';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
   const { data: session, isPending } = authClient.useSession();
   console.log('session', session);
   const user = session?.user;
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
            {isPending ? (
               <span className="loading loading-spinner loading-lg text-warning"></span>
            ) : user ? (
               <div className="flex justify-center md:justify-end items-center gap-2">
                  <h2>Hello, {user.name}</h2>
                  <Image
                     src={user?.image || 'logo'}
                     alt="Logo"
                     width={50}
                     height={50}
                     className="rounded-full"
                  />
                  <button
                     onClick={async () => await authClient.signOut()}
                     className="btn bg-purple-600 text-white font-bold px-7"
                  >
                     Log-Out
                  </button>
               </div>
            ) : (
               <Link
                  href="/login"
                  className="btn bg-purple-600 text-white font-bold  w-fit px-7 ml-auto"
               >
                  Login
               </Link>
            )}
         </div>
      </div>
   );
};

export default Navbar;
