const crypto = require("crypto");
const fs = require("fs");
const metadata = {"parabellum_customer_id": "UID of Nenad", "email": "nenad@email.com", "country": "rs", "note":"I am testing adding metadata to ID verification."};


//const pkey = crypto.createPrivateKey({format: 'pem', key: pk});
const pkey = crypto.createPrivateKey({format: 'pem', key: fs.readFileSync("./components/passbase-test-private-key.pem")});
const encrypted_metadata = crypto.privateEncrypt(pkey, Buffer.from(JSON.stringify(metadata))).toString('base64');
console.log(encrypted_metadata);