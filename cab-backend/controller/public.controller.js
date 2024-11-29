
const catchAsync = require("../utils/catchAsync")
const { publicService } = require("../services")
const ApiError = require("../utils/apiError")




const getDrivers = catchAsync(async (req, res) => {
    const filter = req.body.filter
    console.log(filter)
    const driver = await publicService.getDrivers(filter, options = {})
    res.status(200).json({ driver })
}
)
const getDriverById = catchAsync(async (req, res) => {
    const driverId = req.params.driverId
    const driver = await publicService.getDriverById(driverId)
    if (!driver) {
        throw new ApiError(404, "driver not found")
    }
    res.status(200).send({ status: 200, data: driver })

})


const getAddressSuggestion = catchAsync(async (req, res) => {
    const findQuery = req.query.query
    const whereQuery = req.query.where
    const addresses = await publicService.addressSuggestionService(whereQuery, findQuery)
    res.status(200)
        .send({
            status: 200,
            data: addresses
        })

})

module.exports = {
    getDriverById,
    getDrivers,
    getAddressSuggestion
}