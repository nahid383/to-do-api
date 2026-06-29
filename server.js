import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo.routes.js';

const app = express();
const PORT = 3001

//Middleware
app.use(cors());
app.use(express.json());

//Test Route
app.use('/', todoRoutes);

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



