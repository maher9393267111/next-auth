import * as React from "react"
// ⚡⚡⚡
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"

import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useSession, signIn, signOut, getSession } from "next-auth/react"

import { parseCookies } from "nookies"
import { useRouter } from "next/router"

export default function register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const router = useRouter()
  
    const { data: session } = useSession()
    console.log(session, "session")
  
    const cookies = parseCookies

    console.log(cookies, "---->cookies",)
  
    useEffect(() => {
      if (session) {
        toast.success("Login Success")
        router.push("/")
      }
  
      if (cookies?.user) {
        router.push("/")
      }
    }, [router])



  return (
    <div>

<h1>Register page</h1>


    </div>
  )
}


// --------- session console Data -------------
// if user is regisetered and have sesssion session data is like this

// user:
// email: "gomemahero@gmail.com"
// image: "https://lh3.googleusercontent.com/a/AATXAJwwa7i3gMctJh5KEvwa66YPSybfExCWeJIPsPhk=s96-c"
// name: "Mahero Gome"