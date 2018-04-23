'use strict';

class Database {
  constructor(){
    this.mongoose = require('mongoose');
  }


  connect(url, app){
    this.mongoose.connect(url).then(() => {
      console.log('Connected to DB successfully.');
    }, err => {
      console.log('Connection to db failed: ' + err);
    });
  }

  getModel(schema, name) {
    const s = new this.mongoose.Schema(schema);
    return this.mongoose.model(name, s);
  }
}

module.exports = new Database();