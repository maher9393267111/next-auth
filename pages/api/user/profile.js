import connectDB from "../../../util/connectDb"
import User from "../../../userModel"
import bcrypt from "bcryptjs"


// current user information

connectDB()

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email } = req.body

      // console.log(email, password, firstName, lastName)

      const user = await User.findOne({ email: email })

      console.log('user information from profile------>',user)

      user.password = undefined

      return res.status(200).send(user)
    }
  } catch (err) {
    console.log(err)
  }
}