'use client';

import NavigationBar from '../components/NavigationBar';

export default function ProfilePage() {
  return (
    <div className="h-full bg-gradient-to-br from-gray-100 to-blue-100 p-4 relative pb-24">
      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4 tracking-[-1px]">Profile</h1>
        <p className="text-gray-600">Coming Soon</p>
      </div>
      <NavigationBar activeRoute="/profile" />
    </div>
  );
}