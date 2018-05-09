
const express = require('express')
,router = express.Router()
,Location = require('../models/locations');
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



/**
 * @api {get} /locations Get all locations
 * @apiDescription Contains all the locations added
 * @apiGroup Locations
 * @apiSuccess {String} name Location Location name
 * @apiSuccess {String} details Location Location description
 * @apiSuccess {Object} coordinates Location Coordinates of the location
 * @apiSuccess {String} cover Location Cover image/media for location
 * @apiSuccess {Object} media Location Media files associated with the location
 * @apiSuccess {Object} reviews Location Reviews associated with the location
 * @apiSuccess {Number} totalReviews Location Total number of reviews for the location
 * @apiSuccess {Number} stars Location Aggregate stars for the location

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "name" : "Location name"
 * "details" : "A quick brown fox jumps over a lazy dog",
 * "coordinates" : {
 * "lat": 77.77,
 * "lng": 77.77
 *  },
 * "cover" : "file path to cover",
 * "duration" : "2 hrs",
 * "media" : {
        "photos" : ['/photos/photo.jpg'],
        "videos" : ['/photos/video.mp4'],
        "audios" : ['/photos/audio.mp3]
    },
 * "reviews" : ["407f1f77bcf86cd79b439013", "307f1f77bcf86cd79b43901b"],
 * "totalReviews" :10,
 * "stars" : 4.5,
 * "added" : "507f1f77bcf86cd799439011"
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get('/', (req,res) => {
    Location.find().then((err,location)=>{
        if (err) console.log(err);
        err ? res.send(err) : res.send(location);
    })
})
/**
 * @api {get} /locations/:id Get locations based on id
 * @apiDescription Fetches location with given id
 * @apiGroup Locations
 * @apiParam {id} id Location Location id
 * @apiSuccess {String} name Location Location name
 * @apiSuccess {String} details Location Location description
 * @apiSuccess {Object} coordinates Location Coordinates of the location
 * @apiSuccess {String} cover Location Cover image/media for location
 * @apiSuccess {Object} media Location Media files associated with the location
 * @apiSuccess {Object} reviews Location Reviews associated with the location
 * @apiSuccess {Number} totalReviews Location Total number of reviews for the location
 * @apiSuccess {Number} stars Location Aggregate stars for the location

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "name" : "Location name"
 * "details" : "A quick brown fox jumps over a lazy dog",
 * "coordinates" : {
 * "lat": 77.77,
 * "lng": 77.77
 *  },
 * "cover" : "file path to cover",
 * "duration" : "2 hrs",
 * "media" : {
        "photos" : ['/photos/photo.jpg'],
        "videos" : ['/photos/video.mp4'],
        "audios" : ['/photos/audio.mp3]
    },
 * "reviews" : ["407f1f77bcf86cd79b439013", "307f1f77bcf86cd79b43901b"],
 * "totalReviews" :10,
 * "stars" : 4.5,
 * "added" : "507f1f77bcf86cd799439011"
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/id/:id', (req,res) => {
    Location.findOne({
        '_id': req.params.id
    }, (err, location) => {
        err ? res.send(err) : res.send(location);
    })
})
/**
 * @api {get} /locations/name/:name 
 * @apiDescription Get a location with name that matches given parameter
 * @apiGroup Locations
 * @apiParam {String} name Location Location name
 * @apiSuccess {String} name Location Location name
 * @apiSuccess {String} details Location Location description
 * @apiSuccess {Object} coordinates Location Coordinates of the location
 * @apiSuccess {String} cover Location Cover image/media for location
 * @apiSuccess {Object} media Location Media files associated with the location
 * @apiSuccess {Object} reviews Location Reviews associated with the location
 * @apiSuccess {Number} totalReviews Location Total number of reviews for the location
 * @apiSuccess {Number} stars Location Aggregate stars for the location

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "name" : "Location name"
 * "details" : "A quick brown fox jumps over a lazy dog",
 * "coordinates" : {
 * "lat": 77.77,
 * "lng": 77.77
 *  },
 * "cover" : "file path to cover",
 * "duration" : "2 hrs",
 * "media" : {
        "photos" : ['/photos/photo.jpg'],
        "videos" : ['/photos/video.mp4'],
        "audios" : ['/photos/audio.mp3]
    },
 * "reviews" : ["407f1f77bcf86cd79b439013", "307f1f77bcf86cd79b43901b"],
 * "totalReviews" :10,
 * "stars" : 4.5,
 * "added" : "507f1f77bcf86cd799439011"
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/name/:name', (req,res) => {
    const reg = new RegExp(req.params.name, 'i');
    Location.find({
        'name': reg
    }).then((err,location)=>{
        err ? res.send(err) : res.send(location);
    })
})
/**
 * @api {post} /locations Add new location
 * @apiDescription Add a new location based on input data
 * @apiGroup Locations
 * @apiParam {String} name Location Location name
 * @apiParam {String} details Location Location description
 * @apiParam {Object} coordinates Location Coordinates of the location
 * @apiParam {String} cover Location Cover image/media for location
 * @apiParam {Object} media Location Media files associated with the location
 * @apiParam {Object} reviews Location Reviews associated with the location
 * @apiParam {Number} totalReviews Location Total number of reviews for the location
 * @apiParam {Number} stars Location Aggregate stars for the location
 * @apiParamExample {json} new Location
 * {
 * "name" : "Location name"
 * "details" : "A quick brown fox jumps over a lazy dog",
 * "coordinates" : {
 * "lat": 77.77,
 * "lng": 77.77
 *  },
 * "cover" : "file path to cover",
 * "duration" : "2 hrs",
 * "media" : {
        "photos" : ['/photos/photo.jpg'],
        "videos" : ['/photos/video.mp4'],
        "audios" : ['/photos/audio.mp3]
    },
 * "reviews" : ["407f1f77bcf86cd79b439013", "307f1f77bcf86cd79b43901b"],
 * "totalReviews" :10,
 * "stars" : 4.5,
 * "added" : "507f1f77bcf86cd799439011"
    }
 * @apiSuccess {String} name Location Location name
 * @apiSuccess {String} details Location Location description
 * @apiSuccess {Object} coordinates Location Coordinates of the location
 * @apiSuccess {String} cover Location Cover image/media for location
 * @apiSuccess {Object} media Location Media files associated with the location
 * @apiSuccess {Object} reviews Location Reviews associated with the location
 * @apiSuccess {Number} totalReviews Location Total number of reviews for the location
 * @apiSuccess {Number} stars Location Aggregate stars for the location

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "name" : "Location name"
 * "details" : "A quick brown fox jumps over a lazy dog",
 * "coordinates" : {
 * "lat": 77.77,
 * "lng": 77.77
 *  },
 * "cover" : "file path to cover",
 * "duration" : "2 hrs",
 * "media" : {
        "photos" : ['/photos/photo.jpg'],
        "videos" : ['/photos/video.mp4'],
        "audios" : ['/photos/audio.mp3]
    },
 * "reviews" : ["407f1f77bcf86cd79b439013", "307f1f77bcf86cd79b43901b"],
 * "totalReviews" :10,
 * "stars" : 4.5,
 * "added" : "507f1f77bcf86cd799439011"
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post('/', upload.single('file'), (req,res,next) => {
    const picStr = 'images/'+req.file.filename;
    req.body.media={
        "photos" : [picStr],
        "videos" : [],
        "audios" : []
    }
    req.body.cover = picStr;
    next();
})
router.use('/', (req,res,next) =>{
  const coords = JSON.parse(req.body.coords);
  const lat = coords.lat;
  const lng = coords.lng;
  req.body.coordinates = {
    lat: lat,
    lng: lng
  }
  next();
})
router.use('/', (req,res,next) => {
    req.body.reviews=[];
    req.body.added = "507f1f77bcf8cde799439011";
    next();
})
router.use('/', (req,res,next) => {
    Location.create(req.body).then((err,location) => {
        res.redirect('back').json(req.body);
    })
})

/**
 * @api {post} /locations/id Update a location
 * @apiDescription Update a location based on input data and provided id
 * @apiGroup Locations
 * @apiParam {id} id Location Location id to update
 * @apiParam {String} name Location Location name
 * @apiParam {String} details Location Location description
 * @apiParam {Object} coordinates Location Coordinates of the location
 * @apiParam {String} cover Location Cover image/media for location
 * @apiParam {Object} media Location Media files associated with the location
 * @apiParam {Object} reviews Location Reviews associated with the location
 * @apiParam {Number} totalReviews Location Total number of reviews for the location
 * @apiParam {Number} stars Location Aggregate stars for the location
 * @apiParamExample {json} new Location
 * {
 * "name" : "Location name"
 * "details" : "A quick brown fox jumps over a lazy dog",
 * "coordinates" : {
 * "lat": 77.77,
 * "lng": 77.77
 *  },
 * "cover" : "file path to cover",
 * "duration" : "2 hrs",
 * "media" : {
        "photos" : ['/photos/photo.jpg'],
        "videos" : ['/photos/video.mp4'],
        "audios" : ['/photos/audio.mp3]
    },
 * "reviews" : ["407f1f77bcf86cd79b439013", "307f1f77bcf86cd79b43901b"],
 * "totalReviews" :10,
 * "stars" : 4.5,
 * "added" : "507f1f77bcf86cd799439011"
    }
 * @apiSuccess {String} name Location Location name
 * @apiSuccess {String} details Location Location description
 * @apiSuccess {Object} coordinates Location Coordinates of the location
 * @apiSuccess {String} cover Location Cover image/media for location
 * @apiSuccess {Object} media Location Media files associated with the location
 * @apiSuccess {Object} reviews Location Reviews associated with the location
 * @apiSuccess {Number} totalReviews Location Total number of reviews for the location
 * @apiSuccess {Number} stars Location Aggregate stars for the location

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "name" : "Location name"
 * "details" : "A quick brown fox jumps over a lazy dog",
 * "coordinates" : {
 * "lat": 77.77,
 * "lng": 77.77
 *  },
 * "cover" : "file path to cover",
 * "duration" : "2 hrs",
 * "media" : {
        "photos" : ['/photos/photo.jpg'],
        "videos" : ['/photos/video.mp4'],
        "audios" : ['/photos/audio.mp3]
    },
 * "reviews" : ["407f1f77bcf86cd79b439013", "307f1f77bcf86cd79b43901b"],
 * "totalReviews" :10,
 * "stars" : 4.5,
 * "added" : "507f1f77bcf86cd799439011"
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/:id', (req,res) => {
    Location.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, location) => {
        err ? res.send(err) : res.send(location);
    })})

/**
* @api {delete} /locations/:id Remove a location
* @apiDescription Remove the location with given ID
* @apiGroup Locations
* @apiParam {id} id Locations ID to delete
* @apiSuccessExample {json} Success
*    HTTP/1.1 200 OK
*  {
*  'message': 'Successfully deleted',
*  'id' : '507f1f77bcf86cd799439011'
* }
* @apiErrorExample {json} Delete error
*    HTTP/1.1 500 Internal Server Error
*/  
router.delete('/:id', (req,res) => {
    Location.findByIdAndRemove(req.params.id, (err, location) => {
        const msg = {
            message: 'Deleted',
            id: location.id
        }
        err ? res.send(err) : res.send(msg);
    })
})
module.exports = router;
