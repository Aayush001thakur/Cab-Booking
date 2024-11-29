const Joi = require("joi")


    const driverProfileUpdateValidation = {
        body: Joi.object().keys({
            description: Joi.string(),
            disbursedAt: Joi.object().keys({
                hour: Joi.number().required().min(0).max(11),
                minute: Joi.number().required().min(1).max(59),
                meridiem: Joi.string().required().valid("AM", "PM")
            }).required("disbursedAt is required "),
            ariveAt: Joi.object().keys({
                day: Joi.number().required().min(1),
                hour: Joi.number().required().min(1).max(23),
                minute: Joi.number().required().min(1).max(59)
            }).required("ariveAt is required "),
            vehicle: Joi.string().required().valid("car", "auto", "bus", "eco", "bike"),
            vehicleDetails: Joi.string().required(),
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
            days: Joi.array().items(Joi.string().valid("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday")).required(),
            license: Joi.boolean().required(),
        })
    }





const addressSuggetionValidation={
    query:Joi.object().keys({
        query:Joi.string().required().disallow("", " ",null),
        where:Joi.string().required().valid("to","from")
    })
}

module.exports = {driverProfileUpdateValidation,addressSuggetionValidation}