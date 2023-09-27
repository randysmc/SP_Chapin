import { useEffect, useState } from "react";
//para crear variables o estados utilizamos una funcion llamada useEF
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const [ tasks, setTasks] = useState([]);

  /**
   * Nos permite cargar los datos
   */
  const navigate = useNavigate()

  const loadTasks = async () => {
    try {
      const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * para precargar los datos
   * recibe una funcion y un arreglo como parametros
   * no permite el async await
   */

  useEffect(() => {
    loadTasks();
  }, []);


  const handleDelete = async (id) => {
    try {
      console.log(id);
      const res = await fetch(`http://localhost:4000/tasks/${id}`,{
        method: "DELETE",
      })
      //const data = await res.json();
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Task List MotherFucker</h1>
      
      {tasks.map((task) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "green",
          }}
          key={task.id}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{color:"white"}}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
              <Typography>{task.id}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() =>navigate(`/tasks/${task.id}/edit`) }
              >
                Editar
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id)}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
