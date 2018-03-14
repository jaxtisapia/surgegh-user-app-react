const spamEmails = require("./spamEmails").spamEmails;

const validatorConfig = require("../../configuration/configuration").validator;
const phoneValidatorConfig = validatorConfig.phone;
const usernameValidatorConfig = validatorConfig.username;
const passwordValidatorConfig = validatorConfig.password;

const isNumberOnly = (string) => {
    const regex = /^\d+$/;
    return regex.test(string);
};

const isStringMinLength = (string, minLength) => {
    return (string.length > minLength)
};

const isStringMaxLength = (string, maxLength) => {
    return (string.length < maxLength)
};

const isValidUsername = (username) => {
    return (isStringMinLength(username, usernameValidatorConfig.minLength)
        && isStringMaxLength(username, usernameValidatorConfig.maxLength))
};

const isValidPassword = (password) => {
    return (isStringMinLength(password, passwordValidatorConfig.minLength)
    && isStringMaxLength(password, passwordValidatorConfig.maxLength))
};

const isValidPhone = (phone) => {
    // check if digits only
    if (!isNumberOnly(phone)) return false;

    // check if number starts with a "0"
    if (!phone.startsWith("0")) return false;

    // check if length is equal to phoneLength
    if (phone.length !== phoneValidatorConfig.length) return false;

    return true;
};

const isValidEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

const isEmailSpam = (email) => {
    // trim email and take only domain part
    const domain = email.replace(/.*@/, "");
    return (spamEmails.indexOf(domain) > -1);
};

module.exports ={
    isNumberOnly,
    isStringMinLength,
    isStringMaxLength,
    isValidUsername,
    isValidPassword,
    isValidPhone,
    isValidEmail,
    isEmailSpam

};
