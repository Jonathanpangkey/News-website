// import require module
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// static files for public folder
app.use(express.static("public"));
app.use("/css", express(__dirname + "public/css"));
app.use("/img", express(__dirname + "public/img"));
app.use("/js", express(__dirname + "public/js"));

// ejs template
app.set("views", "./src/views");
app.set("view engine", "ejs");

// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// routes set up
const newsRouter = require("./src/routes/news");
app.use("/", newsRouter);

app.listen(process.env.PORT || 80, () => 
    console.log("app is running ")
);
