import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { IoEye } from 'react-icons/io5';

const NewsCard = ({ news }) => {
   console.log(news);
   return (
      <div className="card bg-base-100   shadow-md ">
         <div>
            {/* header */}
            <div className="bg-[#f3f3f3] p-3 rounded-md flex justify-between items-center">
               <div className=" flex gap-2 items-center">
                  <Image
                     src={news.author?.img}
                     alt="loading"
                     width={40}
                     height={40}
                     className=" rounded-full bg-slate-300 p-1 "
                  ></Image>
                  <div>
                     <h3 className="font-semibold">{news.author?.name}</h3>
                     <h3>{news.author?.published_date}</h3>
                  </div>
               </div>
               <div className="flex items-center gap-2">
                  <CiShare2 />
                  <CiBookmark />
               </div>
            </div>
            <h2 className="card-title  font-bold p-3">{news.title}</h2>
         </div>
         <figure>
            <Image
               src={news.image_url}
               alt="Shoes"
               width={300}
               height={300}
               className="w-full rounded-md mb-2"
            ></Image>
         </figure>
         <div className="p-3">
            <p className=" text-justify line-clamp-2 my-2">{news.details}</p>

            <Link
               href={`/news/${news._id}`}
               className="ml-auto inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-red-700 transition-colors"
            >
               Read Full Story →
            </Link>
         </div>
         <h1 className="border-t border-[#c1c2c5] w-11/12 mx-auto "></h1>
         <div>
            <div className="flex justify-between items-center w-11/12 mx-auto my-2 mb-2">
               <div className="flex gap-2 items-center">
                  <CiStar />
                  {news.rating.number}
               </div>
               <div className="flex items-center gap-2">
                  <IoEye />
                  {news.total_view}
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewsCard;
