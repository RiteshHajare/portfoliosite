import nodemailer from "nodemailer"

const contact = (req,res)=>{
    if(req.method=="POST"){
        const{name,email,subject,message} = req.body;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'testmail19253@gmail.com',
              pass: process.env.MY_PASS
            }
          });
          var mailOptions = {
            from: 'testmail19253@gmail.com',
            to: "riteshhajare97@gmail.com",
            subject: 'REQUEST ON PORTFOLIO SITE',
            html: `<h2>subject - ${subject } </h2><h4>sender - ${name}</h4><p>senderEmail - ${email}</p><p>message - ${message} </p>`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
               console.log(error);
               res.json({success:false,message:error});
            } else {
              // console.log('Email sent: ' + info.response);
              res.json({success:true,message:"User can be verified with email otp."});
            }
          });
    }
}

export default contact;