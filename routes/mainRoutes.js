const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get('/home', (req,res) => {
    mainController.loadProfile(req, res)
});

module.exports = router;