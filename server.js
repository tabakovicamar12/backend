import express from 'express';
import cors from 'cors';
import router from './src/routes/auth.routes.js';
import connectDB from './src/config/mongoose.config.js';
import dotenv from 'dotenv';
import swaggerRouter from './src/config/swagger.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/authService', router);
app.use('/api-docs', swaggerRouter);
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server teče na portu ${PORT}`);
});
