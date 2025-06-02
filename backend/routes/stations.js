const express = require('express');
const {
  getStations,
  createStation,
  updateStation,
  deleteStation
} = require('../controllers/stationController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, getStations);
router.post('/', auth, createStation);
router.put('/:id', auth, updateStation);
router.delete('/:id', auth, deleteStation);

module.exports = router;
