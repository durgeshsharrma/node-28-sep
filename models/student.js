const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    firstName : {
        type : String,
        required : true,
    },

    lastName : {
        type : String,
        required : true,
    },

    adharcardNo : {
        type : String,
        required : true,
    },

    phoneNo : {
        type : String,
        required : true,
    },

    rollNo : {
       
        type : String,
        required : true,

    },

    fathersName  : {
        type : String,
        required : true,
    }

    
})


module.exports = mongoose.model("student" , studentSchema);