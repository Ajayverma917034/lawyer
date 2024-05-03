import mongoose from 'mongoose';
// Define schema
const hearingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hearingType: {
        type: String,
        required: true
    },
    hearingDate: {
        type: Date,
        required: true
    },
    hearingTime: {
        type: String,
        required: true
    },
    assignee: {
        type: String,
        required: true,
    },
    timeSpent: {
        type: String,
        required: true,
    },
})

// Create model
const Hearing = mongoose.model('Hearing', hearingSchema);

export default Hearing
