import express from 'express'
const router = express.Router()

import {getAllFoodItems, getFoodItem, createFoodItem, updateFoodItem} from '../controllers/foods.js'

router.get('/', getAllFoodItems)
router.get('/:id', getFoodItem)
router.post('/create', createFoodItem)
router.put('/:id', updateFoodItem)

export default router