import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
