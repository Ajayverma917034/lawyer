import mongoose from "mongoose";
const reminderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reminderDate: {
        type: Date,
        required: true
    },
    reminderTime: {
        type: String,
        required: true
    },
    repeat: {
        type: String
    },
    recipients: {
        type: String
    },
    summary: {
        type: String
    }
});

const Reminder = mongoose.model('Reminder', reminderSchema);
export default Reminder;