const mongoose = require('mongoose');
class DATABASE {
    server = '127.0.0.1:27017';
    database = 'cloudDOC';
    constructor(){
        this._Connect();
    }
    _Connect(){
        mongoose.connect(`mongodb://${this.server}/${this.database}`,{ useUnifiedTopology: true } , (err) => {
        if(!err)
        console.log("database connected successfully");
        else
        console.log(`database failure : ${err.message}`);

        });
    }

}
module.exports =  new DATABASE();