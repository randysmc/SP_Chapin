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

import { Link, useNavigate, useParams } from "react-router-dom";
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

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

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
    if (editing) {
      const response =  await fetch(`http://localhost:4000/tasks/${params.id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await response.json()
      console.log(data);
    } else {
      const res = await fetch("http://localhost:4000/tasks", {
        //objeto para indicar hacia donde, datos y formato
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    }

    //const data = await res.json();
    //console.log(data);
    setLoading(false);
    navigate("/");
  };

  const handleChange = (e) => {
    //value = lo que se escribe, y el name el nombre de la var
    //console.log(e.target.name, e.target.value)
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const loadTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`);
    //almacenamos la informacion en un json
    const data = await res.json();
    setTask({ title: data.title, description: data.description });
    setEditing(true);
  };
  /**
   * Hacer validaciones al cargar el componente
   */
  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

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
            {editing ? "Edit Task": "Add task"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Escribe tu nombre"
                placeholder="testing"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="title"
                value={task.title}
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
                value={task.description}
                onChange={handleChange}
                inputProps={{ style: { color: "green" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={!task.title || !task.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Guardar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
