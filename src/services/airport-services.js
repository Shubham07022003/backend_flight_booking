const { StatusCodes } = require('http-status-codes');
const {AirportRepository} = require('../repositores');
const AppError = require('../utils/errors/app.error');
const airportRepository = new AirportRepository();
 async function createAirport(data){
    try{
        const airport = await airportRepository.create(data);
        return airport ;

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
        throw new AppError('cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}
async function getAirports(){
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (error) {
        throw new AppError('cannot fetch data of all the airport' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirport(id){
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('the airport you request is not present',error.statusCode)
        }
        throw new AppError('cannot fetch data of all the airport' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyAirport(id){
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('the airplane you request to delete is not present',error.statusCode)
        }
        throw new AppError('cannot fetch data of all the airport' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport( data,id){
    try{
        const airport = await airportRepository.update(data, id);
        return airport ;

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
        throw new AppError('cannot   update Airplane object', StatusCodes.NOT_FOUND)
        //console.log(error)
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}