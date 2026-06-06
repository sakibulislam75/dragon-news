import React from 'react';

const LeftSideBar = ({ allData, activeId }) => {
   return (
      <div>
         <h1 className="font-bold text-xl"> All Category</h1>
         <ul className="flex flex-col gap-3 mt-6">
            {allData.news_category.map((data) => (
               <li
                  className={`${activeId == data.category_id && 'bg-slate-300'} p-2 text-md  text-center rounded-md text-[]#9F9F9F`}
                  key={data.category_id}
               >
                  {data.category_name}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default LeftSideBar;
