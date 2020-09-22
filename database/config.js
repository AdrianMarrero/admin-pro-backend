const mongoose = require('mongoose');

const dbConnection = async() => {

    try{
        await mongoose.connect(process.env.DB_CNN, {
                           useNewUrlParser: true, 
                           useUnifiedTopology: true,
                           useCreateIndex: true
                         });
        console.log('Db connected');                 

    }catch(error){
        console.log(error);
        throw new Error('Error init bd');
    }

}

module.exports = {
    dbConnection
}