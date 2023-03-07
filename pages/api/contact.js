export default function (req, res) {
    let nodemailer = require('nodemailer')

    require('dotenv').config();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        }
    });
    const mailOptions = {
        from: 'Abdul Qadeer <aqkalmati0@gmail.com',
        to: 'aqkalmati0@gmail.com',
        subject: req.body.subject,
        html: `<p>From : ${req.body.email}</p><p> Message : ${req.body.body}</p>`,
        name : 'Ali'
    
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.status(500).json({message : 'Something went wrong',errors : error})
        } else {
            res.status(200).json({message : 'Email Sent to'})
        }
    });
}