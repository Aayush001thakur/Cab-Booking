
const httpStatus = require("http-status")
const { driverService, userService } = require("../services")
const ApiError = require("../utils/apiError")

const catchAsync = require("../utils/catchAsync")




// const driverRegisterController = catchAsync(async (req, res, next) => {
//   const userId = req.user._id
//    console.log(req.user)

//   if (req.user.role !=="driver") {
//     throw new ApiError(404,"change you role to make driver profile!")
//   }

//   const driver = await driverService.getDriverByUserId(userId)
//   console.log({driver})
//   if (driver) {
//     console.log(driver)
//     throw new ApiError(404, "driver already created !")
//   }
//   const newDriver = await driverService.driverRegisterService(userId, req.body)
//   res.status(200).json({
//     driver: newDriver
//   })

// })

const driverUpdateController = catchAsync(async (req, res) => {
  const userId = req.user._id
  console.log(req.body)
  const driver = await driverService.driverUpdateService(userId, req.body)
  if (!driver) {
    throw new ApiError(400, "driver not found")
  }
  res.status(200).json({ driver })
})


const getDriverController = catchAsync(async (req, res) => {
  const userId = req.user._id
  const driver = await driverService.getDriverByUserId(userId)
  if (!driver) {
    ApiError(400, "driver not found")
  }
  res.status(200).json({ driver })
})

const deleteDriverController = catchAsync(async (req, res, next) => {
  const userId = req.user._id
  const driver = await driverService.deleteDriver(userId)
  if (!driver) {
    throw new ApiError(400, "driver not found")
    // return next(new Error("driver not found"))
  }
  res.status(200).json({ status: "driver deleted successfully !" })

})

// driver get all that bookings


const driverBookingsController = catchAsync(async (req, res) => {
  const userId = req.user._id
  const driver = await driverService.getDriverByUserId(userId)
  const  bookings=await driverService.getDriverBookingsByDriver(driver)
  res.status(200).json({
   succes:"driver booking",
   bookings
  })
})

const driverBookingByBookingId = catchAsync(async (req, res) => {
  const bookingId = req.params.boookingId
  const booking = await driverService.getDriverBookingByBookingId(req.user._id,bookingId)
  res.status(200).json({
   status:httpStatus.OK,
   data:booking
  })
})


module.exports = {
   driverUpdateController, 
   getDriverController, 
   deleteDriverController ,
   driverBookingsController,
   driverBookingByBookingId
  }