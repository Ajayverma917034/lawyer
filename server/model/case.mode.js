import mongoose from 'mongoose';
// Define schema
const caseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    practiceArea: {
        type: String,
        required: true
    },
    arrivalDate: {
        type: Date,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    clientPosition: {
        type: String
    },
    description: {
        type: String
    },
    refNumber: {
        type: String
    }
});

// Create model
const Case = mongoose.model('Case', caseSchema);

export default Case
