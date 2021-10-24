import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes';
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(userRoutes);

export default app;