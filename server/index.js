const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //to interact with the mongodb server
const userRoutes = require("./routes/userRoutes")
const bodyParser = require('body-parser');
const announcementRoutes = require('./routes/announcementRoutes');

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use('/api/auth',userRoutes);
app.use('/api/announcements', announcementRoutes);

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL,{

}) 
.then(() => {
    console.log("DB Connection Sucessfull");
})
.catch((err) => {
    console.log(err.message);
});
const server = app.listen(process.env.PORT,()=> {
    console.log(`Server started on Port ${process.env.PORT}`)
})

