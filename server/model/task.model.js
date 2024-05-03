import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    taskType: { type: String, required: true },
    assignTo: { type: String, required: true },
    dueDate: { type: Date, required: true },
    description: { type: String, required: true },
    matterRelation: { type: String, required: true },
    relatedDocument: { type: [], required: true }
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;