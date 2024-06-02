import Pincode from "./Pincode";
import mongoose from "mongoose";
import Product from "../../../../models/Product";

const PostPage = async({ params }) => {
  async function fetchData() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw new Error("Error connecting to MongoDB");
    }
    
    let products = await Product.findOne({ slug: params.slug });
    let variants = await Product.find({ title: products.title ,category:products.category});
    let colorSizeSlug = {}; // { red: { XL: { slug: 'wear-the-code-xl' } } }
  
    for (let item of variants) {
      if (Object.keys(colorSizeSlug).includes(item.color)) {
        colorSizeSlug[item.color][item.size] = { slug: item.slug };
      } else {
        colorSizeSlug[item.color] = {};
        colorSizeSlug[item.color][item.size] = { slug: item.slug };
      }
    }
    return { colorSizeSlug, products,variants };
  }
 
  const { colorSizeSlug, products,variants } = await fetchData(params);
// console.log(colorSizeSlug);
  return (
  <Pincode slug={params.slug} product={JSON.stringify(products)} colorSizeSlug={JSON.stringify(colorSizeSlug)} variants={JSON.stringify(variants)}/>
  );
};

export default PostPage;
