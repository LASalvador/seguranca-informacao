var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

var mail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: '',
    port: 465,
    secure: true,
    auth: {
        user: 'fatec1b.adm@gmail.com',
        pass: '1ADMfatec'
    }
});

mail.use('compile', hbs({
    viewEngine: {
        defaultLayout: undefined,
        partialsDir: ('server/template')
      },
    viewPath:'template',
    extName:'.hbs'
    
}));

function enviarEmail(subject, body, dest){

    var emailSend = {
        from: 'fatec1b.adm@gmail.com',
        to: dest,
        subject: subject,
        template: 'email',
        context: {
            body: body
        }
    }
    mail.sendMail(emailSend, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado!');
        }
    });
};

module.exports =  {
    enviarEmail
};