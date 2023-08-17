import express from 'express';
import mongoose from 'mongoose';
import escrowsRouter from './routes/escrows';
import cors from 'cors';

// Connect to MongoDB
const MONGO_URI = 'mongodb://localhost:27017/escrow';

async function connectToMongoDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

connectToMongoDB();

 

// App setup
const PORT = 8000;
const app = express();


app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PATCH'],
    })
);

app.use(express.json());
app.use('/escrows', escrowsRouter);


app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});




app.listen(PORT, () => console.log('Server is running on port ', PORT));