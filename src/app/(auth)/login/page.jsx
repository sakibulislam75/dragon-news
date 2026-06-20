'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

const LogInPage = () => {
   /*
   const onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      console.log(userData);
   };
*/
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className="h-[85vh] flex items-center justify-center bg-base-200">
         <div className="w-full max-w-md bg-base-100 shadow-lg rounded-lg p-8">
            {/* Title */}
            <h2 className="text-xl font-semibold text-center mb-8">Login your account</h2>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
               {/* Email */}
               <div>
                  <label className="label">
                     <span className="label-text font-semibold">Email address</span>
                  </label>
                  <input
                     type="email"
                     placeholder="Enter your email address"
                     className="input input-bordered w-full"
                     {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
               </div>

               {/* Password */}
               <div>
                  <label className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input
                     type="password"
                     placeholder="Enter your password"
                     className="input input-bordered w-full"
                     {...register('password', { required: 'Password is required' })}
                  />
                  {errors.password && (
                     <span className="text-red-500">{errors.password.message}</span>
                  )}
               </div>

               {/* Button */}
               <button className="btn btn-neutral w-full mt-2">Login</button>

               {/* Footer */}
               <p className="text-center text-sm mt-4">
                  Don't Have An Account ?{' '}
                  <a href="/register" className="text-red-500 font-medium">
                     register
                  </a>
               </p>
            </form>
         </div>
      </div>
   );
};

export default LogInPage;
