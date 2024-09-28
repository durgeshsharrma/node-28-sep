const student = require("../models/student");


module.exports.allStudents = async (req , res) => {
    try{
        let allStudent = await student.find({});
    
    res.render('student/home' , {students : allStudent});
}
    catch(err){
        console.log(err)
    }
}


module.exports.addStudent = async(req , res) => {
   try{ 
    let newStudent = new student(req.body);
    const savedStudent = await newStudent.save();
    req.flash("success" , "New Student Added Successfully");
    res.redirect('/students');
}
    catch(err){
        console.log(err)
    }
}



module.exports.StudentEditFormRender = async(req , res) => {
    try{
        let {id} = req.params;
    let findedStudent = await student.findById(id);
    res.render('student/edit' , {student : findedStudent});
    }
    catch(err){
        console.log(err)
    }
}


module.exports.editStudent = async(req , res) => {
   try{
     let {id} = req.params;
        await student.findByIdAndUpdate(id , req.body);
        req.flash("success" , "student updated successfully");
        res.redirect('/students');
    }
    catch(err){
        console.log(err);
    }
}


module.exports.deleteStudent = async(req,res) => {
    try{
        let {id} = req.params;
        await student.findByIdAndDelete(id);
        res.redirect("/students")
    }
    catch(err){
        console.log(err.message);
    }
}