import express from 'express';
import dotenv from 'dotenv';
import routes from './Routes/routes.js';
import pool from './Models/dbConfig.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

//Middlewares 
app.use(cors());
app.use(express.json());
app.use(routes);


pool.connect()
.then(() => {
    console.log("Database Connected successfully");
})
.catch((err) => {
    console.log(err.message);
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})