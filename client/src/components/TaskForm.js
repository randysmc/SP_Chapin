/*Se utiliza para ordenar elementos dentro de la pantalla */
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
/**
 * Nos ayuda para capturar un estado
 */
import { useState, useEffect } from "react";

export default function TaskForm() {
  /**
   * guardamos los datos
   */
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  /*
   *Para capturar un evento utilizamos handleSubmit
   */
  const handleSubmit = async (e) => {
    /**
     * preventetDefault cancela el refresh que hace el formulario
     */
    e.preventDefault();
    setLoading(true);
    //console.log('submit');
    //console.log(task)
    /**
     * funcion fetch que pide la dirección
     */
    const res = await fetch("http://localhost:4000/tasks", {
      //objeto para indicar hacia donde, datos y formato
      method: "POST",
      body: JSON.stringify(task),
      headers: {'Content-Type': 'aplication/json'},
    });

    const data = await res.json();
    console.log(data);
    setLoading(false);
    navigate('/')
  };

 

  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value)
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "blueviolet", padding: "1rem" }}
        >
          <Typography variant="5" textAlign="center" color="green">
            Create Task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Escribe tu nombre"
                placeholder="testing"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="title"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Contraseña"
                /**
                 * multiline
                 * rows={4} para que sea multilinea
                 */
                sx={{ display: "block", margin: ".5rem 0" }}
                name="description"
                onChange={handleChange}
                inputProps={{ style: { color: "green" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button variant="contained" color="secondary" type="submit"
              disabled={!task.title || !task.description}>
                {loading ? <CircularProgress
                color="inherit"
                  size={24}
                /> : 'Create'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
