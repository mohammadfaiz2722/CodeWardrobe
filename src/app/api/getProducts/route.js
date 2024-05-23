import Product from "../../../../models/Product";
import connectDb from "../../../../middleware/mongoose";
import { NextResponse } from "next/server";

// Define the GET method handler
export const GET = async (req) => {
  await connectDb();

  try {
    let products = await Product.find();
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
};
