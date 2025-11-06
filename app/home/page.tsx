'use client';

import Link from 'next/link';
import NavigationBar from '../components/NavigationBar';

export default function HomePage() {
  return (
    <div className="h-full bg-white flex flex-col relative">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1581622587486-791760a0d7d4?w=800&q=80')`
        }}
      >
        {/* Profile Picture */}
        <div className="absolute top-4 left-4">
          <div className="w-16 h-16 bg-pink-400 rounded-full border-4 border-white overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              S
            </div>
          </div>
        </div>

        {/* Greeting Text */}
        <div className="absolute bottom-4 left-4">
          <h1 className="text-white text-3xl font-bold mb-1">
            Hi Stacy
          </h1>
          <p className="text-white text-base">
            Welcome to Barnsdall Art Park
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-50 -mt-6 rounded-t-3xl px-4 pt-10 pb-24 overflow-y-auto scrollbar-hide">
        {/* Daily Challenge Card */}
        <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
          <div className="flex items-start gap-4">
            {/* Progress Circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-sm font-semibold">0/1</span>
            </div>
            
            {/* Challenge Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1 text-black">
                Onboarding Challenge
              </h3>
              <p className="text-sm text-gray-500">
                Share your first activity on Mind Branch to earn the Pigeon badge!
              </p>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-4 text-black">Activities</h2>
          
          {/* Mindful Walk */}
          <Link href="/mindful-walk">
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm flex items-center gap-4 active:bg-gray-50">
              {/* Icon */}
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              {/* Text */}
              <div className="flex-1">
                <h3 className="font-semibold text-base text-black">Mindful Walk</h3>
                <p className="text-sm text-gray-500">Walk with purpose and presence</p>
              </div>
              
              {/* Chevron */}
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Breath Work */}
          <Link href="/breathwork">
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm flex items-center gap-4 active:bg-gray-50">
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              {/* Text */}
              <div className="flex-1">
                <h3 className="font-semibold text-base text-black">Breath Work</h3>
                <p className="text-sm text-gray-500">Pause and breathe deeply</p>
              </div>
              
              {/* Chevron */}
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Journal */}
          <Link href="/journal">
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 active:bg-gray-50">
              {/* Icon */}
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              {/* Text */}
              <div className="flex-1">
                <h3 className="font-semibold text-base text-black">Journal</h3>
                <p className="text-sm text-gray-500">Reflect and write your thoughts</p>
              </div>
              
              {/* Chevron */}
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <NavigationBar activeRoute="/home" />
    </div>
  );
}