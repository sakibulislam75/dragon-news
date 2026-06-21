import Navbar from '@/components/Navbar';
import React from 'react';
import { montserrat } from '../layout';
import { Bounce, ToastContainer } from 'react-toastify';

const AuthLayout = ({ children }) => {
   return (
      <div className={`${montserrat.className}`}>
         <Navbar />
         {children}
         <ToastContainer
            position="top-center"
            autoClose={2000}
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

export default AuthLayout;
