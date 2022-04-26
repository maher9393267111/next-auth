import nodemailer from "nodemailer"

export const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: '	smtp.sendgrid.net',
    
  //  host: 'mail.mywebsite.com',
    //process.env.EMAIL_SERVICE,
   
 //   port: 465,

 port: 587,

 
   

   tls: {
   // ciphers: "SSLv3",
    rejectUnauthorized: false,
},
   
    auth: {
      user: 'apikey',
      //process.env.EMAIL_USERNAME,
      pass: '	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      '
      // process.env.EMAIL_PASSWORD,
    },
    debug:true
  })
  const mailOptions = {
    from:  'maher9911133@gmail.com',
    //process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  }

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log('offffffffffff')
      console.log(err)
    } else {
      console.log(info)
    }
  })
}