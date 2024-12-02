// Importar dependencias
import express from 'express';  // Usar import en lugar de require
import cors from 'cors';
import pool from './config/db.js';  // Asegúrate de que el archivo 'db.js' esté exportado correctamente

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta GET para obtener los posts
app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);  // Corregir 'res,json' por 'res.json'
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    res.status(500).json({ error: 'Error al obtener los posts' });
  }
});

// Ruta POST para crear un nuevo post
app.post('/posts', async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *',
      [titulo, img, descripcion]
    );
    res.status(201).json(result.rows[0]);  // Corregir 'results' por 'result'
  } catch (error) {
    console.error('Error al crear post:', error);
    res.status(500).json({ error: 'Error al crear el post' });
  }
});

// Exportar app para usarlo en index.js
export default app;

