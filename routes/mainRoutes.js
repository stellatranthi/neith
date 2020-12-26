const express = require("express");
const router = express.Router();

router.get('/home', (req,res) => {
    res.send("<h1>Welcome to your new home</h1>")
});

module.exports = router;