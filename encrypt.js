const NodeRSA = require('node-rsa');

// TODO: fill in someone's public key
const publicKey = "publicKey goes here";

const key = new NodeRSA(publicKey, 'pkcs1-public-pem');

// TODO: add a message to encrypt
const message = "";
const encrypted = key.encrypt(message, 'base64');

console.log(encrypted);
