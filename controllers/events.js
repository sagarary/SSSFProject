
//Dependencies
const express = require('express')
    , router = express.Router()
    , Event = require('../models/events');
const multer= require('multer');
const getFields = multer();

/**
 * @api {get} /events Get all events
 * @apiDescription Contains all the events added
 * @apiGroup Events
 * @apiSuccess {Object} location Location Event location 
 * @apiSuccess {Object} organiser User Event organiser
 * @apiSuccess {String} name Event Event Name
 * @apiSuccess {String} description Event Event Description
 * @apiSuccess {Date} date Event Event Date
 * @apiSuccess {String} duration Event Event Duration
 * @apiSuccess {Object} invited Event Invited users and RSVP status
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["407f1f77bcf86cd799439013"],
        notGoing : ["307f1f77bcf86cd799439014"],
        noRSVP : ["207f1f77bcf86cd799439015"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */


router.get('/', (req, res) => {
    Event.find().then((err, events) => {
        err ? res.send(err) : res.send(events);
    })
})

/**
 * @api {get} /events/:id Lookup an event by ID
 * @apiDescription Find event with a given ID
 * @apiGroup Events
 * @apiParam {Object} id Events Event id to look for
 * @apiSuccess {Object} location Location Event location 
 * @apiSuccess {Object} organiser User Event organiser
 * @apiSuccess {String} name Event Event Name
 * @apiSuccess {String} description Event Event Description
 * @apiSuccess {Date} date Event Event Date
 * @apiSuccess {String} duration Event Event Duration
 * @apiSuccess {Object} invited Event Invited users and RSVP status
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["407f1f77bcf86cd799439013"],
        notGoing : ["307f1f77bcf86cd799439014"],
        noRSVP : ["207f1f77bcf86cd799439015"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get('/:id', (req, res) => {
    Event.findOne({
        '_id': req.params.id
    }, (err, event) => {
        err ? res.send(err) : res.send(event);
    })
})


/**
 * @api {get} /events/location/:id Get events for given location
 * @apiDescription Find events in a given location
 * @apiGroup Events
 * @apiParam {Object} id Events Location id to look for
 * @apiSuccess {Object} location Location Event location 
 * @apiSuccess {Object} organiser User Event organiser
 * @apiSuccess {String} name Event Event Name
 * @apiSuccess {String} description Event Event Description
 * @apiSuccess {Date} date Event Event Date
 * @apiSuccess {String} duration Event Event Duration
 * @apiSuccess {Object} invited Event Invited users and RSVP status
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["407f1f77bcf86cd799439013"],
        notGoing : ["307f1f77bcf86cd799439014"],
        noRSVP : ["207f1f77bcf86cd799439015"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/location/:id', (req, res) => {
    Event.find({
        'location': req.params.id
    }, (err, events) => {
        err ? res.send(err) : res.send(events);
    })
})


/**
 * @api {get} /events/name/:name Search for events with name
 * @apiDescription Lists all events that contain the given name
 * @apiGroup Events
 * @apiParam {String} name Events Event name to look for
 * @apiSuccess {Object} location Location Event location 
 * @apiSuccess {Object} organiser User Event organiser
 * @apiSuccess {String} name Event Event Name
 * @apiSuccess {String} description Event Event Description
 * @apiSuccess {Date} date Event Event Date
 * @apiSuccess {String} duration Event Event Duration
 * @apiSuccess {Object} invited Event Invited users and RSVP status
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["407f1f77bcf86cd799439013"],
        notGoing : ["307f1f77bcf86cd799439014"],
        noRSVP : ["207f1f77bcf86cd799439015"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get('/name/:name', (req, res) => {
    const reg = new RegExp(req.params.name, 'i');
    Event.find({
        'name': reg
    }, (err, events) => {
        err ? res.send(err) : res.send(events);
    })
})

/**
 * @api {get} /events/organiser/:id Get all events organised by an user
 * @apiDescription All active events organised by a user
 * @apiGroup Events
 * @apiParam {Object} id Events User id to look for
 * @apiSuccess {Object} location Location Event location 
 * @apiSuccess {Object} organiser User Event organiser
 * @apiSuccess {String} name Event Event Name
 * @apiSuccess {String} description Event Event Description
 * @apiSuccess {Date} date Event Event Date
 * @apiSuccess {String} duration Event Event Duration
 * @apiSuccess {Object} invited Event Invited users and RSVP status
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["407f1f77bcf86cd799439013"],
        notGoing : ["307f1f77bcf86cd799439014"],
        noRSVP : ["207f1f77bcf86cd799439015"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/organiser/:id', (req, res) => {
    Event.find({
        'organiser': req.params.id
    }, (err, events) => {
        err ? res.send(err) : res.send(events);
    })
})


/**
 * @api {post} /events Create new event
 * @apiDescription Creates new event based on provided data
 * @apiGroup Events
 * @apiParam {Object} location Location Event location 
 * @apiParam {Object} organiser User Event organiser
 * @apiParam {String} name Event Event Name
 * @apiParam {String} description Event Event Description
 * @apiParam {Date} date Event Event Date
 * @apiParam {String} duration Event Event Duration
 * @apiParam {Object} invited Event Invited users and RSVP status
 * @apiParamExample {json} new Event
 *  HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["4b7f1f77bcf86cd799439031"],
        notGoing : [],
        noRSVP : ["207f1f77bcf86cd799439015", "307f1f77bcf86cd799439014"]
        }
    }
 * @apiSuccess {Object} location Location Event location 
 * @apiSuccess {Object} organiser User Event organiser
 * @apiSuccess {String} name Event Event Name
 * @apiSuccess {String} description Event Event Description
 * @apiSuccess {Date} date Event Event Date
 * @apiSuccess {String} duration Event Event Duration
 * @apiSuccess {Object} invited Event Invited users and RSVP status
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["407f1f77bcf86cd799439013"],
        notGoing : [],
        noRSVP : ["207f1f77bcf86cd799439015", "307f1f77bcf86cd799439014"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/', getFields.any(),(req, res) => {
    req.body.date = new Date(req.body.date);
    console.log(req.body)
    Event.create(req.body).then((err, event) => {
        err ? res.send(err) : res.send(event)
    })
})

/**
 * @api {post} /events/:id Update event
 * @apiDescription Updates an event with given id based on provided data
 * @apiGroup Events
 * @apiParam {id} id Event Event Id to update
 * @apiParam {Object} location Location Event location 
 * @apiParam {Object} organiser User Event organiser
 * @apiParam {String} name Event Event Name
 * @apiParam {String} description Event Event Description
 * @apiParam {Date} date Event Event Date
 * @apiParam {String} duration Event Event Duration
 * @apiParam {Object} invited Event Invited users and RSVP status
 * @apiParamExample {json} new Event
 *  HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["4b7f1f77bcf86cd799439031"],
        notGoing : [],
        noRSVP : ["207f1f77bcf86cd799439015", "307f1f77bcf86cd799439014"]
        }
    }
 * @apiSuccess {Object} location Location Event location 
 * @apiSuccess {Object} organiser User Event organiser
 * @apiSuccess {String} name Event Event Name
 * @apiSuccess {String} description Event Event Description
 * @apiSuccess {Date} date Event Event Date
 * @apiSuccess {String} duration Event Event Duration
 * @apiSuccess {Object} invited Event Invited users and RSVP status
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "location" : "507f1f77bcf86cd799439011"
 * "organiser" : "4b7f1f77bcf86cd799439031",
 * "name" : "Event name"
 * "description" : "Event description",
 * "duration" : "2 hrs",
 * "date" : "2018-10-05T14:48:00.000Z"
 * invited : {
        going : ["407f1f77bcf86cd799439013"],
        notGoing : [],
        noRSVP : ["207f1f77bcf86cd799439015", "307f1f77bcf86cd799439014"]
        }
    }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/:id', (req, res) => {
    Event.create(req.body).then((err, event) => {
        err ? res.send(err) : res.send(event);
    })
})

/**
* @api {delete} /events/:id Remove an event
* @apiDescription Remove the event with given ID
* @apiGroup Events
* @apiParam {id} id Events ID to delete
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
    Event.findByIdAndRemove(req.params.id, (err, event) => {
        const msg = {
            message: 'Deleted',
            id: event.id
        }
        err ? res.send(err) : res.send(msg);
    })
})
module.exports = router;
