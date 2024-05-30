import mongoose from 'mongoose';

// Define the product schema
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Product title, required
    slug: { type: String, required: true, unique: true }, // Unique slug for the product, required
    desc: { type: String, required: true }, // Product description, required
    img: { type: String, required: true }, // Image URL for the product, required
    category: { type: String, required: true }, // Product category, required
    size: { type: String }, // Size of the product, optional
    color: { type: String }, // Color of the product, optional
    price: { type: Number, required: true }, // Price of the product, required
    availableQty: { type: Number, required: true }, // Available quantity, required
  },
  { timestamps: true } // Automatically manage `createdAt` and `updatedAt` fields
);

// Check if the Product model already exists to avoid overwriting the model in the case of hot-reloading in development
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
