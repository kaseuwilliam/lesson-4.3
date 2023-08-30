const express = require('express')
const router = express.Router()

const vegetableController = require('../controllers/vegetableController')

router.get('/', vegetableController.greetVegetableLovers)
router.post('/add',vegetableController.addVegetable)
router.get('/all', vegetableController.getAllVegetables)
router.get('/least', vegetableController.getVegetablesWithLeastCalories)
router.get('/most', vegetableController.getVegetablesWithMostCalories)

module.exports = router