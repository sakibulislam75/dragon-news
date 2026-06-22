/** @type {import('next').NextConfig} */
const nextConfig = {
   /* config options here */
   reactCompiler: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '/**',
         },
         {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '/**',
         },
         {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '/**',
         },
         {
            protocol: 'https',
            hostname: '**',
         },
      ],
   },
};

export default nextConfig;
