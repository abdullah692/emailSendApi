const express=require('express')

const emailSend = async (req, res) => {

    res.status(200).json({ message: "Making Api for email send" });
  };



 module.exports={
    emailSend
 } 