const mongoose = require('mongoose');
const {DATABASE} = require('./db');
class operation{
        constructor(){
            DATABASE = new DATABASE();
        }
        _Post(url,schemaObj,collection,successMsg,errorMsg) {
            // DATABASE.collection(collection).insert()
        }

        _Delete(url,condition) {

        }

        _Put(url,schemaObj,collection) {

        }

}

module.exports = {_Post, _Delete , _Put}