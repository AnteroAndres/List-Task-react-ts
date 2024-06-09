import { useState } from "react"
import { TaskList } from "./TaskList"


export const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])
    const handleAddTask = () =>{
        if(newTask.trim() === '')return
        setTaskList(previusTaks => [...previusTaks, newTask])
        setNewTask('')
    }
    const handleDeleteTask = (index: number) =>{
        setTaskList(task => task.filter((_, i) => i !== index))
    }
  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div>
            <input
            type="text"
            value={newTask}
            onChange={(e)=> setNewTask(e.target.value)}
            placeholder="Escribe una tarea y presiona Enter"
            />
            <button onClick={handleAddTask}>Agregar tarea</button>
        </div>
        <TaskList TaskList={taskList} deleteTask={handleDeleteTask}></TaskList>
    </div>
  )
}

export default TodoApp