const Joi=require("joi")

const messageValidation=Joi.object().keys({
    reciever: Joi.string(),
    type:Joi.string(),
  
})

module.exports=messageValidation