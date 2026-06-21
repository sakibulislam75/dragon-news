import BreakingNews from '@/components/BreakingNews';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
   return (
      <div>
         <Header />
         <BreakingNews />
         <Navbar />
         {children}

         <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
         />
      </div>
   );
};

export default MainLayout;
