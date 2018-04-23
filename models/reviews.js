const Schema = require('mongoose').Schema;

const db = require('../config/db');
const reviewSchema = {
    location : {
       type : Schema.Types.ObjectId,
        ref : 'Location'
    }, 
    date : Date,
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
    totalReviews : Number,
    stars : Number, 
}
const Review = db.getModel(reviewSchema, 'Review');
module.exports = Review;