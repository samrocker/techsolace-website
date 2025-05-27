import React from 'react';

const FramerShowcase = () => {
  return (
    <div className="text-white min-h-screen overflow-x-hidden mt-32">
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="text-5xl font-semibold leading-tight mb-2">
            Websites that stand
          </div>
          <div className="text-5xl font-semibold leading-tight">
            out start in Framer
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-5 h-[800px]">
          {/* Family Style Card */}
          <div className="col-span-2 row-span-1 bg-indigo-600 rounded-2xl p-10 flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] group">
            {/* Decorative Elements */}
            <div className="absolute top-8 left-10 text-4xl">🏭</div>
            <div className="absolute bottom-10 left-16 text-4xl">🌱</div>
            <div className="absolute bottom-8 right-10 flex gap-2">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
            </div>
            <div className="absolute top-10 right-16 text-3xl">🦋</div>
            
            {/* Main Content */}
            <div className="text-center relative z-10">
              <div className="text-sm font-medium text-indigo-600 mb-3 drop-shadow-[1px_1px_0px_white]">
                INTRODUCING
              </div>
              <div className="text-6xl font-bold text-indigo-600 mb-2 drop-shadow-[2px_2px_0px_white]">
                FAMILY
              </div>
              <div className="text-3xl font-semibold italic text-indigo-600 drop-shadow-[1px_1px_0px_white]">
                Style
              </div>
              <div className="text-sm font-medium text-indigo-600 mt-3 drop-shadow-[1px_1px_0px_white]">
                A NEW BRAND STUDIO
              </div>
            </div>
            
            {/* Info Icon */}
            <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              i
            </div>
          </div>

          {/* Red Perfume Section */}
          <div className="row-span-2 bg-red-600 rounded-2xl p-5 flex flex-col gap-5 transition-transform duration-300 hover:scale-[1.02]">
            {/* Perfume Bottles Grid */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="bg-white bg-opacity-10 rounded-xl p-5 flex items-center justify-center">
                <div className="w-10 h-20 bg-red-600 rounded-t-3xl rounded-b-lg relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-sm"></div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 flex items-center justify-center">
                <div className="w-10 h-20 bg-purple-700 rounded-t-3xl rounded-b-lg relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-sm"></div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 flex items-center justify-center">
                <div className="w-10 h-20 bg-yellow-400 rounded-t-3xl rounded-b-lg relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-sm"></div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 flex items-center justify-center">
                <div className="w-10 h-20 bg-orange-500 rounded-t-3xl rounded-b-lg relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Color Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="h-15 bg-purple-500 rounded-lg flex items-center justify-center text-white font-medium">W</div>
              <div className="h-15 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-medium">M</div>
              <div className="h-15 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-medium">W</div>
              <div className="h-15 bg-orange-500 rounded-lg flex items-center justify-center text-white font-medium">L</div>
            </div>
            
            {/* Curved Design */}
            <div className="bg-white bg-opacity-10 rounded-xl p-5 flex items-center justify-center">
              <div className="w-30 h-15 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-full relative">
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Number 92 Card */}
          <div className="col-span-1 row-span-1 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-30 h-20 bg-orange-500 rounded-xl mb-5 flex items-center justify-center text-4xl relative overflow-hidden">
              🤝
            </div>
            <div className="text-7xl font-extrabold text-black leading-none">92</div>
          </div>

          {/* Gallery Card */}
          <div className="col-span-1 row-span-1 bg-cyan-600 rounded-2xl p-5 transition-transform duration-300 hover:scale-[1.02]">
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Green Terminal Card */}
          <div className="col-span-1 row-span-1 bg-lime-500 rounded-2xl flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
            <div className=" text-lime-500 p-5 flex-1 font-mono text-sm">
              <div className="mb-5">mkdir business<br />profit blocks</div>
              <div className="mb-5">combining three of our most popular profit blocks...</div>
              <div className="w-5 h-5 border-2 border-lime-500 rounded-full"></div>
            </div>
            <div className="bg-lime-500 text-black p-5 text-center">
              <div className="mb-4 font-semibold">
                Try free for 2 weeks<br />Cancel any time
              </div>
              <button className="bg-black text-lime-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Get started
              </button>
            </div>
          </div>

          {/* Triangle Card */}
          <div className="col-span-2 row-span-1 bg-stone-100 rounded-2xl flex items-center justify-center relative transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-black"></div>
            <div className="absolute top-5 right-5 bg-black bg-opacity-80 text-white p-5 rounded-lg text-xs leading-relaxed max-w-[200px]">
              <div className="mb-4 font-semibold">Plausible</div>
              <div>Simple and privacy-focused web analytics alternative to Google Analytics.</div>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-10">
          <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
            View hundreds of sites →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FramerShowcase;