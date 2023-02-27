const express = require('express');
const router2 = express.Router();

const model = require("../Model/model2");

router2.post("/logo", async (req, res) => {
    console.log("Inside post function");
    const data = new model({
        logourl: req.body.logourl,
    });
    const data1 = await data.save();
    res.json(data1);
});
router2.get("/logo", async (req, res) => {
    const data2 = await model.find();
    res.json(data2);
});

module.exports = router2;