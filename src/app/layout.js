import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import dns from 'node:dns';

// Use Google's DNS servers for Node.js DNS lookups
dns.setServers(['8.8.8.8', '8.8.4.4']);

const poppins = Poppins({
   variable: '--font-poppins',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
});
export const montserrat = Montserrat({
   variable: '--font-montserrat',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
});

export const metadata = {
   title: 'Dragon News',
   description: 'Best news in the Bangladesh',
};

export default function RootLayout({ children }) {
   return (
      <html
         lang="en"
         data-theme="light"
         className={`
          
            ${poppins.variable}
            h-full antialiased
         `}
      >
         <body className={`${poppins.className} min-h-full flex flex-col`}>{children}</body>
      </html>
   );
}
