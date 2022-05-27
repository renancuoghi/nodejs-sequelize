const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database');
const app = express();
const port = config.port;
const userRoute = require('./routes/user');
// const User = require('./model/user');
const roleRoute = require('./routes/role');
// const Role = require('./model/role');

/**
 * Sync database
 */
(async () => {    
    try {
        await database.sync();
        // await User.sync();
        // await Role.sync();
        console.log("Database syncronized!");
    } catch (error) {
        console.log(error);
    }
})();
app.use(bodyParser.json());
app.use(userRoute);
app.use(roleRoute);

app.get('/', async (req, res) => {
    try {
        await database.authenticate();
        await database.sync();      
        res.json({'message' : 'database connected'});
      } catch (error) {
        // console.error('Unable to connect to the database:', error);
        //const message = error
        res.json(error, 500);
      }
});



app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});