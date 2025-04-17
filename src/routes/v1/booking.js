const express = require('express');

const{ Bookingcontroller}= require('../../controllers')
const router = express.Router();

router.post(
    '/',Bookingcontroller.createBooking
);

module.exports = router;

