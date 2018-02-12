let routes = {
    login:{
        link:'/login'
    },
    register:{
        link:'/register'
    },
    forgotPassword:{
        link:'/forgot-password'
    },
    main:{
        link:'/home',
        settings:{
            pathname:'settings'
        },
        withdraw:{
            pathname:'withdraw'
        },
        transfers:{
            pathname:'transfers'
        },
        invest:{
            pathname:'invest'
        },
        issue:{
            pathname:'issue'
        },
        home:{
            pathname:'index'
        }
    }
};

module.exports = routes;