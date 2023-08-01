const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const {MONGODB_URL} = require('./config')


// Connect to MongoDB database (Replace the connection string with your MongoDB URL)
mongoose.connect(MONGODB_URL);
mongoose.connection.on('connected', ()=>{
    console.log("DB connected");
})
mongoose.connection.on('error', (error)=>{
    console.log("some error");
})

// Enable JSON body parsing
app.use(express.json());
app.use(cors());


require('./models/user_model');
require('./models/sale_model');


app.use(require('./routes/user_route'));
app.use(require('./routes/sale_route'));


// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
