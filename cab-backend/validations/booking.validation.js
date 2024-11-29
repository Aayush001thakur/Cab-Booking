const Joi = require("joi")

const bookingValidation = {
    params: Joi.object().keys({
        driverId: Joi.string().required()
    }),

    body: Joi.object().keys(
        {
            from: Joi.object().keys({
                country: Joi.string(),
                state: Joi.string(),
                city: Joi.string(),
                address: Joi.string()
            }).required(),
            to: Joi.object().keys({
                country: Joi.string(),
                state: Joi.string(),
                city: Joi.string(),
                address: Joi.string()
            }).required(),
            disbursedAt: Joi.date().required(),
            // arriveAt: Joi.object().keys({}).required()
            noOfSits: Joi.number().required()

        })

}



const getBookingByIdValidation = {
    params: Joi.object().keys({
        driverId: Joi.string().required()
    })
}
module.exports = { bookingValidation,getBookingByIdValidation }