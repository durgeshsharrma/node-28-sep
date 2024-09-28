const express = require('express');
const router = express.Router();
const students = require('../models/student');  //Student ka model jisme Schema hai data save hoga
const studentController = require('../controllers/student')

//All Student will be shown on that route
router.get('/students' , async(req  , res) => {

    studentController.allStudents(req , res);

} )

//form render for new student
router.get("/students/new" , (req , res) => {
    res.render('student/new');
})


router.post('/students' ,async (req , res) => {
   studentController.addStudent(req , res);

})


router.get('/students/:id/edit' ,async (req , res) => {
    studentController.StudentEditFormRender(req , res)
})


router.put('/students/:id' , async(req , res) => {
       studentController.editStudent(req , res);
     
})


router.delete('/students/:id' , async(req , res) => {
    studentController.deleteStudent(req,res);
})







module.exports = router;