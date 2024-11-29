const mongoose = require("mongoose")
const { User, Driver } = require("./index")


const Booking = mongoose.model("Booking", mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Driver.modelName,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User.modelName,
        required: true
    },
    disbursedAt: {
        type: Date,
        required: true,
    },
    arriveAt: {
        // calculate from disbursedAt ,add this in ariveAt
        day: {
            type: Number,
            default: 0
        },
        hour: {
            type: Number,
            default: 0
        },
        minute: {
            type: Number,
            default: 0
        }
    },
    from: {
        country: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            default: ""
        },
        city: {
            type: String,
            default: ""
        },
        address: {
            type: String,
            default: ""
        }

    },
    to: {
        country: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            default: ""
        },
        city: {
            type: String,
            default: ""
        },
        address: {
            type: String,
            default: ""
        }
    },
    noOfSits: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    }
))



module.exports = Booking