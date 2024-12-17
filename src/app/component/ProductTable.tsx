"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ProductTable = () => {
  const [cart, setCart] = useState([
    { id: 1, image: '/product1.jpg', price: 32.0, quantity: 1 },
    { id: 2, image: '/product2.jpg', price: 32.0, quantity: 1 },
    { id: 3, image: '/product3.jpg', price: 32.0, quantity: 1 },
    { id: 4, image: '/product4.jpg', price: 32.0, quantity: 1 },
    { id: 5, image: '/product5.jpg', price: 32.0, quantity: 1 },
  ]);

  const updateCart = (id: number, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const proceedCheckout = () => {
    // Implement checkout logic here, such as navigating to a checkout page
    alert("Proceeding to checkout!");
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row lg:items-start">
      {/* Table Section */}
      <div className="flex-grow overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Product Image</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  <Image
                    src={item.image}
                    alt="Product"
                    width={64}
                    height={64}
                    className="object-cover mx-auto"
                  />
                  <h3 className="text-xs">Ut diam consequat</h3>
                </td>
                <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-16 border border-gray-300 text-center"
                    onChange={(e) => updateCart(item.id, parseInt(e.target.value) || 1)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 text-center">
          <button
            className="bg-bcolour text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
            onClick={() => alert('Cart updated!')}
          >
            Update Cart
          </button>
          <button
            className="bg-bcolour text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>

      {/* Right-hand Side Cards */}
      <div className="lg:ml-8 mt-8 lg:mt-0 flex flex-col space-y-4 w-full lg:w-1/3">
        {/* Total Cost Card */}
        <div className="bg-background shadow-md rounded p-4 border border-gray-300">
          <h2 className="text-xl font-semibold text-heading2 mb-4">Sub Total</h2>
          <h2 className="text-xl font-semibold text-heading2 mb-4">Total Cost</h2>
          <p className="text-lg">Total: ${calculateTotal()}</p>
          <button
            className="bg-bcolour text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={proceedCheckout}
          >
            Proceed To Checkout
          </button>
        </div>

        {/* Calculate Shopping Card */}
        <div className="bg-background shadow-md rounded p-4 border border-gray-300">
          <h2 className="text-xl text-heading2 font-semibold mb-4">Calculate Shopping</h2>
          <p className="text-lg">Use this section to estimate your shopping expenses.</p>
          <p>Mirpur Dhaka - 1200</p>
          <p>Postal Code</p>
          <button
            className="bg-bcolour text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 w-full"
            onClick={() => alert(`Total shopping cost: $${calculateTotal()}`)}
          >
            Calculate Shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
