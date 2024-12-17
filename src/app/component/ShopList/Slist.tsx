import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart, SearchX } from 'lucide-react';

const UniqueSofa = () => {
  const products = [
    { src: '/list1.jpg', title: 'Accumsan tincidunt', price: '$26.00', oldPrice: '$52.00' },
    { src: '/list3.jpg', title: 'Vel sem', price: '$26.00', oldPrice: '$52.00' },
    { src: '/list4.jpg', title: 'Porttitor cum', price: '$26.00', oldPrice: '$52.00' },
    { src: '/list5.jpg', title: 'Nunc in', price: '$26.00', oldPrice: '$52.00' },
    { src: '/list6.jpg', title: 'Vitae facilisis', price: '$26.00', oldPrice: '$52.00' },
    { src: '/list7.jpg', title: 'Curabitur lectus', price: '$26.00', oldPrice: '$52.00' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8 lg:px-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full max-w-sm lg:flex-row lg:max-w-2xl bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={product.src}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 p-4 lg:pl-6">
            <h1 className="text-xl font-bold mb-2 text-gray-800">{product.title}</h1>
            <div className="flex items-center text-lg mb-2">
              <span className="font-semibold text-gray-900">{product.price}</span>
              <span className="ml-2 line-through text-bcolour">{product.oldPrice}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
            </p>
            <div className="flex justify-center items-center gap-4">
              <button
                aria-label="Add to cart"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <ShoppingCart className="text-gray-600" />
              </button>
              <button
                aria-label="Add to wishlist"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <Heart className="text-gray-600" />
              </button>
              <button
                aria-label="More options"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <SearchX className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniqueSofa;
