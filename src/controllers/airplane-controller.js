const{AirplaneService} = require ('../services');
async function createAirplane (req ,res){
    try {
        console.log(req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.json({
            sucess: true,
            data: response,
            message:'successfully created an airplane',
            error:{}
        });
    } catch (error) {
        return res .json({
            sucess: false,
            message:'something went wrong creating airplane',
            data:{},
            error:{}
        });

    }
}
module.exports ={
    createAirplane
}