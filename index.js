
import dotenv from 'dotenv';
import app from './src/app.js';  // Usamos import en lugar de require

dotenv.config();  // Cargar variables de entorno

const { PORT } = process.env;

app.listen(PORT || 3001, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});

