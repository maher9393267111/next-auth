import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Home() {

  const {data: session} = useSession();
	 console.log('index page----->',session);
	if(session) {
		const {user} = session;
		 console.log(user.name);
	}



  return (

<div>
  
Main Page here

</div>


  )
}
