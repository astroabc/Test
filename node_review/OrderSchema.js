const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    item: String,
    price: Number,
    quantity: Number,
});

module.exports = mongoose.model("orders", orderSchema);
