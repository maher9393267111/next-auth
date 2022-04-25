import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

// import connectDB from '../util/connectDb';

// connectDB();

export default function Home() {

	const { data: session } = useSession()
	console.log('home page ------->',session)
	if (session) {
	  return (
		<>
		  <h1>Home signOut</h1>
		  Signed in ass {session.user.email} <br />
		  <button onClick={() => signOut()}>Sign out</button>
		</>
	  )
	}
	return (
	  <>
		<h1>Home signIn</h1>
		Not signed in <br />
		<button onClick={() => signIn("google")}>Sign in</button>
	  </>
	)




}
