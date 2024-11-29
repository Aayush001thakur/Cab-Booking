const mongoose = require("mongoose")

const { Message, Text, Media } = require("../model")


const sendMessage = async (message) => {
    console.log(message)
    return await Message.create(message)
}


const createText = async (messageId, text) => {
    return await Text.create({ messageId, text })
}

const dateToDay =(value)=>{
 const original=new Date(value)
    const options={year:"numeric",month:"short",day:"numeric"}
   
   return new Intl.DateTimeFormat("en-GB",options).format(original)

}

const getAllChat = async (userId) => {
    // return await Message.find({$or:[{reciever:userId},{sender:userId}]},{"__v":0,"seen":0}).distinct("sender").populate("reciever sender",{"email":0,"password":0,"__v":0,"verified":0,"role":0})
    const id = new mongoose.Types.ObjectId(userId)
    console.log(id)

    const today = new Date()
    today.setHours(15, 49, 0, 0)
    
   
    console.log(dateToDay("2023-11-14"))

 const results= await Message.aggregate([
        {
            $match: { $or: [{ reciever: id }, { sender: id }], createdAt: { $gte: today } }
        },
        {
            $lookup:
            {
                from: "texts",
                localField: "_id",
                foreignField: "messageId",
                as: "media"
            },

        },
        {
            $project: { updatedAt: 0, __v: 0, "media._id": 0, "media.messageId": 0, "media.__v": 0 }
        },


        // {
        //     $sort: { createdAt: -1 }
        // },



        {
            $group: {
                _id: {
                    $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
                },
                mymessge: { $push: "$$ROOT" }
            }
        },

        {
            $project: {
                today: { $cond: {if:{$gte:["_id",today]} ,then:true,else:false} },
                mymessge:1
            }
        }

    ])


    results.map((item)=>{
        item.day=dateToDay(item._id)
        return item
    })
 
 return results
} 




const getChatMessage = async (sender, reciever) => {
    return await Message.aggregate([

        {
            $lookup:
            {
                from: "texts",
                localField: "_id",
                foreignField: "messageId",
                as: "media"
            },

        },
        {
            $project: { "__v": 0, "media.__v": 0, "media.messageId": 0, "media._id": 0 }
        },
    ]
    )
}




module.exports = { sendMessage, createText, getChatMessage, getAllChat }