import React from 'react';
import Link from 'next/link';
async function fetchData() {
  const res = await fetch('http://localhost:3000/api/getProducts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
const Page = async () => {
  let products = [];
  try {
    const data = await fetchData();
    products = data.products;
  } catch (error) {
    console.error(error);
    return <div>Failed to load data</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Featured Tshirts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
       
          {/* Repeat the above product card markup for each product */}
          {
            products.map((currentvalue)=>(currentvalue.category==='mugs'&&
              <Link href={`/product/${currentvalue.slug}`} key={currentvalue._id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <img
                    alt="ecommerce"
                    className="mx-auto w-full  h-64 object-cover"
                    src={currentvalue.img}
                  />
                  <div className="p-4 text-left"> {/* Changed text alignment to left */}
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{currentvalue.title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{currentvalue.slug}</h2>
                    <p className="mt-1">&#8377;{currentvalue.price}</p>
                    <p className="text-gray-800 text-sm">{currentvalue.size}</p>
                  </div>
                </div>
              </Link>
            ))
          }
        
        </div>
      </div>
    </div>
  );
};
  
export default Page;
