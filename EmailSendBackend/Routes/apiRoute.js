const express=require('express')
const router=express.Router();
const {
    emailSend
}=require('../Controllers/emailSend')


router.route('/').get(emailSend)

module.exports=router