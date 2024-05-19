import React from 'react';

const OrderPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-3xl font-semibold mb-4">Order Confirmation</h1>
              <p className="text-lg mb-8">Your order has been successfully placed!</p>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Order Details</h2>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-600">Where tech meets fashion</p>
                  <p className="text-gray-800">Qty: 1</p>
                  <p className="text-gray-800">₹499</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-600">Where tech meets fashion</p>
                  <p className="text-gray-800">Qty: 1</p>
                  <p className="text-gray-800">₹499</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-600">Where tech meets fashion</p>
                  <p className="text-gray-800">Qty: 1</p>
                  <p className="text-gray-800">₹499</p>
                </div>
              </div>
              <div className="border-t border-b py-2 mb-4">
                <p className="text-lg font-semibold">Subtotal: ₹1497.00</p>
              </div>
              <button className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition duration-300">Track Order</button>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10">
              <img alt="Order confirmation" className="w-full h-auto rounded-lg shadow-md" src="https://dummyimage.com/600x400"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
