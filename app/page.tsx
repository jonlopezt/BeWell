import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="h-full bg-white flex flex-col items-center justify-center p-6">
      {/* Welcome content */}
      <div className="text-center flex-1 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 mb-4">
          Welcome to:
        </p>
        <h1 className="text-6xl font-bold text-black mb-3 tracking-[-1px]">
          BeWell
        </h1>
        <p className="text-lg text-gray-400 mb-2">
          Walk, Breathe, Reflect
        </p>
      </div>

      {/* Enter arrow */}
      <Link href="/login" className="pb-12">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm gradient-wave">Enter prototype</p>
          <svg 
            className="w-8 h-8 text-gray-400" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M5 12h14m-7-7l7 7-7 7"></path>
          </svg>
        </div>
      </Link>
    </div>
  );
}