
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
    const {email,password}=body;
    // console.log(body);
    let user = await  User.findOne({email:email})
    if(user)
        {

            if(email===user.email &&password===user.password)
                {
                    return NextResponse.json({success:true,email,name:user.name})
                }
                else{
                  
                  return NextResponse.json({success:false,error:'Invalid Credentials'},{status:404})
                }
                
              }
              
              return NextResponse.json({success:false,Error:"No user found"},{status:404})
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json({ error: 'Error saving user' }, { status: 500 });
  }
};
