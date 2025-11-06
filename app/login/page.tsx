'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = 
    formData.email.trim() !== '' &&
    formData.password.trim() !== '';

  return (
    <div className="h-full bg-white flex flex-col items-center justify-center p-6 relative">
      {/* Back arrow */}
      <Link href="/" className="absolute top-4 left-4 flex items-center gap-2">
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
        <span className="text-sm text-gray-400 hover:text-gray-600 transition">Exit prototype</span>
      </Link>
      
      {/* Logo and tagline - centered */}
      <div className="text-center mb-auto mt-auto -translate-y-[100px]">
        <h1 className="text-5xl font-bold text-black mb-3 tracking-[-1px]">
          BeWell
        </h1>
        <p className="text-lg text-gray-400">
          Walk, Breathe, Reflect
        </p>
      </div>

      {/* Email and Password Fields */}
      <div className="w-full space-y-4 mb-6 -translate-y-[100px]">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
      </div>

      {/* Buttons section - pushed to bottom */}
      <div className="w-full pb-8">
        {/* Log in button */}
        <Link href="/home" className="block mb-3">
          <button 
            className={`w-full font-bold py-3.5 px-6 rounded-2xl text-base transition cursor-pointer ${
              isFormValid
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500'
            }`}
          >
            Log in
          </button>
        </Link>

        {/* Create an account button */}
        <Link href="/signup" className="block">
          <button className="w-full bg-white border-2 border-gray-200 text-black py-3.5 px-6 rounded-2xl text-base font-medium hover:bg-gray-100 hover:border-gray-400 transition">
            Create an account
          </button>
        </Link>

        {/* Why do I need an account link */}
        <div className="text-center pt-3">
          <a href="#" className="text-blue-500 text-sm hover:text-blue-600">
            Why do I need an account?
          </a>
        </div>
      </div>
    </div>
  );
}