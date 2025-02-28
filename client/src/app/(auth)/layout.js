import Image from "next/image";
import React from "react";

const AuthPagesLayout = ({ children }) => {
  return (
    <div className="min-h-screen text-black">
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4 mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.png"
                alt="Farmer Logo"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <h1 className="text-4xl text-green-400 font-bold tracking-tight">Farmer</h1>
            <p className="text-lg text-gray-400">Smart Farmer Solution</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthPagesLayout;
