const mongoose = require("mongoose")

const userModel = require("./user.model")



const Driver = mongoose.model("Driver", mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel.modelName
    },
    isEnable: {

        // enable if role is driver else disable
        type: Boolean,
        default: true
    },
    profileCompleted: {
        // to check is profile completed 
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        default: ""
    },
    disbursedAt: {
        hour: {
            type: Number,
            enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            default: 0
        },
        minute: {
            type: Number,
            default: 0
        },
        meridiem: {
            type: String,
            enum: ["AM", "PM"]
        }
    },
    ariveAt: {
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
    vehicle: {
        type: String,
        default: "car",
        enum: ["car", "bike", "auto", "bus"]
    },
    vehicleDetails: {
        type: String,
        default: ""
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
    days: {
        type: [{
            type: String,
            enum: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        }
        ],

        default: []
    },
    availableSits: {
        type: Number,
        default: 0
    },
    license: {
        type: Boolean,
        default: false
    },


},
    {
        timestamps: true
    }
))


module.exports = Driver