// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
 import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../util/mongodb";
import clientPromise from "../../../util/mongo2";



import NextAuth from "next-auth"
//import Providers from "next-auth/providers"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
      ,
    }),
   
  
  ],
  pages: {
    signIn: '/login'
  },
  // SQL or MongoDB database (or leave empty)
  database: process.env.MONGO_URL,
})