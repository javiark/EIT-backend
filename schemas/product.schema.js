const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:String,
    price:Number,
    description:String
})
                         //coleccion products
module.exports = mongoose.model("Product", productSchema);

