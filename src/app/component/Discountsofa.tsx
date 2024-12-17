
import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";

const DiscountSofa = () => {
  return (
    <div className="px-4">
      <h1 className="text-center text-2xl sm:text-4xl font-bold  text-myheading mt-4">Discount Item</h1>
      <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-10 mt-4">
        <li>
          <Link href="/wooden-chair"><a className="hover:text-red-500 text-sm sm:text-base">Wooden Chair</a>
            
          </Link>
        </li>
        <li>
          <Link href="/plastic-chair"><a className="hover:text-red-500 text-sm sm:text-base">Plastic Chair</a>
          
          </Link>
        </li>
        <li>
          <Link href="sofa-collection"><a className="hover:text-red-500 text-sm sm:text-base">Sofa Collection</a>
            
          </Link>
        </li>
      </ul>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:min-h-screen lg:px-6 mt-8 lg:mt-0 space-y-6 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2 px-4 lg:px-8 text-center lg:text-left">
          <h1 className="text-xl sm:text-3xl font-bold text-myheading mb-4">20% Discount Of All Products</h1>
          <h3 className="text-sm sm:text-xs text-red-(rgba(21, 24, 117, 1) font-thin mb-4">Eams Sofa Compact</h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base lg:text-lg text-gray-700">
            <li>Material expose like metals</li>
            <li>Clear lines and geometric figures</li>
            <li>Simple neutral colors</li>
            <li>Material expose like metals</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/emans.png"
            alt="Discount Sofa"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountSofa;
