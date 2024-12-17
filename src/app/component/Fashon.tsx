import React from "react";
import Image from "next/image";

const Fashon = () => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row w-full gap-4 items-center justify-between border p-4">
        <h1 className="text-lg sm:text-2xl font-semibold text-myheading text-left">
          Ecommerce Accessories & Fashion Items
        </h1>
        <div className="flex gap-4 text-sm">
          <p className="flex items-center gap-2">
            Per Page
            <button className="w-6 h-6 sm:w-8 sm:h-8 border border-neutral-400"></button>
          </p>
          <p className="flex items-center gap-2">
            Sort By
            <button className="w-6 h-6 sm:w-8 sm:h-8 border border-neutral-400"></button>
          </p>
          <p className="flex items-center gap-2">
            View
            <button className="w-6 h-6 sm:w-8 sm:h-8 border border-neutral-400"></button>
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {[...Array(12)].map((_, index) => {
          const imagePath = `/images/image${index + 1}.png`;
          return (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Correctly Use the Image Component */}
              <Image
                src={imagePath}
                alt={`Product Image ${index + 1}`}
                width={250}
                height={150}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h4 className="text-sm sm:text-base text-myheading font-sans mb-2 text-center">
                  Product Title {index + 1}
                </h4>
                <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  <p className="text-gray-600">$26.00</p>
                  <p className="text-red-500 line-through">$49.00</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fashon;
