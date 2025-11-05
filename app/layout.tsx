import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeWell - Mental Wellness for Healthcare Workers",
  description: "Transform your wellness journey at Barnsdall Art Park",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        {/* iPhone Frame Container */}
        <div className="min-h-screen flex items-center justify-center p-4">
          {/* iPhone 16 Pro Frame */}
          <div 
            className="relative bg-white rounded-[60px] shadow-2xl overflow-hidden"
            style={{ 
              width: '402px', 
              height: '874px',
              border: '12px solid #1f1f1f'
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-50"></div>
            
            {/* Content Area */}
            <div className="h-full overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}