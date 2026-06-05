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
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-12 gap-4 my-8">
         <div className=" col-span-1 md:col-span-3">
            <h1 className="font-bold text-3xl"> All Category</h1>
            <ul className="flex flex-col gap-3 mt-6">
               {allData.news_category.map((data) => (
                  <li
                     className="bg-slate-100 p-2 font-xl text-center rounded-md "
                     key={data.category_id}
                  >
                     {data.category_name}
                  </li>
               ))}
            </ul>
         </div>
         <div className="font-bold text-3xl bg-purple-500 col-span-1  md:col-span-6">
            Dragon News Home
         </div>
         <div className="font-bold text-3xl bg-red-400 col-span-1 md:col-span-3">Login With</div>
      </div>
   );
}
