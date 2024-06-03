import connectDb from "../../../../middleware/mongoose";
import { NextResponse } from "next/server";
import User from "../../../../models/User";
import bcrypt from 'bcrypt';

const pepper = process.env.PEPPER ;// Use environment variable for pepper
console.log(pepper);
const saltRounds = 10;

const hashPassword = async (password) => {
  const pepperedPassword = pepper + password;
  const hashedPassword = await bcrypt.hash(pepperedPassword, saltRounds);
  return hashedPassword;
};

export const POST = async (req) => {
  try {
    await connectDb();
    const body = await req.json();
    const { name, email, password } = body;

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Hash the password with pepper
    const hashedPassword = await hashPassword(password);

    // Create a new user instance with the hashed password
    const user = new User({ name, email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    // Respond with success
    return NextResponse.json({ success: 'User registered successfully', user });
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json({ error: 'Error saving user' }, { status: 500 });
  }
};
