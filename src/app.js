//Requiring all modules
const express = require("express");
const path = require("path");
// require("./db/conn");
const mysql = require('mysql');
const app = express();
const hbs = require("hbs");
const cors = require("cors");


//port settings
const port = process.env.PORT || 3000;

//to display htmls in public folders
// const static_path = path.join(__dirname, "../public")
// app.use(express.static(static_path));

//if the below hbs path settings are getting out of hand
//then activate the above 2 3 lines
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Ys2drrizfs',
    database: 'redlife'
});
//path settings for css files and images for hbs files
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
const images_path = path.join(__dirname, "../public/images");

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.use(express.static(images_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

//route settings for main files
app.get("/", (req, res) => {
    res.render("index")
});
app.get("/donorReg", (req, res) => {
    res.render("donorReg")
});
app.get("/bloodbankReg", (req, res) => {
    res.render("AddBloodBank")
});
app.get("/bloodAvailability", (req, res) => {
    res.render("BloodAvailability")
});
app.get("/donorLogin", (req, res) => {
    res.render("donorLogin")
});


connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to SQL database: ' + err.stack);
        return;
    }
    console.log('Connected to SQL database as ID ' + connection.threadId);
});
app.post('/DonorRegistration', function (req, res) {
    const donorFname = req.body.donorFname;
    const donorGender = req.body.donorGender;
    const donorDob = req.body.donorDob;
    const donorMobile = req.body.donorMobile;
    const bloodgroup = req.body.bloodgroup;
    const donorAddress = req.body.donorAddress;
    const stateCode = req.body.stateCode;
    const donorPass = req.body.donorPass;
    const Pincode = req.body.Pincode;
    const districtcode = req.body.districtcode;

    const sql = 'INSERT INTO donor (donorFname, donorGender, donorDob,donorMobile,bloodgroup,donorAddress, stateCode,donorPass,Pincode,districtcode) VALUES (?,?,?,?,?,?,?,?,?,?)';
    const values = [donorFname, donorGender, donorDob, donorMobile, bloodgroup, donorAddress, stateCode, donorPass, Pincode, districtcode];

    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log('1 record inserted');
        res.redirect('/');
        console.log(result);
    });
});
app.post('/login', (req, res) => {
    const mobileNumber = req.body.mobileNumber;
    const password = req.body.password;
    const sql = 'INSERT INTO donorPass (mobileNumber, password) VALUES (?,?)';
    const values = [mobileNumber, password];

    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log('1 record inserted');
    });
    const query1 = `SELECT * FROM donor WHERE donorPass = ?`;
    connection.query(query1, [password], (error, results, fields) => {
      if (error) throw error;
      
      if (results.length > 0) {
        const donor = results[0];
        if (donor.donorPass === password && donor.donorMobile === mobileNumber) {
          // Password is correct, user can login
          res.redirect(`/?username=${donor.donorFname}`);
        // res.redirect('/?donorFname=' + donor.donorFname);
        // res.render('index', {username: donor.donorFname});
        } else {
          // Password is incorrect
          res.status(401).send('Incorrect password');
        }
      } else {
        // User not found
        res.status(404).send('User not found');
      }
    });
  });
  
//localhost port specifications 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})