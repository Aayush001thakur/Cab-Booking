const Joi = require("joi")

const userRegisterValidation = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required().min(8).max(15)

    })
}


const userLoginValidation = {
    body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required().min(8).max(15)
    })

}

const userForgotPasswordValidation = {
    body: Joi.object().keys({
        email: Joi.string().required(),
    })

}

const verifyAccount = {
    body: Joi.object().keys({
        token: Joi.string().required()
    })
}

const userVerifyPasswordValidation = {
    body: Joi.object().keys({
        token: Joi.string().required(),
        password: Joi.string().required().min(8)
    })
}

const changeUserRoleValidation = {
    body: Joi.object().keys({
        role: Joi.string().required().valid("user", "driver"),

    })
}

const profileImage = {
    body: Joi.object().keys({
        profile: Joi.binary()
    })
}

module.exports = {
    userRegisterValidation,
    verifyAccount,
    userLoginValidation,
    userForgotPasswordValidation,
    userVerifyPasswordValidation,
    changeUserRoleValidation,
    profileImage
}