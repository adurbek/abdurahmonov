"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center justify-center px-4">
      <h1 className="text-8xl md:text-9xl font-extrabold text-indigo-600 mb-4 animate-bounce">404</h1>
      <p className="text-2xl md:text-3xl text-gray-800 mb-6">Page Not Found</p>
      <p className="text-gray-600 mb-10 text-center max-w-md">
        It looks like you’ve wandered off the path. Let’s get you back home!
      </p>
      <Link
        href="/"
        className="relative inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <span className="relative z-10">Back to Home</span>
        <span className="absolute inset-0 bg-indigo-800 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 rounded-full"></span>
      </Link>
    </div>
  );
}