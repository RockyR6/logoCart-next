import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'product'
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'address'
    },
    status: {
        type: String,
        required: true,
        default: 'Order Placed'
    },
    date: {
        type: Date,
        required: true
    }
});

const Order = mongoose.models.order || mongoose.model('order', orderSchema);

export default Order;
