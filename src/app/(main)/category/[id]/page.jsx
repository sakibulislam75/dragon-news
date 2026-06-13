import LeftSideBar from '@/components/homePage/news/LeftSideBar';
import NewsCard from '@/components/homePage/news/NewsCard';
import RightSideBar from '@/components/homePage/news/RightSideBar';
import { allCategory, getCategoryNews } from '@/lib/data';
import React from 'react';

const NewsByCategory = async ({ params }) => {
   const { id } = await params;
   const allData = await allCategory();
   const categoryNews = await getCategoryNews(id);
   return (
      <div className="w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-12 gap-4 my-8">
         <div className=" col-span-1 md:col-span-3">
            <LeftSideBar allData={allData} activeId={id} />
         </div>
         <div className=" col-span-1  md:col-span-6   ">
            <h1 className="font-bold text-xl">Dragon News Home</h1>
            <div className="flex flex-col gap-3 mt-6 space-y-3 ">
               {categoryNews.map((news) => (
                  <NewsCard key={news._id} news={news} />
               ))}
            </div>
         </div>
         <div className=" col-span-1 md:col-span-3">
            <RightSideBar />
         </div>
      </div>
   );
};

export default NewsByCategory;
