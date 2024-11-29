const express =require("express")
const cors=require("cors")
const routes=require("./routes")
,
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const path=require("path")
const ejs=require("ejs")

const passport =require("passport")

// const override=require("")

const {errorConverter,errorHandler}=require("./middlewares/error")

const app=express()

app.use('/public',express.static('Public'))
app.set("view engine","ejs")

// console.log(path.join(__dirname,"Template"))
// app.set("views",path.join(__dirname,"Template"))

// console.log(ejs.renderFile(path.join(__dirname,"Template",'fogot-password.ejs'),{name:'mabish'}))
// app.get("/",(req,res)=>{
//     res.render("fogot-password.ejs",{name:"mabish"})
// })
// parse json request body
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
// app.use(passport.initialize())
// passport.use("jwt",)

const specs=require("./Docs/swagger")

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );


app.use("/api",routes)



app.use(errorConverter)
app.use(errorHandler)

module.exports=app

