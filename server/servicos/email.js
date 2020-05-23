const nodemailer = require('nodemailer');

var remetente = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: '',
    port: 465,
    secure: true,
    auth: {
        user: 'fatec1b.adm@gmail.com',
        pass: '1ADMfatec'
    }
});

function enviaEmail(templatePath, dest, subject, body) {
    var teste = 'titulo legal';

    var emailSend = {
        from: 'fatec1b.adm@gmail.com',
        to: dest,
        subject: subject,
        body: body
    }
    
}