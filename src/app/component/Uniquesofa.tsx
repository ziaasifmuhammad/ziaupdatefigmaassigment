
import React from 'react';
import Image from 'next/image';

const UniqueSofa = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-6">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
          src="/sofa.png"
          alt="Left Side Image"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      {/* Text Content */}
      <div className="w-full lg:w-1/2 lg:pl-8">
        <h1 className="text-2xl text-myheading lg:text-3xl font-bold mb-4">
          Unique Features Of Latest & Trending Products
        </h1>
        <p className="text-base lg:text-lg leading-relaxed mb-2">
          All frames constructed with hardwood solids and laminates
        </p>
        <p className="text-base lg:text-lg leading-relaxed mb-2">
          Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails
        </p>
        <p className="text-base lg:text-lg leading-relaxed mb-4">
          Arms, backs, and seats are structurally reinforced
        </p>
        <button className="bg-bcolour text-white hover:bg-slate-500 font-bold py-3 px-4 w-full lg:w-40">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default UniqueSofa;
