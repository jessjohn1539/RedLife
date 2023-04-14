//Requiring all modules
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require('./db');


//port settings
const port = process.env.PORT || 3000;

db.createDatabase();

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
app.use(bodyParser.json());

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
app.get('/inventory', (req, res) => {
    const sql = 'SELECT * FROM inventory';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('inventory', { inventory: results });
    });
});
app.post('/add-inventory', (req, res) => {
    const { bloodType, quantity, expirationDate } = req.body;
    const sqlLastUsername = 'SELECT userName FROM BBpass ORDER BY userName DESC LIMIT 1';
    db.query(sqlLastUsername, (err, results) => {
        if (err) throw err;
        const bloodBankUsername = results[0].userName;
        const sqlInsertInventory = 'INSERT INTO inventory (bloodType, quantity, expirationDate, bloodBankId) SELECT ?, ?, ?, userName FROM blood_bank_info WHERE username = ?';
        db.query(sqlInsertInventory, [bloodType, quantity, expirationDate, bloodBankUsername], (err, results) => {
            if (err) throw err;
            res.redirect('/inventory');
        });
    });
});

app.get("/bloodAvailability", (req, res) => {
    // res.render("BloodAvailability")
    const sql = `SELECT stateCode, hospCity, BBName, hospType, hospContact, hospAdd1, pincode FROM blood_bank_info`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        const dataList = result.map((row) => ({
            stateCode: row.stateCode,
            hospCity: row.hospCity,
            BBName: row.BBName,
            hospType: row.hospType,
            hospContact: row.hospContact,
            hospAdd1: row.hospAdd1,
            pincode: row.pincode,
        }));

        res.render('BloodAvailability', { dataList });
    });
});
app.get("/donorLogin", (req, res) => {
    res.render("donorLogin")
});
app.get("/BBlogin", (req, res) => {
    res.render("BBlogin")
});


db.connect(function (err) {
    if (err) {
        console.error('Error connecting to SQL database: ' + err.stack);
        return;
    }
    console.log('Connected to SQL database as ID ' + db.threadId);
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

    db.query(sql, values, function (err, result) {
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

    db.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log('Donor registered successfully!');
    });
    const query1 = `SELECT * FROM donor WHERE donorPass = ?`;
    db.query(query1, [password], (error, results, fields) => {
        if (error) throw error;

        if (results.length > 0) {
            const donor = results[0];
            if (donor.donorPass === password && donor.donorMobile === mobileNumber) {
                // Password is correct, user can login
                res.redirect(`/?username=${donor.donorFname}`);
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

app.post('/bloodbankRegis', function (req, res) {
    const stateCode = req.body.stateCode;
    const districtcode = req.body.districtcode;
    const hospCity = req.body.hospCity;
    const BBName = req.body.BBName;
    const parentHospName = req.body.parentHospName;
    const hospShortName = req.body.hospShortName;
    const hospType = req.body.hospType;
    const contactPerson = req.body.contactPerson;
    const hospEmail = req.body.hospEmail;
    const hospContact = req.body.hospContact;
    const hospFax = req.body.hospFax;
    const licenceNo = req.body.licenceNo;
    const licenceFromDate = req.body.licenceFromDate;
    const licenceToDate = req.body.licenceToDate;
    const componentFacility = req.body.componentFacility;
    const apheresisFacility = req.body.apheresisFacility;
    const helplineNo = req.body.helplineNo;
    const hospAdd1 = req.body.hospAdd1;
    const hospAdd2 = req.body.hospAdd2;
    const pincode = req.body.pincode;
    const hospWebsite = req.body.hospWebsite;
    const noOfBed = req.body.noOfBed;
    const userName = req.body.userName;
    const password = req.body.password;


    const donorType = req.body.donorType;
    const donationType = req.body.donationType;
    const componentType = req.body.componentType;
    const bagType = req.body.bagType;
    const ttiType = req.body.ttiType;



    const sql1 = 'INSERT INTO blood_bank_info (stateCode, districtcode, hospCity,BBName,parentHospName,hospShortName, hospType,contactPerson, hospEmail,hospContact,hospFax,licenceNo,licenceFromDate,licenceToDate,componentFacility,apheresisFacility,helplineNo,hospAdd1,hospAdd2,pincode,hospWebsite,noOfBed,userName, password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    const values1 = [stateCode, districtcode, hospCity, BBName, parentHospName, hospShortName, hospType, contactPerson, hospEmail, hospContact, hospFax, licenceNo, licenceFromDate, licenceToDate, componentFacility, apheresisFacility, helplineNo, hospAdd1, hospAdd2, pincode, hospWebsite, noOfBed, userName, password];


    db.query(sql1, values1, (err, result) => {
        if (err) throw err;

        // Insert data into table2
        const sql2 = 'INSERT INTO donation_info (donorType, donationType,componentType,bagType,ttiType) VALUES (?,?,?,?,?)';
        const values2 = [donorType, donationType, componentType, bagType, ttiType]

        db.query(sql2, values2, (err, result) => {
            if (err) throw err;

            console.log('Blood bank registered successfully!');
            res.redirect('/');
        });
    });
});

app.post('/BloodBanklogin', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const sql = 'INSERT INTO BBPass (userName, password) VALUES (?,?)';
    const values = [userName, password];

    db.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log('1 record inserted');
    });
    const query1 = `SELECT * FROM blood_bank_info WHERE password = ?`;
    db.query(query1, [password], (error, results, fields) => {
        if (error) throw error;

        if (results.length > 0) {
            const bloodbank = results[0];
            if (bloodbank.password === password && bloodbank.userName === userName) {
                res.redirect('/inventory');
            } else {
                // Password is incorrect
                res.status(401).send('Incorrect password');
            }
        } else {
            // User not found
            res.status(404).send('Blood bank not found');
        }
    });
});
//localhost port specifications 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

