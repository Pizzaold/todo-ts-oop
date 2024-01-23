import express, {request, response, NextFunction} from 'express';
import todoRoutes from './routes/todos';

const app = express();

app.use('/todos', todoRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
    res.json({message: err.message});
});

app.listen(3000, () => {
    console.log('Server is running');
});