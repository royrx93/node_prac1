const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user : 'nbdycares.mailservice@gmail.com',
        pass : 'nbdycares123'
    }
});

let mailOptions = {
    from: 'nbdycares.mailservice@gmail.com',
    to: 'royfmttm@gmail.com',
    subject: 'Test',
    text: 'Hello World!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('success');
});