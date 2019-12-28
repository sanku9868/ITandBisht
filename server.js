const express = require('express');
const bodeyParser = require("body-parser");
const colors = require('colors');
const mongoose = require('mongoose');

//  importing routs 
const userLogin = require('./routes/api/userLogin');

const app =express();

// body-parser middleware 
app.use(bodeyParser.json());

// Config DB
const dbURL = require('./config/key').mongoURI;
const oldburl = require('./config/key').mongoOld;

// connnect to mongodb 
mongoose
  .connect(dbURL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'E_marketing_test'

  })
  .then((result) => console.log(colors.green("You are connected to Mongodb Atlas cloud !!")))
  .catch(err =>
    console.log(
      colors.red("Mongodb Atlas cloud did not connected :( \n " + err)
    )
  );

  //  route the request to rout folder
  app.use('/api/userLogin',userLogin);




const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(colors.cyan("server is running at port number 5000"));
});