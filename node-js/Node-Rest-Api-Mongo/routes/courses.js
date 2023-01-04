const ex = require("express")
const Course = require("../models/course");
const router = ex.Router();



router.get("/allcourses", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.json(err);
    }
})

router.post("/addCourse", async(req, res) => {
    try {
        const course= await Course.create(req.body);
        res.json(course);
    } catch (err) {
        res.json(err);
    }
})

router.delete("/delete/:courseId", async (req,res) => 
{
    try {
        Course.remove({_id: req.params.courseId});
        res.status(200).json({
            message: "deleted successfully",
        });
    }catch (error) {
        res.send(error);
    }
});

router.put("/update/courseId", async (req,res) => {
    const sourseId = req.params.courseId;

    try {
        const course = await Course.updateOne({ _id:
        courseId}, req.body);
        res.json(course);
    }catch (error){
        res.json(error);
    }
});

module.exports = router;

