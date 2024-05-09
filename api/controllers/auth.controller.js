import bcrypt, { compareSync, hash } from "bcrypt"
import prisma from "../lib/prisma.js";
export const register= async(req , res)=>{
    // db opeartions
    const{username , email , password} = req.body; 
    // hash the password 

    // it returns a promise that means it is a asynch fn
    const hashedPassword =  await bcrypt.hash(password , 10);

    console.log(hashedPassword);
    const newUser =  await prisma.user.create({
        data : {
            username , 
            email , 
            password: hashedPassword,
        }
    })
    console.log(newUser);
}

export const login=(req , res)=>{
    // db opeartions
}

export const logout=(req , res)=>{
    // db opeartions
}
