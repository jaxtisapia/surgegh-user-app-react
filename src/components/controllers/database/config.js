const dbModels = {
    session: {
        id: "session",
        default:{}
    },
    user: {
        id: "user",
        default:{}
    },
    pendingDonations: {
        id: "pendingDonations",
        default:[]
    },
    invoices: {
        id: "invoices",
        default:[]
    },
    networks: {
        id: "networks",
        default:[]
    },
    investments: {
        id: "investments",
        default:[]
    }
};

module.exports = {
    dbModels
};