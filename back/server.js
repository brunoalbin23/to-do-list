const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err.message);
    return;
  }
  console.log("Conectado a la base de datos MySQL.");
});

// Rutas
app.get("/", (req, res) => {
  res.send("Servidor corriendo...");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/tasks", (req, res) => {
    db.query("SELECT * FROM tasks", (err, results) => {
      if (err) {
        console.error("Error al obtener tareas:", err.message);
        res.status(500).send("Error al obtener tareas");
      } else {
        res.json(results);
      }
    });
  });

app.post("/tasks", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).send("La tarea no puede estar vacía.");
  }

  db.query("INSERT INTO tasks (task) VALUES (?)", [task], (err, result) => {
    if (err) {
      console.error("Error al agregar tarea:", err.message);
      res.status(500).send("Error al agregar tarea");
    } else {
      res.status(201).send("Tarea agregada exitosamente");
    }
  });
});

app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
  
    db.query("DELETE FROM tasks WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("Error al eliminar tarea:", err.message);
        res.status(500).send("Error al eliminar tarea");
      } else {
        res.send("Tarea eliminada exitosamente");
      }
    });
  });
  
