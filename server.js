const express = require('express');
const app = express();

const methodOverride = require('method-override'); //Used to delete
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.use("/pokemon", require("./controllers/pokemonController.js")); //homepage, add new, delete, edit
app.use("/players", require("./controllers/playerController.js"));

//LISTEN
var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("listening");
});
