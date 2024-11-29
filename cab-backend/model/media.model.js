const mongoose = require("mongoose")



const Media = mongoose.model("Media", mongoose.Schema({
    messageId: mongoose.Schema.Types.ObjectId,
    path: {
        type: String,
        required: true
    }
}))





module.exports = Media
