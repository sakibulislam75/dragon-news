import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
   return (
      <div className="w-10/12 mx-auto flex justify-between items-center bg-[#f3f3f3] my-4 py-2 px-4 ">
         <button className="btn bg-[#d72050] text-white">Breaking News</button>
         <Marquee pauseOnHover={true}>
            <span className="ms-4">
               Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs
               Spain as...
            </span>
         </Marquee>
      </div>
   );
};

export default BreakingNews;
