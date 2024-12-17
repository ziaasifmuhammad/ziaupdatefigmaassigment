

import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
      {/* Left Section */}
      <div className="md:w-1/2 w-full md:pr-8 mb-6 md:mb-0 text-center md:text-left">
        <h3 className="text-xs text-bcolour font-light mb-4">Best Furniture For Your Castle....</h3>
        <h1 className="text-2xl md:text-3xl text-heading2 font-semibold mb-4">
          New Furniture Collection <br />
          Trends in 2020
        </h1>
        <p className="text-xs text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src="/pink chair.png"
          alt="Image"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
