const modelDPO = require('../models/dpo');

async function validarLogin(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;

    var func = await modelDPO.login(email, senha);
    
    if (func){
        res.status(200);
        return res.json({
            session: func
        });

        //PREPARANDO PARA ADICIONAR LOG NO LOGIN DO DPO
        /*
        logService.sendLog('info', 'Resposta adicionada ao comunicado!', hash_comunicado, cod_comunicado);
    
        const log = new EventLogger(hash_comunicado);
    
        log.success('Resposta adicionada ao comunicado!');*/
    }
    else {
        res.status(403);
        return res.json();
    }
}

module.exports = { validarLogin };