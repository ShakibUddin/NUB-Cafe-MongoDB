require("dotenv").config();
const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const menuRouter = require("./src/routes/menuRoutes");

app = express();
// use the modules
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public/images')));

app.use("/menu",menuRouter);

app.get("/", (req, res) => {
    res.send("<h2>Welcome to NUB Cafe</h2>");
})

const PORT = process.env.PORT || 8080;

//Mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log("Server is live at port: " + PORT);
    });
}).catch(e => {
    console.log(e)
})
