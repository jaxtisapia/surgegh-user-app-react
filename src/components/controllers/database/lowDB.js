import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const dbModels = require('./config').dbModels;

const adapter = new LocalStorage('db');
const localDatabase = low(adapter);

// Set some defaults
const defaultValues = {};
defaultValues[`${dbModels.session.id}`] = dbModels.session.default;
defaultValues[`${dbModels.user.id}`] = dbModels.session.default;
defaultValues[`${dbModels.pendingDonations.id}`] = dbModels.pendingDonations.default;
defaultValues[`${dbModels.invoices.id}`] = dbModels.invoices.default;
defaultValues[`${dbModels.networks.id}`] = dbModels.networks.default;
defaultValues[`${dbModels.investments.id}`] = dbModels.investments.default;

localDatabase.defaults(defaultValues).write();

module.exports = localDatabase;
