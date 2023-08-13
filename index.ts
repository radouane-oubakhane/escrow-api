import express from 'express';
import escrowsRouter from './routes/escrows';



const app = express();

app.use(express.json());
app.use('/escrows', escrowsRouter);



app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});


app.listen(8000, () => console.log('Server is running'));