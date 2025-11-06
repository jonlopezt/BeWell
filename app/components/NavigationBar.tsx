'use client';

import Link from 'next/link';

interface NavigationBarProps {
  activeRoute?: string;
}

export default function NavigationBar({ activeRoute = '/home' }: NavigationBarProps) {
  const navItems = [
    { href: '/home', label: 'Home', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { href: '/mindbranch', label: 'Mindbranch', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' },
    { href: '/badge', label: 'Badge', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    { href: '/profile', label: 'Profile', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  ];

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-full shadow-lg px-6 py-3 flex justify-around items-center">
      {navItems.map((item) => {
        const isActive = activeRoute === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 ${isActive ? '' : 'text-gray-400'}`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d={item.icon} />
            </svg>
            <span className={`text-xs ${isActive ? 'font-medium' : ''}`}>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

