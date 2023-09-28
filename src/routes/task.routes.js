const { Router } = require("express");
//const pool = require('../db');

const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
  login,
} = require("../controllers/task.controller");

const router = Router();

//crea nueva ruta
//metodos http get, post, put, delete

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);
//para exportar la ruta


router.post("/api/login", login);



module.exports = router;
