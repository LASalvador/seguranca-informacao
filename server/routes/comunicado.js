const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.send('Página de comunicados.');
})

router.get("/id", (req, res) =>{
    res.send('ola!');
})

module.exports = router;