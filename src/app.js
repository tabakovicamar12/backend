import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './src/config/mongoose.config.js';
import authRoutes from './src/routes/auth.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './src/config/swagger.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/authService', authRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server teče na portu ${PORT}`);
});
