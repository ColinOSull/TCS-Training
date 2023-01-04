const mongoose = require("mongoose")

const Employee = mongoose.Schema({
    EmpID:{
        type:Number,
        require:true
    },
    EmpName:{
        type:String,
        require:true
    },
    EmpSalary:{
        type:Number,
        require:true
    },
    EmpDesignation:{
        type:String,
        require:true
    },
    EmpEmail:{
        type:String,
        require:true
    },
    EmployeeQualification:{
        type:String,
        require:true
    },
})

module.exports=mongoose.model("employees", Employee)