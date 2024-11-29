const nodemailer = require("nodemailer")
const { Mail } = require("../config/config")
const ApiError = require("../utils/apiError")


const transport = nodemailer.createTransport(
    Mail.SMTP
)

const SendEmail = (to, subject, message) => {

    const mailDetails = {
        from: Mail.from,
        to,
        subject,
        html: message
    }

    transport.sendMail(mailDetails)
        .then(() => console.log(`email sended to ${to} for ${subject}`))
        .catch((err) => {
            console.log("Error in sendEmail service , Line no. 22 ,file email.service.js")
            console.log(err)
        })

}


module.exports = { SendEmail }