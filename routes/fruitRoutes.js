const express = require('express')
const router = express.Router()

const fruitController = require("../controllers/fruitController")


router.get('/all', fruitController.getAllFruits)

router.get('/names', fruitController.getAllFruitNames)

router.get('/names/:id', fruitController.getFruitNameFromID)

router.get('/calories', fruitController.getAllFruitCalories)

router.get('/calories/:id', fruitController.getFruitCaloriesFromID)

router.get('/:id', fruitController.getFruitByID)

module.exports = router