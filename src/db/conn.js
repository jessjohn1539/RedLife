const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/Redlife", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(()=>{
    console.log('Database connection successful');
}).catch((error)=>{
    console.log(error);
    // console.log('no connection');
    // console.error(err.stack); //a function to print exactly where the error was caught
})