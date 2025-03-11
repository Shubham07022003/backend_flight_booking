//const{Logger} = require(' ../config');
class Crudrepository
{
    constructor(model) {
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("not created from crudrepository")
            //Logger.error('Something went wrong in crud repo : "create"');
            throw error;
        }
    }
    async destroy(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id: data
                }
            });
            return response;
        } catch (error) {
            //Logger.error('Something went wrong in crud repo : "destroy"');
            throw error;
        }
    }
    async get(data){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            //Logger.error('Something went wrong in crud repo : "get"');
            throw error;
        }
    }
    async update(id, data){ // data-> {col :value,...}
        try {
            const response = await this.model.update(data ,{
                where:{
                    id: id
                }
            });
            return response;
        } catch (error) {
           // Logger.error('Something went wrong in crud repo : "update"');
            throw error;
        }
    }

}

module.exports = Crudrepository;