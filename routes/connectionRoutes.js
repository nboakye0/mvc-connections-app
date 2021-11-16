const express = require('express');
const controller = require('../controllers/connectionController');
const {isLoggedIn, isHost} = require('../middlewares/auth')

const router = express.Router();

//GET /connections: display all the connections to the user
router.get('/', controller.index);

//GET /connections/new: display form to create new connection
router.get('/new', isLoggedIn, controller.new);

//POST /connections: create new connection
router.post('/', isLoggedIn, controller.create);

//GET /connections/:id: display connection page
router.get('/:id', controller.show);

//GET /connections/:id/edit: send html form to edit the connection
router.get('/:id/edit', isLoggedIn, isHost, controller.edit);

//PUT /connections/:id: update the connection
router.put('/:id', isLoggedIn, isHost, controller.update);

//DELETE /connections/:id: delete the connection
router.delete('/:id', isLoggedIn, isHost, controller.delete);

module.exports = router;