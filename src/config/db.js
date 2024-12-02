// config/db.js
import pkg from 'pg';  // Importar el módulo completo de 'pg'
const { Pool } = pkg;  // Desestructurar 'Pool' del objeto importado

const { 
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME 
} = process.env;

const DB = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
   allowExitOnIdle: true,
});

export default DB;

