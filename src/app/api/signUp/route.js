
import connectDb from "../../../../middleware/mongoose";
import { NextResponse } from "next/server";
import User from "../../../../models/User"
export const POST = async (req) => {
  try {
    await connectDb();
  } catch (error) {
    console.error('Error connecting to database:', error);
    return NextResponse.json({ error: 'Error connecting to database' }, { status: 500 });
  }

  try {
    const body = await req.json();
    // console.log(body);
    const user = new User(body)
    await user.save();  // Await the save operation
    return NextResponse.json({ success: 'Success' });
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json({ error: 'Error saving user' }, { status: 500 });
  }
};
