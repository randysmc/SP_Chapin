/*
  BrowserRouter
  Routes -> para tener distintas rutas
  Route -> tener una ruta especifica
*/ 

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Menu from './components/Navbar'
import EmployedList from './components/EmployedList'
import {Container} from "@mui/material"
import EmployedForm from './components/EmployedForm'
/**
 * 
 * @returns <Route path='/' element={<TaskList />}/>
        <Route path='/tasks/new' element={<TaskForm/>}/>
        <Route path='/tasks/:id/edit' element={<TaskForm/>}/>
 */

export default function App(){
  return(
    <BrowserRouter>
      <Menu/>
      <Container>
      <Routes>
        <Route paht='/' element={<EmployedList />}/>
        <Route path='/employed/new' element={<EmployedForm/>}/>
      </Routes>
      </Container>
    </BrowserRouter>
  )
}