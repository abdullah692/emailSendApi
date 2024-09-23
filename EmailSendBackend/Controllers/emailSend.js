const express = require('express')
const nodemailer = require("nodemailer")

const emailSend = async (req, res) => {

   res.status(200).json({ message: "Making Api for email send" });
};


const sendEmail = async (recipientEmail, subject, message) => {

   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.EMAIL, // Your email
         pass: process.env.PASSWORD   // Your email password or app-specific password
      }
   })

   const htmlContent = `
   <div style="font-family: Arial, sans-serif; text-align: center;">
       <h1>Welcome to Our Application!</h1>
       <p>Your Appointment booked successfully</p>
   
       <p>If you have any questions, feel free to <a href="mailto:support@yourapp.com">contact us</a>.</p>
   </div>
`;
   const mailOptions = {
      from: process.env.EMAIL,
      to: recipientEmail,
      subject: "Appointment Booked Successfully",
      text: message
   };

   try {
      let info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
      return { success: true, info: info.response };
   } catch (error) {
      console.log('Error occurred while sending email: ', error.message);
      return { success: false, error: error.message };
   }
}

module.exports = {
   emailSend
} 