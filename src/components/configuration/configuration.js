const configuration = {

    backend:{
        url:"http://p2p-nhyira.herokuapp.com",
    },

    validator: {
        username:{
            minLength: 4,
            maxLength: 20
        },
        password:{
            minLength: 4,
            maxLength: 20
        },
        fullName:{
            minLength: 5,
            maxLength: 20
        },
        phone:{
            length: 10
        }
    }

};

module.exports = configuration;