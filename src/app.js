//Requiring all modules
const express = require("express");
const path = require("path");
const app  = express();
const hbs= require("hbs");

//dbms connection code
require("./db/conn");

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
//localhost port specifications 
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})