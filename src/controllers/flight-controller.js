const{FlightService} = require ('../services');
//const{StatusCodes}= require('http-status-codes');

const{ErrorResponse, SuccessResponse}= require('../utils/common');
const { StatusCodes } = require('http-status-codes');

//POST: /flights
async function createFlight (req ,res){
    try {
        //console.log(req.body);
        const flght = await FlightService.createFlight({
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
        SuccessResponse.data = flght;
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
        //console.log(req.body);
        const flight = await FlightService.getFlights();
        SuccessResponse.data = flight;
        return res
        .json(SuccessResponse)
        .status(StatusCodes.OK)

    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}
//post: /airplanes/:id
async function getFlight (req,res){
    try {
        //console.log(req.body);
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
        return res
        .json(SuccessResponse)
        .status(StatusCodes.OK)

    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}
//DELETE: /airplanes/:id
async function destroyFlight (req,res){
    try {
        //console.log(req.body);
        const flight = await FlightService.destroyFlight(req.params.id);
        SuccessResponse.data = flight;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
        

    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}
// PATCH: /airplane/:id
async function updateFlight (req ,res){
    try {
        //console.log(req.body);
        const flight = await FlightService.updateFlight(
            {capacity: req.body.capacity},
            req.params.id
    );
        SuccessResponse.data = flight;
        return res
        .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}
module.exports ={
    createFlight,
    // getAirplanes,
    // getAirplane,
    // destroyAirplane,
    // updateAirplane
}