const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


//  user type:["user","driver"]
const userSchema = mongoose.Schema({
    role: {
        type: String,
        default: "user",
        enum: ["user", "driver", "admin"]
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        // unique:true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    profile: {
        type: String,
        default: null
    },
    profileImage: {
        type: String,
        default: null
    }

})


// to check for seprate model

userSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};


userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next()
})


const User = mongoose.model("User", userSchema)




module.exports = User