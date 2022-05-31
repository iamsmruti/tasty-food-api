import Food from '../models/Food.js'

export const getAllFoodItems = async (req, res) => {
    try {
        const posts = await Food.find()

        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const getFoodItem = async (req, res) => {
    const id = req.params.id
    const Item = await Food.findById({_id: id})
    res.status(200).json(Item)
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
    const {_id} = req.params.id

    const Item = await Food.findById(_id)
    const updatedPost = await Food.findByIdAndUpdate(_id, Item, {new : true})

    res.json(updatedPost)
}
