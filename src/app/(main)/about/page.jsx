import React from 'react';
export const metadata = {
   title: 'Dragon News || About ',
};

const AboutPage = () => {
   return (
      <div className="max-w-5xl mx-auto px-4 py-12">
         <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">About Dragon News</h1>
            <p className="mt-3 text-base-content/70">
               Stay informed with the latest news from around the world.
            </p>
         </div>

         <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body">
               <h2 className="card-title text-2xl">Modern News Platform</h2>

               <p className="text-base-content/80 leading-relaxed">
                  Dragon News is a responsive news application built with React and modern web
                  technologies. The platform delivers real-time news articles across multiple
                  categories while providing a smooth and user-friendly experience on all devices.
               </p>

               <p className="text-base-content/80 leading-relaxed">
                  The application integrates secure user authentication, allowing users to access
                  personalized features and enjoy a seamless browsing experience.
               </p>
            </div>
         </div>

         <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="card bg-base-100 shadow border border-base-300">
               <div className="card-body text-center">
                  <h3 className="font-bold text-lg">News Categories</h3>
                  <p className="text-sm text-base-content/70">
                     Browse news from multiple categories through a simple and organized interface.
                  </p>
               </div>
            </div>

            <div className="card bg-base-100 shadow border border-base-300">
               <div className="card-body text-center">
                  <h3 className="font-bold text-lg">Secure Authentication</h3>
                  <p className="text-sm text-base-content/70">
                     User login and account management powered by modern authentication systems.
                  </p>
               </div>
            </div>

            <div className="card bg-base-100 shadow border border-base-300">
               <div className="card-body text-center">
                  <h3 className="font-bold text-lg">Real-Time Updates</h3>
                  <p className="text-sm text-base-content/70">
                     Access the latest news articles and stay informed with current events.
                  </p>
               </div>
            </div>
         </div>

         <div className="card bg-primary text-primary-content mt-8">
            <div className="card-body text-center">
               <h2 className="text-2xl font-bold">Let's Build Together 🚀</h2>
               <p>
                  Dragon News is designed as a modern news platform project for learning,
                  development, and exploring real-world React application architecture.
               </p>
            </div>
         </div>
      </div>
   );
};

export default AboutPage;
