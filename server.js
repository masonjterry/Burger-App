let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false }));

let exphds = require("express-handlebars");

app.engine("handlebars", exphds({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgerController.js");

app.use("/", routes);

app.listen(PORT);
