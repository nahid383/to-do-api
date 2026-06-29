import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001

//Middleware
app.use(cors());
app.use(express.json());

//Test Route
app.get("/", (req, res) => {
    res.send("To-do Nahid API is running");
});

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



