const axios = require('axios');
const {BookingRepository}= require('../repositores');
const db = require('../models');
const{StatusCodes} = require('http-status-codes');
const{ServerConfig}= require('../config');
const AppError = require('../utils/errors/app.error');
async function createBooking(data) {
    return new Promise((resolve, reject)=>{
    
        const result = db.sequelize.transaction(async function bookingImpl (t)  {
            const flight =  await axios.get(`http://localhost:4051/api/v1/flights/${data.flightId}`);
            //console.log(flight.data);
            const flightData = flight.data.data;
            if(data.noofSeats> flightData.totalSeats){
                reject(  new AppError('Not enough seats available', StatusCodes.BAD_REQUEST));
            }
           resolve(true);
        });
    
    
})       

}
module.exports ={ 
    createBooking
}