const mongoose = require('mongoose')
 const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
var userSchema = new mongoose.Schema({
user_name: {
        type: String,
        required: true,
         trim: true,
      },
    user_password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
         
     },
    user_email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
     tokens: [{
         token: {
             type: String,
             required: true
         }
     }]
})
userSchema.virtual('detail', {
    ref: 'Detail',
    localField: '_id',
    foreignField: 'user_id'
})

 
 

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.user_password
    delete userObject.tokens
    return userObject
}
 
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({_id:user._id.toString()}, 'mahmoud samir task to microtec')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.statics.findByCredentials = async(user_email,user_password)=>{
    const user = await User.findOne({user_email})
    if(!user){
        throw new Error('user not found')
    }
    const isMatch = await bcrypt.compare(user_password, user.user_password)
    if(!isMatch) throw new Error('password error')
    return user
}
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('user_password')) {
        user.user_password = await bcrypt.hash(user.user_password, 8)
    }
    next()
})
const User = mongoose.model('User', userSchema)
 module.exports= User
