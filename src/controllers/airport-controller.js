//const airport = require('../models/airport');
const{AirportService} = require ('../services');
//const{StatusCodes}= require('http-status-codes');

const{ErrorResponse, SuccessResponse}= require('../utils/common');
const { StatusCodes } = require('http-status-codes');

async function createAirport (req ,res){
    try {
        //console.log(req.body);
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
         
        }
    );
        SuccessResponse.data = airport;
        return res.json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}

async function getAirports (req,res){
    try {
        //console.log(req.body);
        const airport = await AirportService.getAirports();
        SuccessResponse.data = airport;
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
async function getAirport (req,res){
    try {
        //console.log(req.body);
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
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
async function destroyAirport (req,res){
    try {
        //console.log(req.body);
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
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
async function updateAirport (req ,res){
    try {
        //console.log(req.body);
        const airport = await AirportService.updateAirport(
            {capacity: req.body.capacity},
            req.params.id
    );
        SuccessResponse.data = airport;
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}