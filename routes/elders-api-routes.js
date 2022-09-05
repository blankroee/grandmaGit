const express = require('express');
const router = express.Router();

const myrepository = require('../DB/myrepository');

//--------------------------------------
// Add many car 
//  assuming recreiving
// {
//     theCarsArr: [
//        {},
//        {}
//     ]
// }

/// http://www.mywebsite.com/api/elders/add_many
router.post("/add_many", async (req, res) => {
    console.log("---", req.body);
    let myArr = [...req.body.theEldersArr];
    for (let i = 0; i < myArr.length; i++) {
        await myrepository.addNewElder(myArr[i]);
    }
    res.send('done');
});
//--------------------------------------

// Update info of an elder by its id
router.put("/:_id", async (req, res) => {
 const x = await myrepository.updateElderByID((req.params._id).trim(), req.body);
 res.send(x);
});

//--------------------------------------
// Get all elders
router.get("/", async (req, res) => {
 const x = await myrepository.getAllElders();
 res.send(x);

});
//--------------------------------------
// Get info of an elder by its id 
router.get("/:id", async (req, res) => {
 const x = await myrepository.getElderByID(req.params.id);
 res.send(x);
});
//--------------------------------------
//--------------------------------------
// Get elder by city 
router.get("/city/:city", async (req, res) => {
    const x = await myrepository.getEldersByCity(req.params.city);
    res.send(x);
   });
   //--------------------------------------
   


// Delete an elder by its id 
// http://127.0.0.1:5050/api/elders/6214af9ece48af40485b5a1a
router.delete("/:id", async (req, res) => {
    try{
        await myrepository.deleteElderByID(req.params.id);
        res.send("successfully deleted an elder with id " + req.params.id);
    }
    catch{
        res.send("there was an error deleting an elder with id " + req.params.id);
    }
});
//--------------------------------------
// Add an elder 
router.post("/", async (req, res) => {
 console.log("---", req.body);
 const x = await myrepository.addNewElder(req.body);
 res.send(x);
});
//--------------------------------------

module.exports = router;

