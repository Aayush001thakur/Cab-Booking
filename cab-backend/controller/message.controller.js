const { messageService } = require("../services")

const sendMessage = async (req, res) => {
    const sender = req.user._id
    const reciever = req.params.recieverId
    const { type } = req.body
    if (type == "text") {

        const newMessage = await messageService.sendMessage({ sender, reciever, type })
        const newText = await messageService.createText(newMessage._id, req.body.text)

        res.status(200).json({ newMessage: { messageId: newMessage._id, type, reciever, text: req.body.text } })
    }

}

const getChatMessage = async (req, res) => {
    const sender = req.user._id
    const reciever = req.params.recieverId
    const message = await messageService.getChatMessage(sender, reciever)
    res.json({ message })
}

const getAllChats = async (req, res) => {
    const userId = req.user._id
    const message = await messageService.getAllChat(userId)
    res.json({ message })
}

module.exports = { sendMessage, getChatMessage ,getAllChats}