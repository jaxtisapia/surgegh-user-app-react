let low = require('lowdb');
let LocalStorage = require('lowdb/adapters/LocalStorage');

const dbModels = require('./config').dbModels;

const adapter = new LocalStorage('db');
const localDatabase = low(adapter);

// Set some defaults
const defaultValues = {};
defaultValues[`${dbModels.session.id}`] = dbModels.session.default;
defaultValues[`${dbModels.demo.id}`] = dbModels.demo.default;
defaultValues[`${dbModels.user.id}`] = dbModels.user.default;
defaultValues[`${dbModels.pendingDonations.id}`] = dbModels.pendingDonations.default;
defaultValues[`${dbModels.invoices.id}`] = dbModels.invoices.default;
defaultValues[`${dbModels.networks.id}`] = dbModels.networks.default;
defaultValues[`${dbModels.investments.id}`] = dbModels.investments.default;

localDatabase.defaults(defaultValues).write();

/** user functions **/
const logoutUser = () => {
    // remove all instances of 'user', 'session', 'pendingDonations', 'invoices'
    localDatabase.set(dbModels.session.id, dbModels.session.default).write();
    localDatabase.set(dbModels.user.id, dbModels.user.default).write();
    localDatabase.set(dbModels.pendingDonations.id, dbModels.pendingDonations.default).write();
    localDatabase.set(dbModels.invoices.id, dbModels.invoices.default).write();
    localDatabase.set(dbModels.networks.id, dbModels.networks.default).write();
    localDatabase.set(dbModels.investments.id, dbModels.investments.default).write();
};

const getUser = () => {
    return localDatabase.get(dbModels.user.id).value();
};

const updateUser = (user) => {
    localDatabase.set(dbModels.user.id, user).write();
};

const getDemoMode = ()=> {
    return localDatabase.get(dbModels.demo.id).value();
};

const updateDemoMode = (boolean) => {
    localDatabase.set(dbModels.demo.id, boolean ).write();
};

/** session functions **/
const getSession = () => {
    return localDatabase.get(dbModels.session.id).value().id;
};

const updateSession = (id) => {
    localDatabase.set(dbModels.session.id, {id}).write();
};

/** momo networks functions **/
const getNetworks = () => {
    return localDatabase.get(dbModels.networks.id).value();
};

const updateNetworks = (networks) => {
    localDatabase.set(dbModels.networks.id, networks).write();
};

/** investment packages functions **/
const getInvestmentPackages = () => {
    return localDatabase.get(dbModels.investments.id).value();
};
const updateInvestmentPackages = (investments) => {
    localDatabase.set(dbModels.investments.id, investments).write();
};

/** pending investment functions **/
const getPendingDonations = () => {
    return localDatabase.get(dbModels.pendingDonations.id).value();
};

const updatePendingDonations = (donations) => {
    localDatabase.set(dbModels.pendingDonations.id, dbModels.pendingDonations.default).write();
    localDatabase.set(dbModels.pendingDonations.id, donations).write();

};

/** completed invoices functions **/
const getInvoices = () => {
    return localDatabase.get(dbModels.invoices.id).value();
};

const updateInvoices = (invoices) => {
    // localDatabase.set(dbModels.invoices.id, []).write();
    localDatabase.set(dbModels.invoices.id, invoices).write();
};

module.exports =  {
    logoutUser,
    getUser,
    updateUser,
    getDemoMode,
    updateDemoMode,
    getSession,
    updateSession,
    getNetworks,
    updateNetworks,
    getInvestmentPackages,
    updateInvestmentPackages,
    getPendingDonations,
updatePendingDonations,
    getInvoices,
    updateInvoices
};