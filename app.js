const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// This is needed to parse info which comes in the body of the request
//   the first is for body with json ,
//     the second is for body that came from a submition of a form by a browser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Let express know we have more files with code to handle more routes
app.use("/api/elders", require("./routes/elders-api-routes"));
//app.use('/api/employees', require('./routes/employees-api-routes'));
//app.use('/api/products', require('./routes/products-api-routes'));

//  remember: no need to mention 'public' in the url's path
// www.mywebsite.com/images/smily.png
// We will use a folder named 'public' in our project to serve our 'publicly available' files
app.use(express.static("public"));

// during development of the 'myrepository' file
//  you may want to use this:
///     (to make it run)
//const myRepositoryChecks = require('./DB/myrepository')

//----------------------------------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
