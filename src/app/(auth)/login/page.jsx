'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';

const LogInPage = () => {
   const [isShowPassword, setIsShowPassword] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      try {
         const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: '/',
         });

         console.log('Response:', res);
         console.log('Error:', error);
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <div className="h-[85Vh] flex items-center justify-center bg-base-200 px-4">
         <div className="w-full max-w-md bg-base-100 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-8">Login Your Account</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
               {/* Email */}
               <div>
                  <label className="label">
                     <span className="label-text font-semibold">Email Address</span>
                  </label>

                  <input
                     type="email"
                     placeholder="Enter your email address"
                     className="input input-bordered w-full"
                     {...register('email', {
                        required: 'Email is required',
                     })}
                  />

                  {errors.email && (
                     <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
               </div>

               {/* Password */}
               <div>
                  <label className="label">
                     <span className="label-text font-semibold">Password</span>
                  </label>

                  <div className="relative">
                     <input
                        type={isShowPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="input input-bordered w-full pr-12"
                        {...register('password', {
                           required: 'Password is required',
                        })}
                     />

                     <button
                        type="button"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                     >
                        {isShowPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                     </button>
                  </div>

                  {errors.password && (
                     <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                  )}
               </div>

               {/* Login Button */}
               <button type="submit" className="btn btn-neutral w-full">
                  Login
               </button>

               {/* Register Link */}
               <p className="text-center text-sm">
                  Don't have an account?{' '}
                  <Link href="/register" className="text-red-500 font-semibold">
                     Register
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default LogInPage;
