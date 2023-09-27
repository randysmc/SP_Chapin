/*Se utiliza para ordenar elementos dentro de la pantalla */
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function TaskForm() {
  const navigate = useNavigate();

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
          style={{ backgroundColor: "white", padding: "1rem" }}
        >
          <Typography variant="5" textAlign="center" color="green">
            Create Task
          </Typography>
          <CardContent>
            <form>
              <TextField
                variant="filled"
                label="Escribe tu nombre"
                placeholder="testing"
                sx={{ display: "block", margin: ".5rem 0" 
              }}
                inputProps={{style:{color:"white"}}}
                InputLabelProps={{style:{color:"white"}}}
              />


              <TextField
                variant="filled"
                label="Contraseña"
                /**
                 * multiline
                 * rows={4} para que sea multilinea
                 */
                sx={{ display: "block", margin: ".5rem 0" }}
              />
            </form>
            <Button variant="contained" color="secondary" type="submit">
              Save
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "white", padding: "1rem" }}
        >
          <Typography variant="5" textAlign="center" color="green">
            Create Task
          </Typography>
          <CardContent>
            <form>
              <TextField
                variant="filled"
                label="Escribe tu nombre"
                placeholder="testing"
                sx={{ display: "block", margin: ".5rem 0" 
              }}
                inputProps={{style:{color:"white"}}}
                InputLabelProps={{style:{color:"white"}}}
              />


              <TextField
                variant="filled"
                label="Contraseña"
                /**
                 * multiline
                 * rows={4} para que sea multilinea
                 */
                sx={{ display: "block", margin: ".5rem 0" }}
              />
            </form>
            <Button variant="contained" color="secondary" type="submit">
              Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    
  );
}
