const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./Keys");
const app = express();
const PORT = 4000;

//Connections
mongoose.connect(MONGOURI, {
    useUnifiedTopology:true,
    useNewUrlParser:true
});

mongoose.connection.on("connecter", () =>{
    console.log("Connected to mongodb");
});

mongoose.connection.on("error", (error) =>{
    console.log("Error :" + error);
});


require("./models/Post");
require("./models/Category");
require("./models/Comment");


app.use(express.json());

app.use(require("./routes/Post"));
app.use(require("./routes/Category"));
app.use(require("./routes/Comment"));

app.listen(PORT, () => {
    console.log("Server is started at " + PORT)
}) ;