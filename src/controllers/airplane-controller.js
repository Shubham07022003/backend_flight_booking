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
module.exports ={
    createAirplane
}