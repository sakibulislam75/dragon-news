import Image from 'next/image';
import Link from 'next/link';
import { getNewsDetails } from '@/lib/data';

export async function generateMetadata({ params }) {
   const { Id } = await params;
   const news = await getNewsDetails(Id);
   return {
      title: news.title,
   };
}

const NewsDetails = async ({ params }) => {
   const { Id } = await params;
   const news = await getNewsDetails(Id);

   return (
      <div className="w-11/12 md:w-10/12 mx-auto my-8 card-body">
         {/* Header */}
         <h2 className="font-semibold text-lg mb-6">Dragon News</h2>

         {/* Card */}
         <div className="card bg-base-100 shadow-md">
            {/* News Image */}
            <figure>
               <Image
                  src={news.image_url}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="w-full object-cover"
               />
            </figure>

            <div className="card-body gap-4">
               {/* Tags */}
               <div className="flex flex-wrap gap-2">
                  {news.tags?.map((tag, i) => (
                     <span key={i} className="badge badge-ghost text-xs">
                        {tag}
                     </span>
                  ))}
               </div>

               {/* Title */}
               <h1 className="card-title text-xl font-bold leading-snug">{news.title}</h1>

               {/* Details */}
               <p className="text-base-content/70 text-sm leading-relaxed text-justify">
                  {news.details}
               </p>

               {/* Divider */}
               <div className="divider my-1"></div>

               {/* Back Button */}
               <Link
                  href={`/category/${news.category_id}`}
                  className="btn btn-error btn-sm w-fit text-white ml-auto"
               >
                  All news in this category
               </Link>
            </div>
         </div>
      </div>
   );
};

export default NewsDetails;
