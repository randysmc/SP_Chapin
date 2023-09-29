const { Router } = require("express");
//const pool = require('../db');

const {
  getAllEmployed,
  getEmployed,
  createEmployed,
  /*deleteEmployed,
  updateEmployed,*/
} = require("../controllers/employed.controller");

const router = Router();

//crea nueva ruta
//metodos http get, post, put, delete

router.get("/employed", getAllEmployed);

router.get("/employed/:id", getEmployed);

router.post("/employed", createEmployed);

/*router.delete("/employed/:id", deleteEmployed);

router.put("/employed/:id", updateEmployed);
//para exportar la ruta*/




module.exports = router;
