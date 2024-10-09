import express, { Express } from "express";
import dotenv from 'dotenv';
import connectDB from "./Database/Connect";
import loanRoutes from "./Routes/Loan";
import cors from 'cors';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://credit-sea-steel.vercel.app'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));
app.use('/api', loanRoutes);

// Use the PORT from environment variables or default to 4000
const PORT = process.env.PORT || 4000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
