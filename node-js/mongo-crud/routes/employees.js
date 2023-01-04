const ex = require("express")
const Employee = require("../models/employee");
const router = ex.Router();



router.get("/allemployees", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.json(err);
    }
})

router.post("/addEmployee", async(req, res) => {
    try {
        const employee= await Employee.create(req.body);
        res.json(employee);
    } catch (err) {
        res.json(err);
    }
})

router.delete("/delete/:employeeId", async (req,res) => 
{
    try {
        Employee.remove({_id: req.params.employeeId});
        res.status(200).json({
            message: "deleted successfully",
        });
    }catch (error) {
        res.send(error);
    }
});

router.put("/update/employeeId", async (req,res) => {
    const sourseId = req.params.employeeId;

    try {
        const employee = await Employee.updateOne({ _id:
        employeeId}, req.body);
        res.json(employee);
    }catch (error){
        res.json(error);
    }
});

module.exports = router;

