import { Pool } from "pg";

const pool = new Pool({
  user: "tu_usuario", // Usuario de PostgreSQL
  host: "localhost", // Dirección del servidor
  database: "tu_base_de_datos", // Nombre de la base de datos
  password: "tu_contraseña", // Contraseña del usuario
  port: 5432, // Puerto de PostgreSQL (por defecto es 5432)
});

export default pool;

//fucnion de como se utiliza el pool
/*
import pool from "./db";

const getUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log(result.rows);
  } catch (error) {
    console.error("Error ejecutando la consulta:", error);
  }
};

getUsers();
*/
