import mongoose, { Schema }  from "mongoose";

export interface userInterface {
    name: string,
    password: string
}

interface todoInterface {
    userId: string,
    title: string,
    description: string,
    done: boolean
}

const userSchema = new Schema<userInterface>({
    name: String,
    password: String
});

const todoSchema = new Schema<todoInterface>({
    userId: String,
    title: String,
    description: String,
    done: Boolean
})


const User = mongoose.model<userInterface>('User', userSchema);
const Todo = mongoose.model<todoInterface>('Todo', todoSchema);


export default {
    User,
    Todo,
}

