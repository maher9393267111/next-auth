
import connectDB from "../../../util/connectDb"


import User from "../../../userModel"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

connectDB()

// sign in with google and save user data to 

// send session info that come after login with google to server

export default async (req, res) => {


    


   console.log('google login------------->',req.body)
   
   
   try {
    if (req.method === "POST") {
 
console.log('google login------------->',req.body)

      }

  } catch (err) {
    console.log(err)
  }
   

    

 
}




     


 
