let axios = require("axios");
let dbController = require("../database/controllers");

let backendUrl = require("../../configuration/configuration").backend.url;

const loginUser = (username, password) => {
    return new Promise((resolve, reject) => axios({
        method: 'post',
        crossDomain: true,
        url: `${backendUrl}/v1/user/login`,
        responseType: 'json',
        data: {id: username, password}
    }).then((response) => {
        resolve(response.data)
    })
        .catch((err) => {
            reject(err)
        }))
};

const signupUser = (username, email, phone, name, password) => {
    axios({
        method: 'post',
        url: `${backendUrl}/v1/user`,
        responseType: 'json',
        data: {id: username, email, phone, name, password}
    }).then((response) => {
        return response
    })
        .catch((err) => {
            return err
        })
};

const handleLoginRegisterResponse = (response) => {
    dbController.updateSession(response.sessionID);
    dbController.updateUser(response.user);
    dbController.updateInvestmentPackages(response.investments);
    dbController.updateNetworks(response.networks);
};

module.exports = {
    loginUser,
    signupUser,
    handleLoginRegisterResponse
};


