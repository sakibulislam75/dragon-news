import Link from 'next/link';

export default function NotFound() {
   return (
      <section className="min-h-screen flex items-center justify-center px-4">
         <div className="text-center space-y-5">
            <h1 className="text-8xl font-extrabold text-primary">404</h1>

            <h2 className="text-3xl font-bold">Page Not Found</h2>

            <p className="text-base-content/70 max-w-md mx-auto">
               Sorry, the page you are looking for doesn't exist or may have been moved.
            </p>

            <Link href="/">
               <button className="btn btn-primary mt-4">← Back To Home</button>
            </Link>
         </div>
      </section>
   );
}
