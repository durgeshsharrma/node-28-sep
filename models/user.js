const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    username : {
        type : String,
        required : true,
    },
    first_name : {
        type : String,
        required : true
    },

    last_name : {
        type : String,
        required : true
    } ,

    phoneNo : {
        type : String,
        required : true
    }
,
    
    country_code : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }

   
})




module.exports = mongoose.model("user" , userSchema);

