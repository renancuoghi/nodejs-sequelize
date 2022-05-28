const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database');
const app = express();
const port = config.port;
const userRoute = require('./routes/user');

const roleRoute = require('./routes/role');

const cors = require('cors');

const corsOption = {
    origin: '*',
    optionsSuccessStatus: 200,
};

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
app.use(cors(corsOption));
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