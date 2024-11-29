module.exports = {
    mongoose: {
        url: "mongodb://127.0.0.1:27017/cab",
        options: {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    jwt: {
        secret: "manishpawlikhurd@gmail.com"
    },
    Mail: {
        SMTP: {
            host: "smtp.gmail.com",
            port: 857,
            service: "gmail",
            auth: {
                user: "mk5116313@gmail.com",
                pass: "dvonqacdjfotqcey"
            }
        },
        from: "Manish kumar"
    },
    FRONTEND_URL:{
        reset_password:"http://mannia.com/reset"
    }
}