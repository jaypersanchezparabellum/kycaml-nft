const crypto = require("crypto");
const fs = require("fs");

console.log(`Test Script`)
const metadata = {foo: "bar"};
const pkey = crypto.createPrivateKey({format: 'pem', key: fs.readFileSync("./components/passbase-test-private-key.pem")});
const encrypted_metadata = crypto.privateEncrypt(pkey, Buffer.from(JSON.stringify(metadata))).toString('base64');
console.log(`${encrypted_metadata}`)