const app=require("./app")

const mongoose=require("mongoose")
const config=require("./config/config")


let server;


mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(3779, () => {
    console.log(`Listening to port 3779`);
    console.log("open in browser :",`http://localhost:${3779}/api-docs`)
  });
});
