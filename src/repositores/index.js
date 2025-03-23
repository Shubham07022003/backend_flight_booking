const AirplaneRepository = require("./airplane-repository");
const CityRepository = require("./city-repository");
const FlightRepository = require("./flght-repository");

module.exports = {
    AirplaneRepository : require('./airplane-repository'),
    CityRepository : require('./city-repository'),
    AirportRepository: require('./airport-repository'),
    FlightRepository: require('./flght-repository')
}