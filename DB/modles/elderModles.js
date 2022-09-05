const mongoose = require('mongoose');


const url ="mongodb+srv://roeebl:sb8370040@cluster0.grhy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected successfully to MongoDB!'))
 .catch(err => console.error('Something went wrong', err));

//  //  Defining schema for a customer
// const customersSchema = new mongoose.Schema({
//     name: String,
//     dl: String
//    });


//  Defining schema for an elder
const elderSchema = new mongoose.Schema({
    name: String,
    city: String,
    placeOfBirth: String,
    age: Number,
    interests: String,
    socialWorker: {
    name: { type: String },
    phone: { type: String }
    },
    pic: String
   });
   
   // create Model from the schema we created above
module.exports.Elder = mongoose.model('Elder', elderSchema);
