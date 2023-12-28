const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

router.get('/', reservationsController.getAllReservations);
router.get('/:id', reservationsController.getReservationById);
router.post('/', reservationsController.createReservation);
router.delete('/:id', reservationsController.cancelReservation);

module.exports = router;
