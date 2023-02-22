//Requiring all modules
const express = require("express");
const path = require("path");
require("./db/conn");
const app  = express();
const hbs= require("hbs");

const Donor = require("./models/userdata");

//dbms connection code
// const mongoose = require('mongoose');

// mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://localhost:27017/Redlife", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     family: 4,
// }).then(()=>{
//     console.log('Database connection successful');
// }).catch((err)=>{
//     console.log('no connection');
//     console.error(err.stack); //a function to print exactly where the error was caught
// })

// const dataSchema = new mongoose.Schema({
//     donorFName: String,
//     donorGender: String,
   
//     email: String
//   });
  
//   // Create a model for the data based on the schema
//   const Data = mongoose.model('Data', dataSchema);
  
//   // Use body-parser middleware to parse the form data
//   const bodyParser = require('body-parser');
// const { Int32 } = require("mongodb");
//   app.use(bodyParser.urlencoded({ extended: false }));
  
  // Route for handling the form submission
  // app.post('/submit', (req, res) => {
  //   const data = new Data({
  //     name: req.body.name,
  //     email: req.body.email
  //   });
  //   data.save().then(result => {
  //     console.log('Data saved to the database');
  //     res.send('Data saved successfully');
  //   });
  // });

//port settings
const port = process.env.PORT || 3000;

//to display htmls in public folders
// const static_path = path.join(__dirname, "../public")
// app.use(express.static(static_path));

//if the below hbs path settings are getting out of hand
//then activate the above 2 3 lines

//path settings for css files and images for hbs files
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
const images_path = path.join(__dirname, "../public/images");

app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.use(express.static(images_path)); 
app.set("view engine", "hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);

//route settings for main files
app.get("/", (req, res)=>{
    res.render("index")
});
app.get("/donorReg", (req, res)=>{
    res.render("donorReg")
});
app.get("/bloodbankReg", (req, res)=>{
    res.render("AddBloodBank")
});
app.get("/bloodAvailability", (req, res)=>{
    res.render("BloodAvailability")
});
// app.post('/submit', function(req, res){
//   console.log(req.body)
//   res.send('got it')
// });
app.post("/DonorRegistration", async(req,res)=>{
    try{
        // res.sendStatus(req.body);
        const Donordata = new Donor(req.body);
        await Donordata.save();
        res.status(201).render("donorReg")
    }catch(error){
        res.status(500).send(error);
    }
})
//localhost port specifications 
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})