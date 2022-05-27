
const express = require('express')
const User = require('../model/user');
const Role = require('../model/role');
const router = express.Router();


router.post('/user/list',  async (req, res) => {
    const query =  (req.query.filter) ? req.query.filter : {};
    const limit =  (req.query.limit) ? req.query.limit : 10;
    const offset =  (req.query.offset) ? req.query.offset : 0;
    const queryObj = { 
        where: query, 
        offset: offset, 
        limit: limit,
        include : [
            { model: Role }
        ]
    };
    res.json(await User.findAndCountAll(queryObj));
});

router.get('/user/:id',  async (req, res) => {    
    const user = await User.findByPk(req.params.id, {
        include : [
            { model: Role }
        ]
    });
    if(user){
        res.json(user);
    }
    res.json("User Not found", 404);
});

router.post('/user',  async (req, res) => {
    res.json(await User.create(req.body));    
});

router.put('/user/:id',  async (req, res) => {
    let user = await User.findByPk(req.params.id);
    if(user){
        user = Object.assign(user, req.body);
        res.json(await user.save());
    }
    res.json("User Not found", 404);
});

module.exports = router;