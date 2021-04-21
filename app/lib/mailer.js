const nodemailer = require('nodemailer');
const config = require('../../config');

export default function Mailer(email, subject, message) {
    const mailTransport = nodemailer.createTransport({
        service: 'stxp.ru',
        secure: true,
        port: 465,
        auth: { user: config.email.user, pass: config.email.pass },
        tls: { rejectUnauthorized: false }
    });
    mailTransport.sendMail({
        from: 'Your company',
        to: email,
        subject: subject,
        text: message
    }, function(err, info) {});
};