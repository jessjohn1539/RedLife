const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Your_username',
    password: 'your_password',
});

const createDatabase = () => {
    connection.query(`CREATE DATABASE IF NOT EXISTS BBRedlife`, (err, result) => {
        if (err) throw err;
        console.log('BBRedlife database created successfully!');
        connection.query(`USE BBRedlife`, (err, result) => {
            if (err) throw err;
            console.log('Using BBRedlife database!');
            connection.query(`CREATE TABLE IF NOT EXISTS donor (
        donorFname varchar(30) not null,
        donorGender varchar(10) not null,
        donorDob int not null,
        donorMobile varchar(10) not null,
        bloodgroup varchar(10) not null,
        donorAddress varchar(200) not null,
        stateCode varchar(20) not null,
        donorPass varchar(15) not null,
        Pincode int not null,
        districtcode varchar(30) not null,
        donorId char(36) 
  );`, (err, result) => {
                if (err) throw err;
                console.log('donor table created successfully!');
            });

            connection.query(`CREATE TABLE IF NOT EXISTS donorpass (
        mobileNumber varchar(20), 
        password varchar(20) 
      );`, (err, result) => {
                if (err) throw err;
                console.log('donorpass table created successfully!');
            });

            connection.query(`CREATE TABLE IF NOT EXISTS blood_bank_info (
        stateCode varchar(20) not null,
        districtcode varchar(20)  not null,
        hospCity varchar(20)  not null,
        BBName varchar(60)  not null,
        parentHospName varchar(60) not null, 
        hospShortName varchar(30)  not null,
        hospType varchar(20)  not null,
        contactPerson varchar(30)  not null,
        hospEmail varchar(30)  not null,
        hospContact varchar(20)  not null,
        hospFax varchar(20) ,
        licenceNo varchar(30)  not null,
        licenceFromDate varchar(20)  not null,
        licenceToDate varchar(20)  not null,
        componentFacility varchar(10)  not null,
        apheresisFacility varchar(10) not null, 
        helplineNo varchar(15)  not null,
        hospAdd1 varchar(100)  not null,
        hospAdd2 varchar(100)  ,
        pincode varchar(10)  not null,
        hospWebsite varchar(20)  not null,
        noOfBed varchar(10) not null, 
        userName varchar(20)  not null,
        password varchar(20) not null
      );`, (err, result) => {
                if (err) throw err;
                console.log('blood_bank_info table created successfully!');
            });

            connection.query(`CREATE TABLE IF NOT EXISTS donation_info (
            donorType varchar(100) ,
            donationType varchar(100) ,
            componentType varchar(100) ,
            bagType varchar(100) ,
            ttiType varchar(100)
          );`, (err, result) => {
                if (err) throw err;
                console.log('donation_info table created successfully!');
            });

            connection.query(`CREATE TABLE IF NOT EXISTS bbpass (
            userName varchar(20) not null ,
            password varchar(20) not null
          );`, (err, result) => {
                if (err) throw err;
                console.log('bbpass table created successfully!');
            });

            connection.query(`CREATE TABLE IF NOT EXISTS login (
            mobileNumber varchar(10) not null,
            password varchar(15) not null
          );`, (err, result) => {
                if (err) throw err;
                console.log('login table created successfully!');
            });

            connection.query(`CREATE TABLE IF NOT EXISTS inventory (
            bloodBankId varchar(20) not null,
            bloodType varchar(20) not null,
            quantity varchar(20) not null,
            expirationDate varchar(20) not null
          );`, (err, result) => {
                if (err) throw err;
                console.log('inventory table created successfully!');
            });
            // Add more table creation queries here
        });
    });
};

module.exports = connection;
module.exports.createDatabase = createDatabase;
