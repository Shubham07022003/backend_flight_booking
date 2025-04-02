const {Sequelize} = require('sequelize');
const { Op } = require('sequelize');
const Crudrepository = require('./crud-repository');
const{Flight, Airplane ,Airport, City } = require('../models');

class FlightRepository extends Crudrepository {
    constructor(){
        super(Flight);

    }
    async getFlights(filter, sort){
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                model: Airplane,
                required: true, /// INNER JOIN
                as: 'airplaneDetail',
                },
                {
                    model: Airport,
                    required: true, /// INNER JOIN,
                    as: 'departureAirport',
                    include: [{
                        model: City,
                        required: true,
                        attributes: ['id', 'name']
                    }],
                    
                   
                on: {
                    col1: Sequelize.where(Sequelize.col('Flight.departureAirportId'), "=", Sequelize.col('departureAirport.code')),
                    
                },
               
                },
                {
                    model: Airport,
                    required: true, /// INNER JOIN,
                    as: 'arrivalAirport',
                    include: [{
                        model: City,
                        required: true,
                        attributes: ['id', 'name']
                    }],
                on: {
                    col1: Sequelize.where(Sequelize.col('Flight.arrivalAirportId'), "=", Sequelize.col('arrivalAirport.code')),
                    
                },
               
                }
                
            ]
        });
        return response;
    }
    
}

module.exports = FlightRepository ;