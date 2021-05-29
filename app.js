const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [{name: 'Tony', email: 'tony@gmail.com'}]

app.get("/url", (req, res, next) =>
    res.json(["Tony","Lisa","Michael","Ginger","Food"])
);

app.get("/users", (req, res, next) => {
    res.json({ok: true, users});
});

app.get("/user/:name", (req, res, next) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    if(user) {
        res.json({ok: true, user});
    }
    res.json({ok: false, error: 'There is not user with this name', user});
});

app.post("/adduser", (req, res, next) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ ok: true, users });
    }
});