import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    _id: {
        type: String, 
        require:true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    cartItems: {
        type: String,
        default: {}
    }
}, { minimize: false })

const User = mongoose.model.user || mongoose.model('user', userSchema)

export default User