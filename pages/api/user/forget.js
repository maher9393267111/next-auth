import connectDB from "../../../util/connectDb"
import User from "../../../userModel"
import jwt from "jsonwebtoken"
import absoluteUrl from "next-absolute-url"
import { sendEmail } from "../../../helpers/sendEmail"
import {userWelcomemail} from "../../../helpers/sendGrid"

connectDB()

export default async (req, res) => {
  console.log(req.body)

  try {
    if (req.method === "POST") {
      const { email } = req.body

      console.log('forget email---->',email)

      const user = await User.findOne({ email })
      console.log('useeeeer from fprget api---->',user)

      if (!user) {
        res.status(404).json({ error: `user not found ${user}` })
      }

      console.log(user)

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      })

      // console.log(token)

//resetoken after user forget password


      user.resetToken = token
      await user.save()

      const { origin } = absoluteUrl(req)
      const link = `${origin}/src/user/reset/${token}`

      const message = `<div>Click on the link below to reset your password, if the link is not working then please paste into the browser.</div></br>
    <div>link:${link}</div>`

      // console.log("message", message)

      // console.log("here")

    await  userWelcomemail(user.email,user.name,message)


      // await sendEmail({
      //   to: user.email,
      //   subject: "Password Reset",
      //   text: message,
      // })

      return res.status(200).json({
        message: `Email sent to ${user.email}, please check your email`,
      })
    }
  } catch (error) {
    console.log(error)
  }
}