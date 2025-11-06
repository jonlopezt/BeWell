'use client';

import NavigationBar from '../components/NavigationBar';

export default function MindbranchPage() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-100 to-pink-100 p-4 relative pb-24">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4 tracking-[-1px]">Mindbranch</h1>
        <p className="text-gray-600">Node Visualization - Coming Soon</p>
      </div>
      <NavigationBar activeRoute="/mindbranch" />
    </div>
  );
}