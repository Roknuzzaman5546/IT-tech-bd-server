const express = require("express");
const connectDB = require("./db/connectDb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const classRoutes = require('./routs/classes');
const usersRouts = require('./routs/users')
const teachreqRouts = require('./routs/teacherrequest')
const applyMidlwares = require("./midilwares/applyMiddilware");

applyMidlwares(app)

app.use(classRoutes)
app.use(usersRouts)
app.use(teachreqRouts)
app.get("/", (req, res) => {
    res.send("It tech is running....");
});

app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});



const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Car Doctor Server is running on port ${port}`);
    });

}


main()