import mongoose from "mongoose";


const notificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    read: { type: Boolean, default: false },
})