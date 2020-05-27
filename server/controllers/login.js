const modelDPO = require('../models/dpo');

async function validarLogin(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;

    var func = await modelDPO.login(email, senha);
    
    if (func){
        res.status(200);
        return res.json({
            token: func
        });
    }
    else {
        res.status(403);
        return res.json();
    }
}

module.exports = { validarLogin };