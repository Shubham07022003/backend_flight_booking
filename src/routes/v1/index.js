const express = require('express');
const{}= require('../../controllers');
const{Infocontroller}= require('../../controllers')
const bookingRoutes= require('./booking')
const router = express.Router();
router.use('/booking', bookingRoutes);
router.get('/info',Infocontroller.info);

module.exports = router;

