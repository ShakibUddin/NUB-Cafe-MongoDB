require("dotenv").config();
const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
var cors = require('cors')
const menuRouter = require("./src/routes/menuRoutes");
const authRouter = require("./src/routes/authRoutes");
const profileRouter = require("./src/routes/profileRoutes");

app = express();
// use the modules
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/static', express.static(path.join(__dirname, 'public/images')));

app.use("/menu",menuRouter);
app.use("/auth",authRouter);
app.use("/profile",profileRouter);

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
