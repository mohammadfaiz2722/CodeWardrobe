import connectDb from "../../../../middleware/mongoose";
import { NextResponse } from "next/server";
import User from "../../../../models/User";
var jwt = require('jsonwebtoken');


import bcrypt from "bcrypt";
const pepper = process.env.PEPPER; // Use environment variable for pepper;

export const POST = async (req) => {
  try {
    await connectDb();
  } catch (error) {
    console.error("Error connecting to database:", error);
    return NextResponse.json(
      { error: "Error connecting to database" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { email, password } = body;
    // console.log(body);
    let user = await User.findOne({ email: email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(
        pepper + password,
        user.password
      );

      if (isPasswordValid) {
        
const token = jwt.sign({ email, name: user.name}, process.env.JWT_SECRET,{ expiresIn: '1d' });
        return NextResponse.json({token,success:true});
      } else {
        return NextResponse.json(
          { success: false, error: "Invalid Credentials" },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { success: false, Error: "No user found" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Error saving user" }, { status: 500 });
  }
};
