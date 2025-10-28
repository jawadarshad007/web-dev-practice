const mongoose = require('mongoose');

// Always wrap in an async function to handle connection errors
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jawadarshad324_db_user:LGCbcCq8WdcHvDF5@cluster0.lbjzgxi.mongodb.net/myDataBase?retryWrites=true&w=majority&appName=Cluster0');
    
    console.log('✅ Connected to MongoDB successfully');
  } catch (err) {
    console.log('❌ MongoDB connection failed:', err.message);
  }
};

module.exports = connectDB;
