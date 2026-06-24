import React from 'react';
export const metadata = {
   title: 'Dragon News || Career',
};

const CareerPage = () => {
   return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
         <div className="card bg-base-100 shadow-lg border border-base-300 max-w-lg w-full">
            <div className="card-body text-center">
               <div className="text-5xl mb-2">🚧</div>

               <h1 className="text-3xl font-bold">Careers Page Coming Soon</h1>

               <p className="text-base-content/70 mt-2">
                  We're currently working on this section to bring you exciting career opportunities
                  and updates.
               </p>

               <p className="text-sm text-base-content/60">
                  Please check back later. Thank you for your patience.
               </p>

               <div className="card-actions justify-center mt-4">
                  <a href="/" className="btn btn-primary">
                     Back to Home
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CareerPage;
