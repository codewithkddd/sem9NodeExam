const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name:{ type: String,require: true},
    Email:{ type: String,require: true, unique:true},
    Password:{ type: String,require: true, unique:true},
    Number:{ type: Number,require: true},
    Age:{ type: Number,require: true},
    Adress:{ type: String,require: true}
    },
    {collation:'users'}
)



const model = mongoose.model('UserSchema',UserSchema)

module.exports = model