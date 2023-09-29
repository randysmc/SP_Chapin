
const jwt = require("jsonwebtoken");
const pool = require("../db");

const getAllEmployed = async (req, res, next) => {
  try {
    const allEmployed = await pool.query("SELECT * FROM reg_empleado.Empleado");
    res.json(allEmployed.rows);
  } catch (error) {
    next(error);
  }
};

const getEmployed = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query("SELECT * FROM reg_empleado.Empleado WHERE DPI= $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: "empleado no encontrado" });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createEmployed = async (req, res, next) => {
  try {
    const { dpi, nombre, apellido, fecha_nacimiento, telefono, sucursal, salario, rol } = req.body;
    const result = await pool.query(
      "INSERT INTO reg_empleado.Empleado VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [dpi, nombre, apellido, fecha_nacimiento, telefono, sucursal, salario, rol]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

/*const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM task WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0)
      return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};*/

/*const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });
    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};*/


module.exports = {
  getAllEmployed,
  getEmployed,
  createEmployed,
  /*deleteEmployed,
  updateEmployed,*/
};
