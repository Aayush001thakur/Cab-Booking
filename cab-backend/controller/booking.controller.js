const { bookingService, driverService } = require("../services")
const ApiError = require("../utils/apiError")
const catchAsync = require("../utils/catchAsync")



const bookNewCab = catchAsync(async (req, res) => {
  console.log( "bjj", req?.user)
    const booking = await bookingService.bookNewCab(req?.user, req?.params?.driverId, req.body)
    if (!booking) {
        throw new ApiError(500, 'somthing went wrong')
    }
    res.status(200).json({
        succes: "successfully booked !",
        booking
    })
})

module.exports = { bookNewCab }