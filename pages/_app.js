import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Head } from 'next/document';
import { Provider } from 'next-auth/react'
import Layout from "../components/Layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import theme from "../theme"
import { wrapper } from "../redux/store"
import { ThemeProvider, createTheme } from "@mui/material/styles"

function App({ Component, pageProps: { session, ...pageProps }  }) {
	return (

	
		<ThemeProvider theme={theme}>
		<SessionProvider session={session}>

<Layout>
            <ToastContainer />
		
				
		
		  <Component {...pageProps} />

		 
		
          
			</Layout>
		</SessionProvider>
		</ThemeProvider>
	
	)
  }



  export default wrapper.withRedux(App)

