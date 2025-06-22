import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="bg-black py-20 px-6 border-b-4 border-red-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h1 className="text-8xl lg:text-9xl font-bold mb-4 outline-title">
              BOO
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto lg:mx-0 mb-6"></div>
            <h2 className="text-2xl lg:text-3xl text-red-400 font-bold">
              SPOOKY
            </h2>
          </div>
          
          {/* Center Column - Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1750595354/att.3N3R-4nGLo446KuKdrs6C-UaeJQuaKYUNfB_iufQrnU_cvllpa.jpg"
                alt="Boo Spooky"
                className="w-72 h-72 border-8 border-red-600 bg-gray-900 object-cover"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 border-4 border-black"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-600 border-4 border-black"></div>
            </div>
          </div>
          
          {/* Right Column - Subtitle */}
          <div className="lg:col-span-1 text-center lg:text-right">
            <h3 className="text-3xl lg:text-4xl font-bold text-red-500 mb-4 border-b-2 border-red-700 pb-4 inline-block">
              My Weird Life Stories
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Being dead is weirder than you'd think
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-gray-900 border-4 border-red-800 p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-red-400 mb-6">Here's My Deal</h4>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Hey! I'm Boo, and I've got some pretty wild stories to share. Turns out being a supernatural entity is like being a regular person, except everything goes wrong in spooky ways.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                These are all true stories - the funny, embarrassing, and just plain bizarre stuff that happens 
                when you're technically dead but still need to buy groceries, do laundry, and pretend you have your life together.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="bg-black border-2 border-red-700 p-6 inline-block">
                <p className="text-2xl text-red-300 italic mb-2">
                  "Being dead is a full-time job."
                </p>
                <div className="w-16 h-1 bg-red-600 mx-auto mb-2"></div>
                <p className="text-gray-400">— Boo's Motto</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation Hint */}
        <div className="text-center mt-12">
          <div className="inline-block bg-red-900 border-2 border-red-700 px-8 py-4">
            <p className="text-red-200 text-lg font-bold">
              Scroll down for the good stuff...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;