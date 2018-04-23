const Schema = require('mongoose').Schema;
const db= require('../config/db');

const userSchema = {
username: String,
firstName : String,
lastName : String,
email : String,
password : String,
address :{
country : String,
city : String,
zip : String,
lastLogin : Date,
},
connections : [
    {
        type : Schema.Types.ObjectId, 
        ref : 'User'
    }
],
events : [
    {
        type : Schema.Types.ObjectId, 
        ref : 'Event'
    }
],
reviews : [
    {
        type : Schema.Types.ObjectId, 
        ref : 'Location'
    }
],
};
const User = db.getModel(userSchema, 'User');
module.exports = User;