* google login


if(  googleEmail && googleEmail.includes('@google.com')){

console.log('heeeeeeeeeeeeeeelo gggolleee')

  const res = await axios.post('/api/auth/google', {
    email:session?.user?.email,
    password:session?.user?.password,
  }, config)
  console.log('res google login login page --------->',res)

//   if(res.data.token){
//     cookie.set('token', res.data.token, { expires: 1 })
//     dispatch(loadUser())
  //  router.push('/')
 // }
}
