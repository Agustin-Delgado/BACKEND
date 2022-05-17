import CryptoJS from 'crypto-js';

const getDecrypt = (text) => {
    const decData = CryptoJS.enc.Base64.parse(text).toString(CryptoJS.enc.Utf8)
    const bytes = CryptoJS.AES.decrypt(decData, 'secret key 123').toString(CryptoJS.enc.Utf8);
    return JSON.parse(bytes);
}

export default getDecrypt;