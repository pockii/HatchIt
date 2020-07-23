const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const todos = require("./routes/api/todos");
const happinessbreakdowns = require("./routes/api/happinessbreakdown");
const app = express();
const path = require('path');           

require('dotenv').config();             

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// Debug
mongoose.set('debug', true);

// Connect to MongoDB
mongoose
    .connect(
        process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {           
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }
      

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/todos", todos);
app.use("/api/happinessbreakdown", happinessbreakdowns);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));