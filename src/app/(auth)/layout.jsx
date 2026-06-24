import Navbar from '@/components/Navbar';
import React from 'react';
import { montserrat } from '../layout';
import { Bounce, ToastContainer } from 'react-toastify';
import Header from '@/components/Header';
import dns from 'node:dns';

// Use Google's DNS servers for Node.js DNS lookups
dns.setServers(['8.8.8.8', '8.8.4.4']);

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
