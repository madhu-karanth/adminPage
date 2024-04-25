const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes");
const announcementRoutes = require('./routes/announcementRoutes');
const upload = require('./controllers/fileupload'); 
const announcementModel = require("./model/announcementModel");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api/announcements', announcementRoutes);
app.use(bodyParser.json());
app.use("/files",express.static("files"))

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });
const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});