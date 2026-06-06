import LeftSideBar from '@/components/homePage/news/LeftSideBar';
import RightSideBar from '@/components/homePage/news/RightSideBar';
import Image from 'next/image';
const allCategory = async () => {
   try {
      const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
      if (!res.ok) {
         throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data.data;
   } catch (error) {
      throw new Error('Failed to fetch categories');
   }
};
export default async function Home() {
   const allData = await allCategory();
   return (
      <div className="w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-12 gap-4 my-8">
         <div className=" col-span-1 md:col-span-3">
            <LeftSideBar allData={allData} activeId={'03'} />
         </div>
         <div className="font-bold text-3xl bg-purple-500 col-span-1  md:col-span-6">
            Dragon News Home
         </div>
         <div className=" col-span-1 md:col-span-3">
            <RightSideBar />
         </div>
      </div>
   );
}
