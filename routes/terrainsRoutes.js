const express = require('express');
const router = express.Router();
const terrainsController = require('../controllers/terrainsController');

router.get('/', terrainsController.getAllTerrains);
router.get('/:id', terrainsController.getTerrainById);
router.post('/', terrainsController.createTerrain);
router.put('/:id', terrainsController.updateTerrain);
router.delete('/:id', terrainsController.deleteTerrain);

module.exports = router;
