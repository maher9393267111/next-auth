import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Head } from 'next/document';
import { Provider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps }  }) {
	return (

	
		
		<SessionProvider session={session}>
			<div>
				
		
		  <Component {...pageProps} />

		  </div>
		</SessionProvider>
	
	)
  }


