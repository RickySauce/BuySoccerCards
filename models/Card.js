const Mongoose = require("mongoose")

const cardSchema = new Mongoose.Schema({
    name: String,
    img: 
        { data: Buffer, 
            contentType: String 
        },
    
})


Mongoose.model("Card", cardSchema)