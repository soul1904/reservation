const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const table = [];
const waitlist= [];

app.get("/", (req, res) => {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", (req, res) => {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", (req, res) => {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
});

app.get("/api/tables", (req, res) => {
    return res.json(table);
});

app.post("/api/reserve", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReserv = req.body;

    console.log(newReserv);

    // We then add the json the user sent to the character array
 if (tables.length > 5 ) {
     waiting.push(newReserv);
 }
 else {
     tables.push(newReserv);
 }
    // We then display the JSON to the users
    res.json(newReserv);
});

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });