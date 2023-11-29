import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/config/modules/users/users.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/users',userRoutes)

const getAControler =(req: Request, res: Response) => {
    const a = 10;
    res.send(a);
  }
app.get('/', getAControler);

export default app;
