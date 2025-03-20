const{AirplaneService} = require ('../services');
//const{StatusCodes}= require('http-status-codes');

const{ErrorResponse, SuccessResponse}= require('../utils/common');
const { StatusCodes } = require('http-status-codes');

async function createAirplane (req ,res){
    try {
        //console.log(req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
           
        }
    );
        SuccessResponse.data = airplane;
        return res.json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
         .json(ErrorResponse);

    }
}

async function getAirplanes (req,res){
    try {
        //console.log(req.body);
        const airplane = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplane;
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
async function getAirplane (req,res){
    try {
        //console.log(req.body);
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
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
async function destroyAirplane (req,res){
    try {
        //console.log(req.body);
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
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
// PATCH: /airplane
async function updateAirplane (req ,res){
    try {
        //console.log(req.body);
        const airplane = await AirplaneService.updateAirplane(
            {capacity: req.body.capacity},
            req.params.id
    );
        SuccessResponse.data = airplane;
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
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}