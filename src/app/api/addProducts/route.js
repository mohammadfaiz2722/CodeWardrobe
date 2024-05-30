import Product from "../../../../models/Product";
import connectDb from "../../../../middleware/mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDb();
  } catch (error) {
    console.error('Error connecting to database:', error);
    return NextResponse.json({ error: 'Error connecting to database' }, { status: 500 });
  }

  try {
    const body = await req.json(); // Parse the JSON body
let productData={}
    for (let i = 0; i < body.length; i++) {
     productData = {
        title: body[i].title,
        slug: body[i].slug,
        desc: body[i].desc,
        img: body[i].img,
        category: body[i].category,
        size: body[i].size,
        color: body[i].color,
        price: body[i].price,
        availableQty: body[i].availableQty,
      };

      const p = new Product(productData);
      await p.save();
    }

    return NextResponse.json({success:'Success'});
  } catch (error) {
    console.error('Error saving products:', error);
    return NextResponse.json({ error: 'Error saving products' }, { status: 500 });
  }
};
