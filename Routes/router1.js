const express = require("express");
const router1 = express.Router();

const model = require("../Model/model1");

//post method
router1.post("/post", async (req, res) => {
    console.log("Inside post function");
    const data = new model ({
        photo: req.body.photo,
        project: req.body.project,
        location: req.body.location,
        year: req.body.year,

    });
    const data1 = await data.save();
    res.json(data1);
});

//get all the projects

router1.get("/data", async(req, res) => {
    try {
        const data2 = await model.find();
        res.json(data2);
    } catch (err) {
        res.send("Error" + err);
    }
});

//get project by id
router1.get("/:id", async (req, res) => {
    try {
        const data1 = await model.findById(req.params.id);
        res.json(data1);        
    } catch (err) {
        res.send("Error" + err);
    }
});

//update projects
router1.put("/update/:id", (req, res) => {
    let uid = req.params.id;
    let uphotos = req.body.photo;
    let uproject = req.body.project;
    let uyear = req.body.year;
    let ulocation = req.body.location;
    model.findOneAndUpdate(
        {_id: uid },
        {
           $set: {
            photo: uphotos,
            project: uproject,
            year: uyear,
            location: ulocation,
           },
        },
        { new: true }, //its giving updated value in postman tool
        (err, data) => {
            if(err){
                res.send("ERROR");
            } else {
                if(data == null){
                    res.send("nothing found");   
                } else {
                    res.send(data)
                }
            }
        }
    );
});

//delete method

router1.delete("/delete/:id", (req, res) => {
    let deleteid = req.params.id;
    model.findOneAndDelete({ _id: deleteid }, (err, data) => {
      if (err) {
        res.send("ERROR");
      } else {
        if (data == null) {
          res.send("Wrong Id");
        } else {
          res.json("Deleted");
        }
      }
    });
  });
module.exports = router1;