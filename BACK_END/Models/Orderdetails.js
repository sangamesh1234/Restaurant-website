const mongoose = require('mongoose');

// create a Schema
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        userID: {
            type: Number,
            required: true,
        },
        restaurantId: {
            type: Number,
            required: true,
        },
        orderDetails:{
            type: Array,
            required: true,
        },
        Totalprice: {
            type: Number,
            required: true,
        },
        orderstatus: {
            type: Boolean,
            required: true,
        },
        userAddress: {
            type: String,
            required: true,
        }
    }
);

// export the model
module.exports = mongoose.model('Orderdetails', orderSchema, 'order');