import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ allData, activeId }) => {
   return (
      <div>
         <h1 className="font-bold text-xl"> All Category</h1>
         <ul className="flex flex-col gap-3 mt-6">
            {allData.news_category.map((data) => (
               <li
                  className={`${activeId == data.category_id && 'bg-[#ad46ff]'} p-2 text-md  text-center rounded-md text-[]#9F9F9F`}
                  key={data.category_id}
               >
                  <Link href={`/category/${data.category_id}`} className=" w-full block">
                     {data.category_name}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default LeftSideBar;
