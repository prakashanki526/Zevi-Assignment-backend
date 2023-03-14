const mongoose = require("mongoose");
const {model, Schema} = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: Array,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        sellingPrice: {
            type: Number,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        favourite: {
            type: Boolean,
            required: true
        },
        trending: {
            type: Boolean,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    },
    {
        timestamps:{
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
    }
);

module.exports = model("Product", productSchema);
