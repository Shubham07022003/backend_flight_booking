const express =require("express");
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

const {infocontroller} = require('../../controllers')
const router = express.Router();
router.use('/airplanes', airplaneRoutes) ;
router.use('/cities',cityRoutes ) ;

router.get('/info', infocontroller.info);

router.get('/', (req, res) => {
    res.json({ message: 'this is v1 router' });
});


module.exports = router;

