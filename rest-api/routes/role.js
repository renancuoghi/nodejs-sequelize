
const express = require('express')
const Role = require('../model/role');
const router = express.Router()

router.get('/role',  async (req, res) => {  
    res.json(await Role.findAll())
});

router.post('/role',  async (req, res) => {  
    res.json(await Role.create(req.body));    
});

module.exports = router;