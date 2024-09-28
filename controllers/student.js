const student = require("../models/student");


module.exports.allStudents = async (req , res) => {
    let allStudent = await student.find({});
    
    res.render('student/home' , {students : allStudent});
}


module.exports.addStudent = async(req , res) => {
    let newStudent = new student(req.body);
    const savedStudent = await newStudent.save();
    req.flash("success" , "New Student Added Successfully");
    res.redirect('/students');
}



module.exports.StudentEditFormRender = async(req , res) => {
    let {id} = req.params;
    let findedStudent = await student.findById(id);
    res.render('student/edit' , {student : findedStudent});
}


module.exports.editStudent = async(req , res) => {
    let {id} = req.params;
        await student.findByIdAndUpdate(id , req.body);
        req.flash("success" , "student updated successfully");
        res.redirect('/students');
}