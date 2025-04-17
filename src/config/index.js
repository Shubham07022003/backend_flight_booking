const dotenv =require('dotenv');
//const { FLIGHT_SERVICE } = require('./server-config');
dotenv.config();
//const PORT = process.env.PORT;
module.exports ={
    PORT:process.env.PORT,
    ServerConfig: require('./server-config'),
}