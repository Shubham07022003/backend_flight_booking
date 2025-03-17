const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositores');
const AppError = require('../utils/errors/app.error');
const airplaneRepository = new AirplaneRepository();
 async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane ;

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
        throw new AppError('cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}
module.exports = {
    createAirplane
}