/*
  BrowserRouter
  Routes -> para tener distintas rutas
  Route -> tener una ruta especifica
*/ 

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Menu from './components/Navbar'
import {Container} from "@mui/material"

export default function App(){
  return(
    <BrowserRouter>
      <Menu/>
      <Container>
      <Routes>
        <Route path='/' element={<TaskList />}/>
        <Route path='/tasks/new' element={<TaskForm/>}/>
        {/*Falta */ }
      </Routes>
      </Container>
    </BrowserRouter>
  )
}