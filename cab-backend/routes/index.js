const userRoute=require("./user.route")
const driverRoute=require("./driver.route")
const publicRoute=require("./public.route")
const messageRoute=require("./message.route")
const bookingRoute=require("./booking.route")

const docsRoute=require("./docs.route")

const express=require("express")
const router=express.Router()

const allroutes=[
    {
        "/user":userRoute
    },
    {
        "/driver":driverRoute
    },
    {
        "/public":publicRoute
    },
    {
        "/message":messageRoute
    },
    {
        "/booking":bookingRoute
    }
    
    

]

allroutes.forEach((userroute)=>{
    router.use(Object.keys(userroute)[0],Object.values(userroute)[0])
    // console.log("routes 78", Object.keys(userroute)[0])
})

// router.use("/auth/user",userRoute)
// router.use("/auth/driver",driverRoute)


module.exports=router