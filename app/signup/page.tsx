'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    hospital: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = 
    formData.fullName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.hospital.trim() !== '' &&
    formData.password.trim() !== '' &&
    formData.confirmPassword.trim() !== '';

  return (
    <div className="h-full bg-white flex flex-col items-center justify-center p-6 relative">
      {/* Back arrow */}
      <Link href="/login" className="absolute top-4 left-4">
        <svg 
          className="w-6 h-6 text-gray-400 hover:text-gray-600 transition" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
      </Link>

      {/* Content Container */}
      <div className="w-full max-w-md flex flex-col items-center justify-center space-y-6 mt-20">
        {/* Title */}
        <h1 className="text-4xl font-bold text-black mb-8 tracking-[-1px]">Create Account</h1>

        {/* Input Fields */}
        <div className="w-full space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl text-base text-gray-400 focus:outline-none focus:border-gray-300 focus:text-gray-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl text-base text-gray-400 focus:outline-none focus:border-gray-300 focus:text-gray-900"
          />
          <input
            type="text"
            name="hospital"
            placeholder="Hospital/Organization"
            value={formData.hospital}
            onChange={handleChange}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl text-base text-gray-400 focus:outline-none focus:border-gray-300 focus:text-gray-900"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl text-base text-gray-400 focus:outline-none focus:border-gray-300 focus:text-gray-900"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl text-base text-gray-400 focus:outline-none focus:border-gray-300 focus:text-gray-900"
          />
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 pt-2">
          {/* Sign Up Button */}
          <button 
            className={`w-full font-bold py-3.5 px-6 rounded-2xl text-base transition cursor-pointer ${
              isFormValid
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500'
            }`}
          >
            Sign Up
          </button>

          {/* Sign up with Apple */}
          <button className="w-full bg-black text-white py-3.5 px-6 rounded-2xl text-base font-medium hover:bg-gray-900 transition">
            Sign up with Apple
          </button>

          {/* Sign up with Google */}
          <button className="w-full bg-white border-2 border-gray-200 text-black py-3.5 px-6 rounded-2xl text-base font-medium hover:bg-gray-50 transition">
            Sign up with Google
          </button>
        </div>

        {/* Footer Link */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:text-blue-600">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
