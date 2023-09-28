const jwt = require("jsonwebtoken");
const pool = require("../db");

const getAllTasks = async (req, res, next) => {
  try {
    const allTask = await pool.query("SELECT * FROM task");
    console.log(allTask);
    res.json(allTask.rows);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query("SELECT * FROM task WHERE id= $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: "task not found" });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
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
};

const updateTask = async (req, res, next) => {
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
};


const login =  async (req, res, next) => {
  const user = {
    nombre: "randy",
    correo: "randysmc@gmail.com",
    id: 1,
  }
  jwt.sign({user}, "secretkey", (err, token)=>{
    res.json({
      token
    })
  });
  //res.json(user);
};

/**
 * // Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }else{
      res.sendSatus(403)
    }
}
 * 
 */

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
  login,
};
