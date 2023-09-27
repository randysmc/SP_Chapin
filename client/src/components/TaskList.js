import { useEffect } from "react"


export default function TaskList() {

  const loadTasks = async() => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()
    console.log(data);
  }
  /**
   * para precargar los datos
   * recibe una funcion y un arreglo como parametros
   * no permite el async await
   */

  useEffect(()=>{
    loadTasks()
  },[])

  return (
    <>
      <h1>Task List MotherFucker</h1>
    </>
  )
}
