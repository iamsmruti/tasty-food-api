import mongoose from "mongoose";

const FoodSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        default: [],
        required: true
    },
    video: {
        type: String,
        required: true
    },
    faqs: {
        type: Array,
        default: [],
        required: true
    },
    instructions: {
        type: Array,
        default: [],
        required: true
    },
    blogs: {
        type: Array,
        default: [],
        required: true
    }
})

const Food = mongoose.model('Food', FoodSchema)
export default Food