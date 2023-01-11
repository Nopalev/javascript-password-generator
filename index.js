const generator = require("generate-password");

function password_generator(){
    let res = generator.generate({
        length: 16,
        numbers: true,
        uppercase: true,
        lowercase: true,
        symbols: true,
        strict: true
    });
    return res;
}

console.log(password_generator());