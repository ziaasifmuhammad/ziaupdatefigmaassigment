import React from "react";
import Link from "next/link";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="px-4">
      {/* About Us Section */}
      <div className="text-center py-10">
        <h1 className="text-3xl text-myheading font-semibold mb-6">About Us</h1>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <li>
            <Link href="/home" className="hover:text-red-500 text-heading2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-red-500 text-heading2">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/aboutUs" className="hover:text-red-500 text-bcolour">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* About Business Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 min-h-screen">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/Fimage.jpg"
            alt="Left Side Image"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
            quis bibendum quam.
          </p>
          <button className="bg-bcolour text-white hover:bg-pink-400 font-bold py-3 px-6 rounded-lg w-full lg:w-auto">
            Contact us
          </button>
        </div>
      </div>

      {/* Our Features Section */}
      <div className="py-16">
        <h1 className="text-3xl text-center font-semibold mb-8 text-myheading">
          Our Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Cards */}
          {[
            { img: "/van.jpg", title: "Free Delivery" },
            { img: "/coin.jpg", title: "100% Cash Back" },
            { img: "/bit.jpg", title: "Quality Product" },
            { img: "/seven.png", title: "24/7 Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={250}
                height={150}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Clients Say Section */}
      <div className="py-16">
        <h1 className="text-3xl text-heading2 text-center font-semibold mb-8">
          Our Clients Say!
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Client Images */}
          {["/Oimage.jpg", "/Oimage1.jpg", "/Oimage2.jpg"].map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Client ${index + 1}`}
              width={150}
              height={150}
              className="rounded-xl object-cover"
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <h3 className="text-xl font-medium">Selina Gomez</h3>
          <h5 className="text-gray-500 text-sm">CEO at Webecy Digital</h5>
          <p className="text-gray-700 text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            debitis ad. Libero aperiam quas rerum asperiores sed hic dolore
            molestias corrupti dolorem, impedit, eligendi provident dolorum in
            deleniti? Distinctio, nisi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
