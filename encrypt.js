const NodeRSA = require('node-rsa');

// TODO: fill in someone's public key
const publicKey = "MEgCQQDmAE8A41d2QjigQjrEaMo0URPnspMHPedYhf2mvINYSFA76sffs2wAX+NR8qC2EI4CXaaCiw5fpEYSFPfUem1vAgMBAAE=";

const key = new NodeRSA(publicKey, 'pkcs1-public-pem');

// TODO: add a message to encrypt
const message = "hi Jason";
const encrypted = key.encrypt(message, 'base64');

console.log(encrypted);
