import { Task } from "./Task"

type TaskList = {
    TaskList: string[]
    deleteTask : (index: number) => void
}

export const TaskList = ({TaskList, deleteTask}: TaskList) => {
  return (
    <div className="tasklist">
        {TaskList.map((task, index) => (
            <Task key={index} task={task} deleteTask={() =>deleteTask(index)}></Task>
        ))}
    </div>
  )
}
