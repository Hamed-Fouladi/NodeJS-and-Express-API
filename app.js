const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./routers/users'));

