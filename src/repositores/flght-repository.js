const Crudrepository = require('./crud-repository');
const{Flight} = require('../models');

class FlightRepository extends Crudrepository {
    constructor(){
        super(Flight);
    }
    
}

module.exports = FlightRepository ;