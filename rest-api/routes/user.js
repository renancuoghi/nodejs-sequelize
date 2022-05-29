
const express = require('express')
const User = require('../model/user');
const Role = require('../model/role');
const router = express.Router();


router.post('/user/list',  async (req, res) => {
    const json = req.body;
    const query =  (json.filter) ? json.filter : {};
    const limit =  (json.limit) ? json.limit : 10;
    const offset =  ((json.offset) ? json.offset : 0) * limit;
    const order = (json.order) ? json.order : [['id', 'ASC']];

    const queryObj = { 
        where: query, 
        offset: offset, 
        limit: limit,
        order: order,
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