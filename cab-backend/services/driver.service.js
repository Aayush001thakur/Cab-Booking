const { User, Driver, Booking } = require("../model")

// const driverRegisterService = async (userId, details) => {
//     return await Driver.create({
//         userId,
//         ...details
//     })
// }


const driverUpdateService = async (userId, details) => {
    details["profileCompleted"] = true
    return await Driver.findOneAndUpdate({ user: userId }, { $set: details }, { new: true })


}

const getDriverByUserId = async (userId) => {
    return await Driver.findOne({ user: userId }, { "__v": 0 })


}

const getDriverById = async (driverId) => {
    return await Driver.findById(driverId, { "__v": 0 })
}



const deleteDriver = async (userId) => {
    return await Driver.findOneAndDelete({ user: userId }, { "__v": 0 })

}


const getDriverBookingsByDriver = async (driver) => {
    return await Booking.find({ driver }, { __v: 0 })
}

const getDriverBookingByBookingId = async (driver,bookingId) => {
    return await Booking.findOne({_id:bookingId,driver}, { __v: 0 })
}




module.exports = {
    getDriverByUserId,
    driverUpdateService,
    deleteDriver,
    getDriverById,
    getDriverBookingsByDriver,
    getDriverBookingByBookingId
}