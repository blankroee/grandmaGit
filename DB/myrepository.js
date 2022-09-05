
const elderModels = require('./modles/elderModles');
//ObjectId = require('mongodb').ObjectId;

const Elder = elderModels.Elder;
// const Customer = rentalModels.Customer;



//------------------------------------------
// Get all elders
const getAllElders = async () => {
 const x = await Elder.find();
//  console.log(x);
 console.log(`getAllElders ${JSON.stringify(x)}`);
 return JSON.parse(JSON.stringify(x));

};
exports.getAllElders = getAllElders;
//------------------------------------------

// during development of the getAllCars function
//  you may want to use this:
///     (to make it run)
//getAllCars()

// getAllElders();
//------------------------------------------

// Update info of a car by its id
const updateElderByName = async (elderName, elderInfo) => {
 const x = await Elder.updateOne({ name: elderName }, elderInfo);
 console.log(elderName);
 console.log(`updateElderByName ${JSON.stringify(x)}`);
 return JSON.stringify(x);
};
exports.updateElderByName = updateElderByName;
//------------------------------------------

const updateElderByID = async (elderID, elderInfo) => {
   console.log("*-*-*-*-*-*- " + elderID);
   const x = await Elder.updateOne({ _id: elderID }, elderInfo);
   console.log(`updateElderByID ${JSON.stringify(x)}`);
   return JSON.stringify(x);
  };
  exports.updateElderByID = updateElderByID;
  
//   updateElderByName('רחלי ראדה', 
// { //name: "רניה סלים",  
//    // placeOfBirth: "פולין",
//    // interests: " ספרות, ספורט, ברידג'",
//    // socialWorker: { name: "יערה חדד", phone: "054-7147774" }})
//    socialWorker: { name: "דנה כהן", phone: "052-3492244" }})

const updateCity = async (city, elderInfo) => {
    const x = await Elder.updateMany({ city: city }, elderInfo);
    console.log(`updateCity ${JSON.stringify(x)}`);
    return JSON.stringify(x);
   };
   exports.updateCity = updateCity;
   
//    updateCity('Haifa', {"city":"חיפה"})



//------------------------------------------
// Get info of an elder by its id
const getElderByID = async (theID) => {
 const x = await Elder.findOne({ _id: theID });
 console.log(`getElderByID ${JSON.stringify(x)}`);
 return x;
};
exports.getElderByID = getElderByID;

//getCarByID('620bb198d6e421050e664ed2');
//------------------------------------------

//------------------------------------------
// Get elders by city
const getEldersByCity = async (theCity) => {
    const x = await Elder.find({ city:theCity });
    console.log(theCity);
    console.log(`getEldersByCity ${JSON.stringify(x)}`);
    return JSON.parse(JSON.stringify(x));
};
   exports.getEldersByCity = getEldersByCity;
   
   // getEldersByCity('חיפה');
   //------------------------------------------
   


// Delete an elder by its id
// const deleteElderByID = async (theID) => {
//  const x = await Elder.deleteOne({ _id: theID });
//  console.log(`deleteElderByID ${JSON.stringify(x)}`);
//  return (`deleted ${x.n} documents`);
// };
// exports.deleteElderByID = deleteElderByID;
// //deleteCarByID('6214b0c99439ac9d2099892c')

// Delete an elder by its name
const deleteElderByID = async (id) => {
   const x = await Elder.deleteOne({ _id: id });
   console.log(`deleteElderByID ${JSON.stringify(x)}`);
   return (`deleted ${x.n} documents`);
  };
  exports.deleteElderByID = deleteElderByID;
  
//   deleteElderByName('מתן');
// ------------------------------------------
// const deleteAllCarsWhichHaveIDOtherThan = async (theID) => {
//     const x = await Car.deleteMany({ _id: { $not: {$eq: theID} }, manufacturer:"Peugeot"});
//     console.log(`deleteCarByID ${JSON.stringify(x)}`);
//     return (`deleted ${x.n} documents`);
//    };
//    exports.deleteCarByID = deleteCarByID;
//   deleteAllCarsWhichHaveIDOtherThan('6214afe96b37022795ad18d1')
// ------------------------------------------

// Add an elder
const addNewElder = async (elderInfo) => {
 console.log("--", JSON.stringify(elderInfo));
 const newElder = new Elder(elderInfo);
 const x = await newElder.save();
 console.log(`addNewElder ${JSON.stringify(x)}`);
 return (`added new elder with id ${x._id}`);
};
exports.addNewElder = addNewElder;
//------------------------------------------
// addNewElder({
// "name": "מקס רובינר",
// "city": "תל אביב",
// "placeOfBirth": "הולנד",
// "age": 82,
// "interests": "היסטוריה, בישול, ספורט",
// "socialWorker": { name: "יערה חדד", phone: "054-7147774" },
// "pic": "maxrobiner.jpg"});

// const deleteElderByName = async (theName) => {
//     const x = await Elder.deleteMany({ _name: theName });
//     console.log(`deleteElderByName ${JSON.stringify(x)}`);
//     return (`deleted ${x.n} documents`);
//    };
//    exports.deleteElderByName = deleteElderByName;
   
//    deleteElderByName("Ron Sofer");
// getAllElders();
