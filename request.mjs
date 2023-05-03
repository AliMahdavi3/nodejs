function encrypt (data){
    return "Encrypted Data";
}

function send(data, text){
    const encryptedData = encrypt(data);
    console.log(`Writing ${data} Is ${text}`);
}

export {send, encrypt}