const mongoose = require('mongoose')
const {Schema}  = mongoose

const inventorySchema = new Schema({
    sku: String,
    description: String,
    instock: Number
})

module.exports = mongoose.model('inventory', inventorySchema)