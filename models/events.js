const Schema = require('mongoose').Schema;
const db= require('../config/db');
const eventSchema = {
    location: {
        type : Schema.Types.ObjectId, 
        ref : 'Location'
    },
    organiser :{
        type : Schema.Types.ObjectId, 
        ref : 'User'
    },
    name : String,
    description : String,
    date : Date,
    duration : String,
    invited : {
        going : [
            {
                type : Schema.Types.ObjectId, 
                ref : 'User'
            }
        ],
        notGoing : [
            {
                type : Schema.Types.ObjectId, 
                ref : 'User'
            }
        ],
        noRSVP : [
            {
                type : Schema.Types.ObjectId, 
                ref : 'User'
            }
        ],
    }

}
const Event = db.getModel(eventSchema, 'Event');
module.exports = Event;