const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/donorRegistration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(()=>{
    console.log('Database connection successful');
}).catch((err)=>{
    console.log('no connection');
    console.error(err.stack); //a function to print exactly where the error was caught
})