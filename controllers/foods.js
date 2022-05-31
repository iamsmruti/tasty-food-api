import Food from '../models/Food.js'

export const getAllFoodItems = async (req, res) => {
    const foods = await Food.find({})
    res.status(200).json(foods)
}

export const getFoodItem = async (req, res) => {
    const id = req.params.id
    const foodItem = await Food.findById(id)

    res.status(200).json(foodItem)
}

export const createFoodItem = async (req, res) => {
    const item = req.body
    const newItem = new Food(item)
    try{
        await newItem.save()
        res.status(200).json(newItem)
    } catch(err) {
        res.status(404).json(err.message)
    }

}

export const updateFoodItem = async (req, res) => {
    const id = req.params.id
    const item = req.body
    try {
        const newItem = await Food.findByIdAndUpdate(id, item)
        res.status(200).json(newItem)
    } catch (err) {
        res.status(404).json(err.message)
    }
}

