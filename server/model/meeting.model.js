import mongoose from "mongoose";
const meetingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    relatedMatter: {
        type: []
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    meetingType: {
        type: String
    }
});

const Meeting = mongoose.model('Meeting', meetingSchema);
export default Meeting;