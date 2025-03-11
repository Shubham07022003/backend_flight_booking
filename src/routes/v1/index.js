const express =require("express");
const airplaneRoutes = require('./airplane-routes');

const {infocontroller} = require('../../controllers')
const router = express.Router();
router.use('/airplanes', airplaneRoutes) ;

router.get('/info', infocontroller.info);

router.get('/', (req, res) => {
    res.json({ message: 'this is v1 router' });
});


module.exports = router;

