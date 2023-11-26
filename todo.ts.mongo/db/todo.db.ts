import { UUID } from "mongodb";
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const todoSchema = new Schema({
    userId: {
        type: UUID
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


export const User = mongoose.model('User', userSchema);
export const Todo = mongoose.model('Todo', todoSchema);


