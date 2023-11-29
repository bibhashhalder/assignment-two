import { Schema, model, } from 'mongoose';
import { Address, FullName, Order, Users } from './users.interface';
const fullNameSchema =new Schema<FullName>({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true}
})
const addressSchema =new Schema<Address>({
    street:{type:String,required:true},
    city:{type:String, required:true},
    country:{type:String,required:true}
})

const ordersSchema = new Schema<Order>({
    productName:{type:String,require:true},
    price:{type:Number, require:true},
    quantity:{type:String,require:true},
})
const usersSchema = new Schema<Users>({
    userId:{type:Number, required:true},
    userName:{type:String, required:true},
    password:{type:String, required:true},
    fullName:fullNameSchema,
    age:{type:Number, required:true},
    email:{type:String, required:true},
    isActive:{type:Boolean,required:true},
    hobbies:{type:[String], required:true},
    address:addressSchema,
    orders:ordersSchema
})

export const UsersModel = model<Users>('Users', usersSchema )