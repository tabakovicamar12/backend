import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('MongoDB povezan');
  } catch (error) {
    console.error('Napaka pri povezavi na MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;