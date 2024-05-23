import Product from "../../../../models/Product";
import connectDb from "../../../../middleware/mongoose";
import { NextResponse } from "next/server";

// Define the POST method handler
export const PUT = async (req) => {
  await connectDb();

  try {
    const body = await req.json(); // Parse the JSON body
    for (let i = 0; i < body.length; i++) {
      let p = await Product.findByIdAndUpdate(body[i]._id,body[i],{ new: true })
    }
    return NextResponse.json({ success: 'Success' },{status:200});
  } catch (error) {
    console.error('Error saving products:', error);
    return NextResponse.json({ error: 'Error saving products' }, { status: 500 });
  }
};
