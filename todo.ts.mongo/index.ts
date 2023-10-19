import express from "express";
import mongoose from "mongoose";
import authRoute from './route/auth.user';
import todoRoute from './route/todo';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/auth', authRoute);
app.use('/todo', todoRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

mongoose.connect('');

