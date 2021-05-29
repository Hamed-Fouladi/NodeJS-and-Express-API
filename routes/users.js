const express = require("express");
const router = express.Router;

const users = [{name: 'Tony', email: 'tony@gmail.com'}];

router.get("/url", (req, res, next) =>
    res.json(["Tony","Lisa","Michael","Ginger","Food"])
);

router.get("/users", (req, res, next) => {
    res.json({ok: true, users});
});

router.get("/user/:name", (req, res, next) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    if(user) {
        res.json({ok: true, user});
    }
    res.json({ok: false, error: 'There is not user with this name', user});
});

router.post("/adduser", (req, res, next) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ ok: true, users });
    }
});

module.exports = router;