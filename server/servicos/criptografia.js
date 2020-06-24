<<<<<<< HEAD
const crypto = require('crypto');


const algorithm = 'aes-256-ctr';
const secret = 'shezhuansauce';
const ENCRYPTION_KEY = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);

const IV_LENGTH = 16;

/* function encrypt(text) {
    let iv = crypto.randomBytes(16).toString('hex').slice(0, 16);
    let cipher = crypto.createCipheriv(algorithm, ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
}

function decrypt(text) {
    //let textParts = text.split(':');
    let iv = Buffer.from(text., 'hex');
    let encryptedText = Buffer.from(text.encrypted, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
module.exports = {
    encrypt,
    decrypt
} */
=======
var CryptoJS = require("crypto-js");


function criptografar(conteudo, chave){
    return CryptoJS.AES.encrypt(JSON.stringify(conteudo), chave).toString();
}
function descriptografar(conteudo, chave){
    var bytes  = CryptoJS.AES.decrypt(conteudo, chave);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

module.exports = {
    criptografar, 
    descriptografar
};
>>>>>>> 9445c771248acf1045169817c82625b40e74ecaa
