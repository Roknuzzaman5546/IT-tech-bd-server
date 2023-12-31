const express = require("express");
const connectDB = require("./db/connectDb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const classRoutes = require('./routs/classes');
const usersRouts = require('./routs/users')
const teachreqRouts = require('./routs/teacherrequest')
const applyMidlwares = require("./midilwares/applyMiddilware");
const authenticationRouts = require('./routs/authentication');
const enrolclassRouts = require('./routs/enrolclass/index.')
const clasrequestRouts = require('./routs/classrequest')


applyMidlwares(app)

app.use(classRoutes)
app.use(usersRouts)
app.use(teachreqRouts)
app.use(authenticationRouts)
app.use(enrolclassRouts)
app.use(clasrequestRouts)
app.get("/", (req, res) => {
    res.send("It tech is running....");
});

app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});

module.exports = app;