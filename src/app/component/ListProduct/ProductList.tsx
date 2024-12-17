import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FacebookIcon,
  Heart,
  Instagram,
  StarIcon,
  Twitch,
} from "lucide-react";

const ProductList = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-myheading font-bold mb-4">Product Details</h1>

      <ul className="flex space-x-4 text-sm sm:text-base mb-6">
    <li>
      <Link href="/home" className="hover:text-red-500">Home</Link>
    </li>
    <li>
      <Link href="/pages" className="hover:text-red-500">Pages</Link>
    </li>
    <li>
      <Link href="/shoplist" className="hover:text-bcolour">Product Details</Link>
    </li>
  </ul>

  <div className="p-4 max-w-screen-lg mx-auto">
  <div className="grid grid-cols-1 gap-2 mb-6">
  <Image
    src="/hand bag.jpg"
    alt="Hand Bag"
    width={150}
    height={100}
    className="object-cover rounded-lg"
  />
  <Image
    src="/lamp.jpg"
    alt="Lamp"
    width={100}
    height={50}
    className="object-cover rounded-lg"
  />
  <Image
    src="/small bag.jpg"
    alt="Small Bag"
    width={100}
    height={50}
    className="object-cover rounded-lg"
  />

    <Image
      src="/Big hand bag.jpg"
      alt="Big Hand Bag"
      width={200}
      height={100}
      className="object-cover rounded-lg col-span-3"
    />
  </div>

  <div className="mb-6">
    <h1 className="text-xl font-semibold mb-2">Playwood Arm Chair</h1>
    <div className="flex space-x-1">
      <StarIcon className="text-yellow-500" />
      <StarIcon className="text-yellow-500" />
      <StarIcon className="text-yellow-500" />
      <StarIcon className="text-yellow-500" />
      <StarIcon />
    </div>
  </div>

  <div className="mb-6">
    <p className="text-purple-950 text-lg font-bold">$32.00</p>
  </div>

  <div className="mb-6">
    <h3 className="font-medium text-lg">Color</h3>
    <p className="text-gray-500 mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
      porttitor purus, et volutpat sit.
    </p>
    <button className="bg-bcolour text-white px-4 py-2 rounded flex items-center space-x-2">
      <span>Add To Cart</span>
      <Heart className="w-5 h-5" />
    </button>
  </div>

  <div className="mb-6">
    <h3 className="text-purple-950 font-medium mb-2">Categories:</h3>
    <h4 className="text-purple-950 font-medium mb-2">Tags:</h4>
    <h4 className="text-purple-950 font-medium mb-2">Share:</h4>
    <div className="flex space-x-2">
      <FacebookIcon className="w-5 h-5 text-heading2" />
      <Instagram className="w-5 h-5 text-pink-500" />
      <Twitch className="w-5 h-5 text-purple-600" />
    </div>
  </div>
</div>


      <section className="mb-6">
        <ul className="flex space-x-4 border-b mb-4 pb-2">
          <li>Description</li>
          <li>Additional Info</li>
          <li>Reviews</li>
          <li>Video</li>
        </ul>
        <h3 className="font-medium text-heading2 text-lg mb-2">Varius tempor</h3>
        <p className="text-gray-700 mb-4">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
          faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
          est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque,
          elit, aliquet. Non varius proin sed urna, egestas consequat laoreet
          diam tincidunt. Magna eget faucibus cras justo, tortor sed donec
          tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus
          dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.
        </p>

        <h3 className="font-medium text-heading2 text-lg mb-2">More details</h3>
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mb-2">
            <ArrowRight className="w-5 h-5 mr-2" />
            <p className="text-gray-700">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverra.
            </p>
          </div>
        ))}
      </section>

      <section>
        <h1 className="text-2xl text-myheading font-bold mb-6">Related Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <Image
                src={`/R image${item}.jpg`}
                alt={`Product ${item}`}
                width={300}
                height={300}
                className="mx-auto rounded-lg"
              />
              <h1 className="text-myheading font-medium mt-4 mb-2">
                {item === 1
                  ? "Men's Fashion Wear"
                  : item === 2
                  ? "Women's Fashion"
                  : "Wolx Dummy Fashion"}
              </h1>
              <div className="flex justify-center space-x-1 mb-2">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
              </div>
              <p className="text-center text-lg font-semibold">$43.00</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
