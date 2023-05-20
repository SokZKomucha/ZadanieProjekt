// Requirements:
// - NodeJS v18.x.x
// - npm packages:
//   - express.js 
//   - cors

const express = require("express");
const cors = require("cors");
const path = require("path");

const port = 3000;
const app = express();
app.use(cors());


// Polish 
app.get("/pl/main", (req, res) => { res.sendFile(path.join(__dirname, ".\\pl\\main.html")); });
app.get("/pl/ferm1", (req, res) => { res.sendFile(path.join(__dirname, ".\\pl\\ferm1.html")); });
app.get("/pl/ferm2", (req, res) => { res.sendFile(path.join(__dirname, ".\\pl\\ferm2.html")); });
app.get("/pl/ferm3", (req, res) => { res.sendFile(path.join(__dirname, ".\\pl\\ferm3.html")); });


// English
app.get("/en/main", (req, res) => { res.sendFile(path.join(__dirname, ".\\en\\main.html")); });
app.get("/en/ferm1", (req, res) => { res.sendFile(path.join(__dirname, ".\\en\\ferm1.html")); });
app.get("/en/ferm2", (req, res) => { res.sendFile(path.join(__dirname, ".\\en\\ferm2.html")); });
app.get("/en/ferm3", (req, res) => { res.sendFile(path.join(__dirname, ".\\en\\ferm3.html")); });


// Shared
app.get("/sub-css", (req, res) => { res.sendFile(path.join(__dirname, ".\\resources\\sub.css")); });                // default style for all the subsites
app.get("/sub-css-narrow", (req, res) => { res.sendFile(path.join(__dirname, ".\\resources\\sub-narrow.css")); });  // narrow style for all the subsites
app.get("/rwd-script", (req, res) => { res.sendFile(path.join(__dirname, ".\\resources\\rwd.js")); });              // script for rwd
app.get("/home-icon", (req, res) => { res.sendFile(path.join(__dirname, ".\\resources\\home.svg")); });             // home icon


// Utility
app.get("/index-css", (req, res) => { res.sendFile(path.join(__dirname, "index.css")); });  // style for index and 404
app.get("/", (req, res) => { res.sendFile(path.join(__dirname, "index.html")); });          // index page
app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "404.html")); });            // 404 page
app.listen(port, () => {
    console.clear();
    console.log(`App listening on port ${port}`);
    console.log("---------------> tmux commands");
    console.log("Ctrl+B, C -\tnew window within current session");
    console.log("Ctrl+B, N -\tswitch to the next window");
    console.log("Ctrl+B, P -\tswitch to the last window");
    console.log("Ctrl+B, 0-9 -\tswitch to window with [x] index");
    console.log("Ctrl+B, % -\tsplit vertically");
    console.log("Ctrl+B, \" -\tsplit horizontally");
    console.log("Ctrl+B, arrow -\tnavigate between split windows");

});