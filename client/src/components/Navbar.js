//import {Button} from '@mui/material'
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate();
  return (
    <Box sx={{flexGrow:1}}>
      <AppBar position='static' color='transparent'>
        <Container>
            <Toolbar>
              <Typography variant='h5' sx={{flexGrow:1}}>
                  <Link to="/" style={{textDecoration:'none', color:'#eee'}}>
                    SuperMercado Chapin Market
                  </Link>
              </Typography>
              <Button variant='contained' color= 'primary' onClick={()=> navigate('/employed/new')}>
                New Task
              </Button>
            </Toolbar>
            <Toolbar>
              <Typography variant='h5' sx={{flexGrow:0.5}}>
                  Eso tilin
              </Typography>
              <Typography variant='h5' sx={{flexGrow:1}}>
                  a la mierda tilin
              </Typography>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
 