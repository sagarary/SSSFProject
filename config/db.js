'use strict';

class Database {
  constructor(){
    this.mongoose = require('mongoose');
  }

// Start DB Connection 
  connect(url, app){
    this.mongoose.connect(url).then(() => {
      console.log('Connected to DB successfully.');
    }, err => {
      console.log('Connection to db failed: ' + err);
    });
  }

 //Get Model for a Mongoose Schema 

  getModel(schema, name) {
    const s = new this.mongoose.Schema(schema);
    return this.mongoose.model(name, s);
  }
}

module.exports = new Database();