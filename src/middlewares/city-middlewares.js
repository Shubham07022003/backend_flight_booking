const{StatusCodes}= require('http-status-codes')
const{ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app.error');
function validateCreateRequest(req, res,next){
    if(!req.body.name){
        ErrorResponse.message= 'something went wrrong creating city';
       // new AppError(['Model number not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST )
        ErrorResponse.error=  new AppError(['city_name not found in oncoming request in the correct form'],StatusCodes.BAD_REQUEST ) ;
        return res
        .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports= {
    validateCreateRequest
}