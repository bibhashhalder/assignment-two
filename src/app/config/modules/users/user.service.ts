import { Users } from "./users.interface";
import { UsersModel } from "./users.schema";

const createUserIntoDB = async (users:Users)=>{
   const result =  await UsersModel.create(users);
   return result;
}
export const UserServices ={
   createUserIntoDB
}