const mongoose = require('mongoose');
const {Schema} = mongoose;


const sneakSchema = new Schema ({
    brand: String,
    name: String,
    colorway: String,
    retailPrice: String,
    img: String
})


//export the model through model.exports 
module.exports = mongoose.model('sneaker',sneakSchema, 'sneaker'); 
                                // Sneaks collection