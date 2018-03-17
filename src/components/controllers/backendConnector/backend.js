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
    return new Promise((resolve, reject) => axios({
        method: 'post',
        url: `${backendUrl}/v1/user`,
        responseType: 'json',
        data: {id: username, email, phone, name, password}
    }).then((response) => {
        console.log(response.data);
        resolve(response.data)
    })
        .catch((err) => {
            reject(err)
        }))
};

const createDonation = (momoNo, momoChannel, investmentID) => {
    return new Promise((resolve, reject) => axios({
        method: 'post',
        url: `${backendUrl}/v1/investment`,
        responseType: 'json',
        data: {sessionID: dbController.getSession(), momoNo, momoChannel, investmentID}
    }).then((response) => {
        resolve(response.data)
    })
        .catch((err) => {
            reject(err)
        }))
};

const payDonation = (pairingID, investmentID) => {
    return new Promise((resolve, reject) => axios({
        method: 'post',
        url: `${backendUrl}/v1/investment/pay`,
        responseType: 'json',
        data: {sessionID: dbController.getSession(), pairingID, investmentID}
    }).then((response) => {
        resolve(response.data)
    })
        .catch((err) => {
            reject(err)
        }))
};

const contactAdministrator = (subject, email, phone, content) => {
    return new Promise((resolve, reject) => axios({
        method: 'post',
        url: `${backendUrl}/v1/contact`,
        responseType: 'json',
        data: {subject, email, phone, content}
    }).then((response) => {
        resolve(response.data)
    })
        .catch((err) => {
            reject(err)
        }))
};

const refreshPendingDonations = () => {
    return new Promise((resolve, reject) => axios({
        method: 'post',
        url: `${backendUrl}/v1/investments/1`,
        responseType: 'json',
        data: {sessionID: dbController.getSession()}
    }).then((response) => {
        resolve(response.data)
    })
        .catch((err) => {
            reject(err)
        }))
};

const refreshCompletedTransactions = () => {
    return new Promise((resolve, reject) => axios({
        method: 'post',
        url: `${backendUrl}/v1/invoices`,
        responseType: 'json',
        data: {sessionID: dbController.getSession()}
    }).then((response) => {
        resolve(response.data)
    })
        .catch((err) => {
            reject(err)
        }))
};

const updateUserProfile = (name) => {
    return new Promise((resolve, reject) =>{
        resolve("Updating Profile is temporarily disabled. Please use this feature on the mobile app, or contact us for assistance!")
})};
// const updateUserProfile = (name) => {
//     return new Promise((resolve, reject) => axios.put(`${backendUrl}/v1/user`, {
//         // method: 'put',
//         // url: `${backendUrl}/v1/user`,
//         responseType: 'json',
//         data: {sessionID: dbController.getSession(), name}
//     }).then((response) => {
//         resolve(response.data)
//     })
//         .catch((err) => {
//             reject(err)
//         }))
// };

const handleLoginRegisterResponse = (response) => {
    dbController.updateSession(response.sessionID);
    dbController.updateUser(response.user);
    dbController.updateDemoMode(response.demoMode);
    dbController.updateInvestmentPackages(response.investments);
    dbController.updateNetworks(response.networks);
};

module.exports = {
    loginUser,
    signupUser,
    createDonation,
    handleLoginRegisterResponse,
    refreshPendingDonations,
    refreshCompletedTransactions,
    contactAdministrator,
    updateUserProfile,
    payDonation
};


