const mongoose = require("mongoose")

const Message = mongoose.model("Message",
 mongoose.Schema({
    reciever: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true, default: "text", enum: ["video", "image", "text","file"] },
    seen: { type: Boolean, default: false }

  }, {
    timestamps: true
}))




const Text = mongoose.model("Text", mongoose.Schema({
    messageId: { type: mongoose.Schema.Types.ObjectId, required: true },
    text: { type: String, required: true }
}))



module.exports = { Message, Text }
