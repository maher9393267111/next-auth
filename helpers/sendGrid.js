// use sendGrid to send email
import sgmail from "@sendgrid/mail"

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

 export const userWelcomemail=(email,name,message)=>{

    try{


        sgmail.send({
            to:email,
            from:'gomemahero@gmail.com',  // this is sendgrid account gmail  ---> send t onother email account
            subject:'reset password from here', 
            text:message
        })
        console.log('email sent')

    } catch(error){


        console.log(error)

    }
  
}