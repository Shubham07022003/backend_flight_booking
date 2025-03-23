const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositores');
const AppError = require('../utils/errors/app.error');
const flightRepository = new FlightRepository();
 async function createFlight(data){
    try{
        const flight = await flightRepository.create(data);
        return flight ;

    }catch(error){
        console.log (error)
        if(error.name == 'SequelizeValidationError' ){
            let explanation =[];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        //throw error;
        throw new AppError('cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}
async function getFlights(){
    try {
        const flight = await flightRepository.getAll();
        return flight;
    } catch (error) {
        throw new AppError('cannot fetch data of all the flight' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getFlight(id){
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('the flight you request is not present',error.statusCode)
        }
        throw new AppError('cannot fetch data of all the flight' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyFlight(id){
    try {
        const response = await flightRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('the flight you request to delete is not present',error.statusCode)
        }
        throw new AppError('cannot fetch data of all the flight' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateFlight( data,id){
    try{
        const flight = await flightRepository.update(data, id);
        return flight ;

    }catch(error){
         console.log (error)
        // if(error.name == 'SequelizeValidationError' ){
        //     let explanation =[];
        //     error.errors.forEach((err) => {
        //         explanation.push(err.message);
        //     });
        //     console.log(explanation);
        //     throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        // }
        //throw error;
        throw new AppError('cannot   update flight object', StatusCodes.NOT_FOUND)
        //console.log(error)
    }
}

module.exports = {
    createFlight,
    getFlights,
    getFlight,
    destroyFlight,
    updateFlight     
}