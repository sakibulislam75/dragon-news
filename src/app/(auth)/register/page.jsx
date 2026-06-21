'use client';

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegisterPage = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      const { name, photoURL, email, password } = data;
      console.log(data);
      const { data: res, error } = await authClient.signUp.email({
         name: name, // required
         email: email, // required
         password: password, // required
         image: photoURL,
         callbackURL: '/login',
      });
      if (error) {
         toast.error(error.message);
      } else {
         toast.success('Successfully registered');
      }
   };

   return (
      <div className="h-[85vh] flex items-center justify-center bg-base-200">
         <div className="w-full max-w-md bg-base-100 shadow-lg rounded-lg p-8">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center mb-8">Register your account</h2>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
               {/* Name */}
               <div>
                  <label className="label">
                     <span className="label-text font-semibold">Your Name</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Enter your name"
                     className="input input-bordered w-full"
                     {...register('name', {
                        required: 'Name is required',
                     })}
                  />
                  {errors.name && (
                     <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
               </div>

               {/* Photo URL */}
               <div>
                  <label className="label">
                     <span className="label-text font-semibold">Photo URL</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Enter your photo URL"
                     className="input input-bordered w-full"
                     {...register('photoURL', {
                        required: 'Photo URL is required',
                     })}
                  />
                  {errors.photoURL && (
                     <span className="text-red-500 text-sm">{errors.photoURL.message}</span>
                  )}
               </div>

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
                     <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
               </div>

               {/* Password */}
               <div>
                  <label className="label">
                     <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                     type="password"
                     placeholder="Enter your password"
                     className="input input-bordered w-full"
                     {...register('password', {
                        required: 'Password is required',
                     })}
                  />
                  {errors.password && (
                     <span className="text-red-500 text-sm">{errors.password.message}</span>
                  )}
               </div>

               {/* Register Button */}
               <button type="submit" className="btn btn-neutral w-full">
                  Register
               </button>

               {/* Footer */}
               <p className="text-center text-sm">
                  Already have an account?{' '}
                  <a href="/login" className="text-red-500 font-medium hover:underline">
                     Login
                  </a>
               </p>
            </form>
         </div>
      </div>
   );
};

export default RegisterPage;
