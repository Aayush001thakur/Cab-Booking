const pick = require("../utils/pick")



const Joi = require("joi")
const validate = (validationSchema) => (req, res, next) => {
    const validSchema = pick(validationSchema, ['params', 'query', 'body']);
    const myobject = pick(req, Object.keys(validationSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(myobject);

    if (error) {
        
        const errorMessage = error.details.map((details) => details.message).join(', ');
        return next(new Error(errorMessage));
    }
    Object.assign(req, value);
    return next();

}

module.exports = validate