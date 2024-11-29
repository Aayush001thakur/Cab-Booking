const { tokenTypes } = require('../config/tokens');

const mongoose = require("mongoose")

const Token = mongoose.model("Token", mongoose.Schema({

    token: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
        required: true,
    },
    expires: {
        type: Date,
        // required: true,
    }
},
    {
        timestamps: true,
    }
))



module.exports = Token