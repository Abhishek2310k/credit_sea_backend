import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Function to connect to MongoDB
const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error('Error: MongoDB connection string (MONGO_URI) is missing in environment variables');
    throw new Error('MongoDB connection string (MONGO_URI) is missing in environment variables');
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB; 