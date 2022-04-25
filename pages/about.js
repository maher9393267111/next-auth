import React from 'react'
import { signOut } from 'next-auth/react'

const AboutPage = () => {
  return (
    <div>
      Home
      <button onClick={() => signOut()}>signOut</button>
    </div>
  )
}

export default AboutPage