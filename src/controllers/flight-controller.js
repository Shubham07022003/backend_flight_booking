const{FlightService} = require ('../services');
//const{StatusCodes}= require('http-status-codes');

const{ErrorResponse, SuccessResponse}= require('../utils/common');
const { StatusCodes } = require('http-status-codes');

//POST: /flights
async function createFlight (req ,res){
    try {
        //console.log(req.body);
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price : req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
            
           
        }
    );
        SuccessResponse.data = flight;
        return res.json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}

async function getFlights (req,res){
    try {
        const flights = await FlightService.getFlights(req.query);
        SuccessResponse.data = flights;
        return res.json(SuccessResponse);


    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}
//post: /airplanes/:id

module.exports ={
    createFlight,
    getFlights,
    // getAirplane,
    // destroyAirplane,
    // updateAirplane
}