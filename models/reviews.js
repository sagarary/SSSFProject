const Schema = require('mongoose').Schema;
const db = require('../config/db');
const reviewSchema = {
    location : {
       type : Schema.Types.ObjectId,
        ref : 'Location'
    }, 
    date : {
        type: Date,
        default : Date.now()
    },
    reviewer : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }, 
    title : String,
    review : String,
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
   
}
const Review = db.getModel(reviewSchema, 'Review');
module.exports = Review;