'use client';

import NavigationBar from '../components/NavigationBar';

export default function BadgePage() {
  return (
    <div className="h-full bg-gradient-to-br from-yellow-100 to-amber-100 p-4 relative pb-24">
      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4 tracking-[-1px]">Badge</h1>
        <p className="text-gray-600">Coming Soon</p>
      </div>
      <NavigationBar activeRoute="/badge" />
    </div>
  );
}

