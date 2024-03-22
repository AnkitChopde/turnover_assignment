

import connectMongoDB from "@/libs/mongoDB";
import UserModel from "@/models/users";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
export async function POST(request){
  const {name,email,password} =await request.json()
  await connectMongoDB();
  let check =await UserModel.findOne({email});
  console.log(check)
  if(check){
    return NextResponse.json({error:"user already exists!",status:400})
  }

  const salt = await bcryptjs.genSalt(5);
  const hashedPassword = await bcryptjs.hash(password,salt)
  const user = new UserModel(
    {name,email,password:hashedPassword}
  )
  const userCreated = await user.save()
  return NextResponse.json({msg:"user created successfully",status:200,userCreated})
}

