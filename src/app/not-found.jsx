import Link from 'next/link';

export default function NotFound() {
   return (
      <section className="min-h-screen flex items-center justify-center px-4">
         <div className="text-center space-y-5">
            <h1 className="text-8xl font-extrabold text-purple-600">404</h1>

            <h2 className="text-3xl font-bold text-purple-900">Page Not Found</h2>

            <p className="text-gray-600 max-w-md mx-auto">
               Sorry, the page you are looking for doesn't exist or may have been moved.
            </p>

            <Link href="/">
               <button className="btn bg-purple-600 hover:bg-purple-700 border-none text-white mt-4">
                  ← Back To Home
               </button>
            </Link>
         </div>
      </section>
   );
}
