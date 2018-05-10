const express = require('express'),
    router = express.Router(),
    Review = require('../models/reviews'),
    Location = require('../models/locations');
    const bodyParser = require('body-parser');
    router.use(bodyParser.json());
    const multer=require('multer');
    const getFields=multer();

 /**
 * @api {get} /reviews Get all reviews
 * @apiDescription Contains all the reviews added
 * @apiGroup Reviews
 * @apiSuccess {Object} location Review Location associated with Review 
 * @apiSuccess {Date}  date  Review date of the review
 * @apiSuccess {Object} reviewer User User who posted the review
 * @apiSuccess {String} title Review Review title
 * @apiSuccess {String} review Review Review text content
 * @apiSuccess {Object} media  Review Media content associated with the review
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "date" : "2018-10-05T14:48:00.000Z",
 * "reviewer" : "407f1f77bcfb6cd7994390d6"
 * "title" : "Review title",
 * "review" : "a quick brown fox jumps over a lazy dog",
 * "media" : {
        "photos" : ["photos/photo.jpg"],
        "videos" : ["videos/video.mp4"],
        "audios" : ["audios/audios.mp3"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
 router.get('/', (req, res) => {
    Review.find().then((err, review) => {
        err ? res.send(err) : res.send(review);
    })
})
/**
 * @api {get} /reviews/:id Get review with given id
 * @apiDescription Returns review with given id
 * @apiGroup Reviews
 * @apiParam {id} id Review Review id to look 
 * @apiSuccess {Object} location Review Location associated with Review 
 * @apiSuccess {Date}  date  Review date of the review
 * @apiSuccess {Object} reviewer User User who posted the review
 * @apiSuccess {String} title Review Review title
 * @apiSuccess {String} review Review Review text content
 * @apiSuccess {Object} media  Review Media content associated with the review
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "date" : "2018-10-05T14:48:00.000Z",
 * "reviewer" : "407f1f77bcfb6cd7994390d6"
 * "title" : "Review title",
 * "review" : "a quick brown fox jumps over a lazy dog",
 * "media" : {
        "photos" : ["photos/photo.jpg"],
        "videos" : ["videos/video.mp4"],
        "audios" : ["audios/audios.mp3"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/:id', (req, res) => {
    Review.findOne({
        '_id': req.params.id
    }, (err, review) => {
        err ? res.send(err) : res.send(review);
    })
})
/**
 * @api {get} /reviews/location/:id Get all reviews associated with given location
 * @apiDescription Gets all reviews for given location
 * @apiGroup Reviews
 * @apiSuccess {Object} location Review Location associated with Review 
 * @apiSuccess {Date}  date  Review date of the review
 * @apiSuccess {Object} reviewer User User who posted the review
 * @apiSuccess {String} title Review Review title
 * @apiSuccess {String} review Review Review text content
 * @apiSuccess {Object} media  Review Media content associated with the review
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "date" : "2018-10-05T14:48:00.000Z",
 * "reviewer" : "407f1f77bcfb6cd7994390d6"
 * "title" : "Review title",
 * "review" : "a quick brown fox jumps over a lazy dog",
 * "media" : {
        "photos" : ["photos/photo.jpg"],
        "videos" : ["videos/video.mp4"],
        "audios" : ["audios/audios.mp3"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/location/:id', (req,res) => {
    Review.find({
        'location': req.params.id
    }, (err, reviews) => {
        err ? res.send(err) : res.send(reviews);
    })
})
/**
 * @api {get} /reviews/reviewer/id Get all reviews from provided user
 * @apiDescription Contains reviews by single user
 * @apiGroup Reviews
 * @apiSuccess {Object} location Review Location associated with Review 
 * @apiSuccess {Date}  date  Review date of the review
 * @apiSuccess {Object} reviewer User User who posted the review
 * @apiSuccess {String} title Review Review title
 * @apiSuccess {String} review Review Review text content
 * @apiSuccess {Object} media  Review Media content associated with the review
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "date" : "2018-10-05T14:48:00.000Z",
 * "reviewer" : "407f1f77bcfb6cd7994390d6"
 * "title" : "Review title",
 * "review" : "a quick brown fox jumps over a lazy dog",
 * "media" : {
        "photos" : ["photos/photo.jpg"],
        "videos" : ["videos/video.mp4"],
        "audios" : ["audios/audios.mp3"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/reviewer/:id', (req,res) => {
    Review.find({
        'reviewer': req.params.id
    }, (err, reviews) => {
        err ? res.send(err) : res.send(reviews);
    })
})
/**
 * @api {post} /reviews Get all reviews
 * @apiDescription Contains all the reviews added
 * @apiGroup Reviews
 * @apiParam {Object} location Review Location associated with Review 
 * @apiParam {Date}  date  Review date of the review
 * @apiParam {Object} reviewer User User who posted the review
 * @apiParam {String} title Review Review title
 * @apiParam {String} review Review Review text content
 * @apiParam {Object} media  Review Media content associated with the review
 * @apiParamExample {json} new review
 *  {
 * "location" : "507f1f77bcf86cd799439011"
 * "date" : "2018-10-05T14:48:00.000Z",
 * "reviewer" : "407f1f77bcfb6cd7994390d6"
 * "title" : "Review title",
 * "review" : "a quick brown fox jumps over a lazy dog",
 * "media" : {
        "photos" : ["photos/photo.jpg"],
        "videos" : ["videos/video.mp4"],
        "audios" : ["audios/audios.mp3"]
        }
    }
 * @apiSuccess {Object} location Review Location associated with Review 
 * @apiSuccess {Date}  date  Review date of the review
 * @apiSuccess {Object} reviewer User User who posted the review
 * @apiSuccess {String} title Review Review title
 * @apiSuccess {String} review Review Review text content
 * @apiSuccess {Object} media  Review Media content associated with the review
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "date" : "2018-10-05T14:48:00.000Z",
 * "reviewer" : "407f1f77bcfb6cd7994390d6"
 * "title" : "Review title",
 * "review" : "a quick brown fox jumps over a lazy dog",
 * "media" : {
        "photos" : ["photos/photo.jpg"],
        "videos" : ["videos/video.mp4"],
        "audios" : ["audios/audios.mp3"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/',getFields.any(), (req, res) => {
    console.log(req.body);
    Location.findByIdAndUpdate({
        _id: req.body.location
    }, {
        $inc: {
            totalReviews: +1
        }
    }).then(() => {
        Review.create(req.body).then((err, review) => {
            res.redirect('back');
        })
    })
    
})
/**
 * @api {post} /reviews/:id update a review
 * @apiDescription Contains all the reviews added
 * @apiGroup Reviews
 * @apiParam {Object} id Id of the review to update
 * @apiParam {Object} location Review Location associated with Review 
 * @apiParam {Date}  date  Review date of the review
 * @apiParam {Object} reviewer User User who posted the review
 * @apiParam {String} title Review Review title
 * @apiParam {String} review Review Review text content
 * @apiParam {Object} media  Review Media content associated with the review
 * @apiParamExample {json} new review
 *  {
 * "location" : "507f1f77bcf86cd799439011"
 * "date" : "2018-10-05T14:48:00.000Z",
 * "reviewer" : "407f1f77bcfb6cd7994390d6"
 * "title" : "Review title",
 * "review" : "a quick brown fox jumps over a lazy dog",
 * "media" : {
        "photos" : ["photos/photo.jpg"],
        "videos" : ["videos/video.mp4"],
        "audios" : ["audios/audios.mp3"]
        }
    }
 * @apiSuccess {Object} location Review Location associated with Review 
 * @apiSuccess {Date}  date  Review date of the review
 * @apiSuccess {Object} reviewer User User who posted the review
 * @apiSuccess {String} title Review Review title
 * @apiSuccess {String} review Review Review text content
 * @apiSuccess {Object} media  Review Media content associated with the review
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "date" : "2018-10-05T14:48:00.000Z",
 * "reviewer" : "407f1f77bcfb6cd7994390d6"
 * "title" : "Review title",
 * "review" : "a quick brown fox jumps over a lazy dog",
 * "media" : {
        "photos" : ["photos/photo.jpg"],
        "videos" : ["videos/video.mp4"],
        "audios" : ["audios/audios.mp3"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/:id', (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, review) => {
        err ? res.send(err) : res.send(review);
    })
})
/**
* @api {delete} /reviews/:id Remove a review
* @apiDescription Remove the review with given ID
* @apiGroup Reviews
* @apiParam {id} id Review ID to delete
* @apiSuccessExample {json} Success
*    HTTP/1.1 200 OK
*  {
*  'message': 'Successfully deleted',
*  'id' : '507f1f77bcf86cd799439011'
* }
* @apiErrorExample {json} Delete error
*    HTTP/1.1 500 Internal Server Error
*/
router.delete('/:id', (req, res) => {
    Location.findByIdAndUpdate({
        _id: req.body.location
    }, {
        $inc: {
            totalReviews: -1
        }
    }).then(() => {
        Review.findByIdAndRemove(req.params.id, (err, review) => {
            const response = {
                message: 'Successfully deleted',
                id: review.id
            };
            err ? res.send(err) : res.send(response);
        })
    })
});

module.exports = router;