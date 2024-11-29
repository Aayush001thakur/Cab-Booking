const { driverService } = require(".")
const { Booking } = require("../model")
const ApiError = require("../utils/apiError")



const bookNewCab=async (user,driver,details)=>{
    const driverProfile=await driverService.getDriverById(driver)
    console.log({driverProfile})
    if(!driverProfile){
       throw new ApiError(404,"driver not found")
    }
    return await Booking.create({driver,user:user._id,...details})
}


const getBookingByBookingId=async ()=>{
   
        return await Booking.findById(bookingId, { __v: 0 })
    
}
module.exports={bookNewCab,getBookingByBookingId}
