"use client"
import React from 'react';

const RayGradients = () => {
  return (
    <div className="min-h-screen p-8 mt-20 mb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-400 mb-8 text-center">
          Subtle Light Ray Effects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Dim White Rays */}
          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-900">
            <div className="absolute inset-0 bg-gradient-radial from-gray-700/30 via-gray-800/20 to-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-gray-500/10 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-gray-300 text-xl font-medium bg-black/40 px-4 py-2 rounded">
                Dim White
              </h3>
            </div>
          </div>

          {/* Faint Blue Glow */}
          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-900">
            <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-gray-800/15 to-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-blue-800/8 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-gray-300 text-xl font-medium bg-black/40 px-4 py-2 rounded">
                Faint Blue
              </h3>
            </div>
          </div>

          {/* Subtle Gray */}
          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-900">
            <div className="absolute inset-0 bg-gradient-radial from-gray-600/25 via-gray-700/15 to-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-gray-400/12 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-gray-300 text-xl font-medium bg-black/40 px-4 py-2 rounded">
                Subtle Gray
              </h3>
            </div>
          </div>

          {/* Muted Amber */}
          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-900">
            <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-gray-800/15 to-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-amber-800/10 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-gray-300 text-xl font-medium bg-black/40 px-4 py-2 rounded">
                Muted Amber
              </h3>
            </div>
          </div>

          {/* Soft Green Hint */}
          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-900">
            <div className="absolute inset-0 bg-gradient-radial from-green-900/18 via-gray-800/12 to-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-green-800/8 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-gray-300 text-xl font-medium bg-black/40 px-4 py-2 rounded">
                Soft Green
              </h3>
            </div>
          </div>

          {/* Barely Visible Purple */}
          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-900">
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/15 via-gray-800/10 to-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-purple-800/6 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-gray-300 text-xl font-medium bg-black/40 px-4 py-2 rounded">
                Barely Purple
              </h3>
            </div>
          </div>

        </div>

        {/* Large Subtle Gradient */}
        <div className="mt-12 relative h-96 rounded-2xl overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-radial from-gray-700/20 via-gray-800/15 to-black"></div>
          <div className="absolute inset-0 bg-gradient-conic from-transparent via-gray-600/8 to-transparent animate-spin" style={{animationDuration: '60s'}}></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-400 mb-4">
                Whisper Light
              </h2>
              <p className="text-xl text-gray-500">
                Ultra-subtle rotating rays
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Interactive Effects */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-900 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-radial from-gray-700/20 via-gray-800/12 to-gray-900 transition-all duration-1000 group-hover:from-gray-600/25"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-gray-500/8 to-transparent transition-opacity duration-500 group-hover:opacity-150"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-gray-300 text-xl font-medium bg-black/40 px-4 py-2 rounded">
                Hover for Glow
              </h3>
            </div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-900 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-radial from-slate-700/18 via-gray-800/10 to-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-slate-600/6 to-transparent transition-transform duration-2000 group-hover:rotate-45"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-gray-300 text-xl font-medium bg-black/40 px-4 py-2 rounded">
                Slow Rotate
              </h3>
            </div>
          </div>
        </div>

        {/* Custom CSS for additional gradients */}
        <style jsx>{`
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
          .bg-gradient-conic {
            background: conic-gradient(var(--tw-gradient-stops));
          }
        `}</style>
      </div>
    </div>
  );
};

export default RayGradients;