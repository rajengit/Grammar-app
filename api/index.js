const express = require("express");
const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.set("views", __dirname + "/views");
app.set("views", __dirname + "/views" );
app.set("view engine", "ejs");
// app.use(express.static(__dirname + "public"));
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/home',  (req,res)=>{
    res.render('home');
})

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
