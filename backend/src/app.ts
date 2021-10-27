import express from 'express';
import cors from 'cors';
//Routes
import userRoutes from './routes/users.routes';
import operationsRoutes from './routes/operations.routes';
import build from './routes/build.routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(build);
app.use(userRoutes);
app.use(operationsRoutes);

export default app;