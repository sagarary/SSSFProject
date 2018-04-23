const Schema = require('mongoose').Schema;

const db= require('../config/db');
const locationSchema = {
    name : String,
    details : String, 
    coordinates : {
        lat : Number,
        lng : Number,
    },
    cover : String,
    media : {
        photos : [
            {
                type : String
            }
        ],
        videos : [
            {
                type : String
            }
        ],
        audios : [
            {
                type : String
            }
        ]
    },
reviews : [
    {
        type : Schema.Types.ObjectId,
        ref : 'Review',
    }
]
}
const Location = db.getModel(locationSchema, 'Location');
module.exports = Location;