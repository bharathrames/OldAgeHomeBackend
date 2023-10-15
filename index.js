const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); 

dotenv.config(); 

const app = express();
const port = process.env.PORT ;

app.use(bodyParser.json());

// Connect to MongoDB database 
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
