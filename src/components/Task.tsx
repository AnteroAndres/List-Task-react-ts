type task = {
    task: string
    deleteTask: () => void
}

export const Task = ({task, deleteTask}: task) => {
  return (
    <div className="task">
        <span>{task}</span>
        <button onClick={deleteTask}>Borrar</button>
    </div>
  )
}

export default Task