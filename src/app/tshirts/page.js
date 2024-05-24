import React from 'react';
import Link from 'next/link';
import Product from '../../../models/Product';
import mongoose from 'mongoose';

// mongoose
async function fetchData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Error connecting to MongoDB");
  }

  let products = await Product.find();
  let tShirts = {};
  for (let item of products) {
    if (item.title in tShirts) {
      if (!tShirts[item.title].color.includes(item.color) && item.availableQty > 0) {
        tShirts[item.title].color.push(item.color);
      }
      if (!tShirts[item.title].size.includes(item.size) && item.availableQty > 0) {
        tShirts[item.title].size.push(item.size);
      }
    } else {
      tShirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tShirts[item.title].color = [item.color];
        tShirts[item.title].size = [item.size];
      }
    }
  }
  return tShirts;
}

const Page = async () => {
  let products = [];
  try {
    const data = await fetchData();
    products = data;
  } catch (error) {
    console.error(error);
  }

  return (
    <div
      className="bg-gray-100 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://example.com/cool-background.jpg')" }}
    >
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Featured Tshirts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
          {Object.keys(products).map((item) => (
            <Link href={`/product/${products[item].slug}`} key={products[item]._id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="mx-auto w-full h-64 object-cover transition-transform hover:scale-110"
                    src={products[item].img}
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].title}</h3>
                  <h2 className=" title-font text-lg font-medium">
                    {products[item].slug}
                  </h2>
                  <p className="mt-1 animate-pulse">&#8377;{products[item].price}</p>

                  <div className="text-gray-800 text-sm mt-2">
                    <div>
                      {products[item].size.includes('S') && (
                        <span className="border px-1 mx-1 border-gray-300 bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-800">
                          S
                        </span>
                      )}
                      {products[item].size.includes('M') && (
                        <span className="border px-1 mx-1 border-gray-300 bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-800">
                          M
                        </span>
                      )}
                      {products[item].size.includes('L') && (
                        <span className="border px-1 mx-1 border-gray-300 bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-800">
                          L
                        </span>
                      )}
                      {products[item].size.includes('XL') && (
                        <span className="border px-1 mx-1 border-gray-300 bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-800">
                          XL
                        </span>
                      )}
                      {products[item].size.includes('XLL') && (
                        <span className="border px-1 mx-1 border-gray-300 bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-800">
                          XXL
                        </span>
                      )}
                    </div>
                    <div className="flex justify-center mt-2">
                      {products[item].color.map((color, index) => (
                        <button
                          key={index}
                          className={`border-2 border-gray-300 mx-1 bg-${color}-500 rounded-full w-6 h-6 focus:outline-none transition-colors hover:bg-${color}-600`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;