import connectMongoDB from "@/libs/mongoDB";
import UserModel from "@/models/users";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request){
   try{
    const {email,password} = await request.json();

    await connectMongoDB();

    const user = await UserModel.findOne({email});

    if(!user){
        return NextResponse.json({msg:"User does not exists!",status:400})
    }

    const checkPass = await bcryptjs.compare(password,user.password) 
    if(!checkPass){
        return NextResponse.json({error:"Invalid password",status:400})
    }

    return NextResponse.json({msg:"Login Successful!",success:true,status:200})
   }
   catch(error){
    NextResponse.json({error: error.message}, {status: 500})
   }
}