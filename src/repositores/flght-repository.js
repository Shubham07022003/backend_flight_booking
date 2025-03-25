const Crudrepository = require('./crud-repository');
const{Flight} = require('../models');

class FlightRepository extends Crudrepository {
    constructor(){
        super(Flight);

    }
    async getFlights(filter, sort){
        const response = await Flight.findAll({
            where: filter,
            order: sort
        });
        return response;
    }
    
}

module.exports = FlightRepository ;