import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req:Request,res:Response)=>{
    try{
        const user=req.body
        const result = await UserServices.createUserIntoDB(user)
        res.status(200).json({
        success: true,
        massage: 'User is created successfully',
        data: result
    })
    }catch(err){
        console.log(err);
    }
}

export const userControlar ={
    createUser
}