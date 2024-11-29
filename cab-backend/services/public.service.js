const { Driver } = require("../model")

const getDrivers = async (filter, options) => {
    const myFilter = {
        isEnable: true,
        profileCompleted: true
    }
    // const driverUser=await Driver.
    return await Driver.find({
        isEnable: true,
        profileCompleted: true
    }).find(myFilter, { "__v": 0 }).populate("user", { name: 1 })

}


const getDriverById = async (driverId) => {
    return await Driver.find({
        isEnable: true,
        profileCompleted: true
    })
        .findOne({ _id: driverId, isEnable: true, profileCompleted: true }, { "__v": 0 })
        .populate("user", { name: 1 })

}



const addressSuggestionService = async (where, query) => {
    console.log("query", query)
    const findQuery = query.trim()
    let toQuery = [
        { "to.country": { $regex: findQuery } },
        { "to.state": { $regex: findQuery } },
        { "to.city": { $regex: findQuery } },
        { "to.address": { $regex: findQuery } }
    ]

    let fromQuery = [
        { "from.country": { $regex: findQuery } },
        { "from.country": { $regex: findQuery } },
        { "from.state": { $regex: findQuery } },
        { "from.address": { $regex: findQuery } }
    ]

    let finalFilter = (where == "to" ? toQuery : fromQuery)
    let projection = (where == "to" ? { to: 1 } : { from: 1 })
    let groupBy = (where == "to" ? "$to" : "$from")
    console.log({ finalFilter, projection })
    // const result = await Driver.find(
    //     {
    //         $or: [
    //             { "to.country": { $regex: query } },
    //             { "to.state": { $regex: query } },
    //             { "to.city": { $regex: query } },
    //             { "to.address": { $regex: query } },

    //             { "from.country": { $regex: query } },
    //             { "from.country": { $regex: query } },
    //             { "from.state": { $regex: query } },
    //             { "from.address": { $regex: query } }


    //         ]
    //     },
    //     { from: 1, to: 1 }
    // )

    const result = await Driver.aggregate(
        [
            {
                $match:
                {
                    $or: finalFilter

                }
            },
            {
                $project: projection
            },
            {
                $project:
                {
                    _id: 0
                }
            }, {
                $group: {
                    _id: null,
                    result: {
                        $push: groupBy
                    }

                }
            },
            {
                $project: {
                    _id: 0
                }
            }
        ]
    )

    console.log(result.length)
    if (result.length > 0) {
        return result[0].result
    }
    else {
        return []
    }
}


module.exports = { getDrivers, getDriverById, addressSuggestionService }