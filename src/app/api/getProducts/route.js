import Product from "../../../../models/Product";
import connectDb from "../../../../middleware/mongoose";
import { NextResponse } from "next/server";

// Define the GET method handler
export const GET = async (req) => {
  await connectDb();

  try {
    let products = await Product.find();
    let tShirts={}
    for(let item of products)
      {
        if(item.title in tShirts)
          {
            if(!tShirts[item.title].color.includes(item.color) && item.availableQty>0)
              {
                tShirts[item.title].color.push(item.color)
              }
            if(!tShirts[item.title].size.includes(item.size) && item.availableQty>0)
              {
                tShirts[item.title].size.push(item.size)
              }

          }
          else{
            tShirts[item.title]=JSON.parse(JSON.stringify(item))
            if(item.availableQty>0)
              {
                tShirts[item.title].color=[item.color]
                tShirts[item.title].size=[item.size]
              }
          }
      }
    return NextResponse.json({ tShirts });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
};
