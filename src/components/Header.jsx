import React from 'react';
import { compareAsc, format } from 'date-fns';
import logo from '@/assets/logo.png';
import Image from 'next/image';
const Header = () => {
   return (
      <div className="w-10/12 mx-auto text-center mt-8 space-y-3">
         <Image src={logo} alt="Logo" width={300} height={200} className="mx-auto" />
         <h2 className="text-[#706F6F]">Journalism Without Fear or Favour</h2>
         <h2 className="text-[#706F6F]">
            <span className="font-bold">{format(new Date(), 'EEEE')}</span>,{' '}
            {format(new Date(), 'MMM dd, yyyy')}
         </h2>
      </div>
   );
};

export default Header;
