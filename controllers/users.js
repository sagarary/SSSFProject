const express = require('express'),
    router = express.Router(),
    crypto = require('crypto-js'),
    bcrypt = require('bcrypt')
    SALT_FACTOR=10,
    User = require('../models/users');

router.get('/', (req, res) => {
    res.render('user');
})
/**
 * @api {get} /users/list Lists all users
 * @apiDescription List of all the users
 * @apiGroup Users
 * @apiSuccess {String} username User Username
 * @apiSuccess {String} firstName User First Name
 * @apiSuccess {String} lastName User Last Name
 * @apiSuccess {String} email User Email
 * @apiSuccess {String} password User Password
 * @apiSuccess {Object} address User Address of the user
 * @apiSuccess {Date} lastLogin  User Last login date
 * @apiSuccess {Object} connections  User Users connected with the user
 * @apiSuccess {Object} events  User Events associated with the user
 * @apiSuccess {Object} reviews by the user User Reviews by the user

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "username": "username",
 * "firstName" : "firstname",
 * "lastName" : "lastname",
 * "email" : "email@mail.mail",
 * "password" : "sajdhsdhjkas",
 * "address" :{
 * "country" : "country",
 * "city" : "city",
 * "zip" : "123",
 * },
 * "lastLogin" : "2018-10-05T14:48:00.000Z",
 * "connections" : ["4b7f1f77bcfb6cd79943954d"],
 * "events" : ["407e1f77bcfb6cd7994590df"],
 * reviews : ["07f1f77bcfb6cd79943910e"],
 * }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/list', (req, res) => {
    User.find().then((err, users) => {
        err ? res.send(err) : res.send(users);
    })
})
/**
 * @api {get} /users/userid/:id Get user with given id
 * @apiDescription Get the user with provided id
 * @apiGroup Users
 * @apiParam {Object} id User user id
 * @apiSuccess {String} username User Username
 * @apiSuccess {String} firstName User First Name
 * @apiSuccess {String} lastName User Last Name
 * @apiSuccess {String} email User Email
 * @apiSuccess {String} password User Password
 * @apiSuccess {Object} address User Address of the user
 * @apiSuccess {Date} lastLogin  User Last login date
 * @apiSuccess {Object} connections  User Users connected with the user
 * @apiSuccess {Object} events  User Events associated with the user
 * @apiSuccess {Object} reviews by the user User Reviews by the user

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "username": "username",
 * "firstName" : "firstname",
 * "lastName" : "lastname",
 * "email" : "email@mail.mail",
 * "password" : "sajdhsdhjkas",
 * "address" :{
 * "country" : "country",
 * "city" : "city",
 * "zip" : "123",
 * },
 * "lastLogin" : "2018-10-05T14:48:00.000Z",
 * "connections" : ["4b7f1f77bcfb6cd79943954d"],
 * "events" : ["407e1f77bcfb6cd7994590df"],
 * reviews : ["07f1f77bcfb6cd79943910e"],
 * }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/userID/:id', (req, res) => {
    console.log(req.params.id)
    User.findOne({
        '_id': req.params.id
    }, (err, user) => {
        err ? res.send(err) : res.send(user);
    })
})
/**
 * @api {get} /user/user/:name Get user with given name
 * @apiDescription Get user with the parameter string in username,firstname or lastname
 * @apiGroup Users
 * @apiParam {String} name
 * @apiSuccess {String} username User Username
 * @apiSuccess {String} firstName User First Name
 * @apiSuccess {String} lastName User Last Name
 * @apiSuccess {String} email User Email
 * @apiSuccess {String} password User Password
 * @apiSuccess {Object} address User Address of the user
 * @apiSuccess {Date} lastLogin  User Last login date
 * @apiSuccess {Object} connections  User Users connected with the user
 * @apiSuccess {Object} events  User Events associated with the user
 * @apiSuccess {Object} reviews by the user User Reviews by the user

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "username": "username",
 * "firstName" : "firstname",
 * "lastName" : "lastname",
 * "email" : "email@mail.mail",
 * "password" : "sajdhsdhjkas",
 * "address" :{
 * "country" : "country",
 * "city" : "city",
 * "zip" : "123",
 * },
 * "lastLogin" : "2018-10-05T14:48:00.000Z",
 * "connections" : ["4b7f1f77bcfb6cd79943954d"],
 * "events" : ["407e1f77bcfb6cd7994590df"],
 * reviews : ["07f1f77bcfb6cd79943910e"],
 * }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/user/:name', (req, res) => {
    const reg = new RegExp(req.params.name, 'i');
    User.find({
        '$or': [{
                'username': reg
            },
            {
                firstName: reg
            },
            {
                lastName: reg
            }
        ]
    }).then((err, users) => {
        err ? res.send(err) : res.send(users);
    })
})

/**
 * @api {post} /users Add new user
 * @apiDescription Add a new user
 * @apiGroup Users
 * @apiParam {String} username User Username
 * @apiParam {String} firstName User First Name
 * @apiParam {String} lastName User Last Name
 * @apiParam {String} email User Email
 * @apiParam {String} password User Password
 * @apiParam {Object} address User Address of the user
 * @apiParam {Date} lastLogin  User Last login date
 * @apiParam {Object} connections  User Users connected with the user
 * @apiParam {Object} events  User Events associated with the user
 * @apiParam {Object} reviews by the user User Reviews by the user
 * @apiParamExample {json} new user
 * {
 * "username": "username",
 * "firstName" : "firstname",
 * "lastName" : "lastname",
 * "email" : "email@mail.mail",
 * "password" : "sajdhsdhjkas",
 * "address" :{
 * "country" : "country",
 * "city" : "city",
 * "zip" : "123",
 * },
 * "lastLogin" : "2018-10-05T14:48:00.000Z",
 * "connections" : ["4b7f1f77bcfb6cd79943954d"],
 * "events" : ["407e1f77bcfb6cd7994590df"],
 * reviews : ["07f1f77bcfb6cd79943910e"],
 * }
 * @apiSuccess {String} username User Username
 * @apiSuccess {String} firstName User First Name
 * @apiSuccess {String} lastName User Last Name
 * @apiSuccess {String} email User Email
 * @apiSuccess {String} password User Password
 * @apiSuccess {Object} address User Address of the user
 * @apiSuccess {Date} lastLogin  User Last login date
 * @apiSuccess {Object} connections  User Users connected with the user
 * @apiSuccess {Object} events  User Events associated with the user
 * @apiSuccess {Object} reviews by the user User Reviews by the user

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "username": "username",
 * "firstName" : "firstname",
 * "lastName" : "lastname",
 * "email" : "email@mail.mail",
 * "password" : "sajdhsdhjkas",
 * "address" :{
 * "country" : "country",
 * "city" : "city",
 * "zip" : "123",
 * },
 * "lastLogin" : "2018-10-05T14:48:00.000Z",
 * "connections" : ["4b7f1f77bcfb6cd79943954d"],
 * "events" : ["407e1f77bcfb6cd7994590df"],
 * reviews : ["07f1f77bcfb6cd79943910e"],
 * }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/', (req, res) => {
    req.body.lastLogin = Date.now();
    req.body.password = bcrypt.hashSync(req.body.password, 12 )
          User.create(req.body).then((err, user) => {
              err ? res.send(err) : res.send(user);
          })
})
/**
 * @api {post} /users/:id Update user with given id
 * @apiDescription Update user details, connections, events and reviews
 * @apiGroup Users
 * @apiParam {Object} id User id to update
 * @apiParam {String} username User Username
 * @apiParam {String} firstName User First Name
 * @apiParam {String} lastName User Last Name
 * @apiParam {String} email User Email
 * @apiParam {String} password User Password
 * @apiParam {Object} address User Address of the user
 * @apiParam {Date} lastLogin  User Last login date
 * @apiParam {Object} connections  User Users connected with the user
 * @apiParam {Object} events  User Events associated with the user
 * @apiParam {Object} reviews by the user User Reviews by the user
 * @apiParamExample {json} new user
 * {
 * "username": "username",
 * "firstName" : "firstname",
 * "lastName" : "lastname",
 * "email" : "email@mail.mail",
 * "password" : "sajdhsdhjkas",
 * "address" :{
 * "country" : "country",
 * "city" : "city",
 * "zip" : "123",
 * },
 * "lastLogin" : "2018-10-05T14:48:00.000Z",
 * "connections" : ["4b7f1f77bcfb6cd79943954d"],
 * "events" : ["407e1f77bcfb6cd7994590df"],
 * reviews : ["07f1f77bcfb6cd79943910e"],
 * }
 * @apiSuccess {String} username User Username
 * @apiSuccess {String} firstName User First Name
 * @apiSuccess {String} lastName User Last Name
 * @apiSuccess {String} email User Email
 * @apiSuccess {String} password User Password
 * @apiSuccess {Object} address User Address of the user
 * @apiSuccess {Date} lastLogin  User Last login date
 * @apiSuccess {Object} connections  User Users connected with the user
 * @apiSuccess {Object} events  User Events associated with the user
 * @apiSuccess {Object} reviews by the user User Reviews by the user

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 * "username": "username",
 * "firstName" : "firstname",
 * "lastName" : "lastname",
 * "email" : "email@mail.mail",
 * "password" : "sajdhsdhjkas",
 * "address" :{
 * "country" : "country",
 * "city" : "city",
 * "zip" : "123",
 * },
 * "lastLogin" : "2018-10-05T14:48:00.000Z",
 * "connections" : ["4b7f1f77bcfb6cd79943954d"],
 * "events" : ["407e1f77bcfb6cd7994590df"],
 * reviews : ["07f1f77bcfb6cd79943910e"],
 * }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/:id', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 12 )
    User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, user) => {
        err ? res.send(err) : res.send(user);
    })
})
/**
* @api {delete} /users/:id Remove a user
* @apiDescription Remove the user with given ID
* @apiGroup Users
* @apiParam {id} id User ID to delete
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
    User.findByIdAndRemove(req.params.id, (err, user) => {
        const msg = {
            message: 'Deleted',
            id: user.id
        }
        err ? res.send(err) : res.send(msg);
    })
})


module.exports = router;
