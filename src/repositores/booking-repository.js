const {StatusCodes} = require('http-status-codes');

const {Booking} = require('../models');
const Crudrepository = require('./crud-repository');
class BookingRepository extends Crudrepository {
    constructor() {
        super(Booking);
    }

    }
    module.exports = BookingRepository;