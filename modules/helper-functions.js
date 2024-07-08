//To get max id we have in localStorage
export function getMaxId(tasks) {
  if (tasks.length === 0) {
    return 0
  }
  const maxIdTask = tasks.reduce((maxTask, currentTask) => {
    return currentTask.id > maxTask.id ? currentTask : maxTask
  })
  return maxIdTask.id
}

//Save task in localStorage
export async function saveTasks(task) {
  const tasks = getTasks()
  const updatedTasks = tasks.map((updatedTask) =>
    updatedTask.id === task.id ? task : updatedTask,
  )
  localStorage.setItem('tasks', JSON.stringify(updatedTasks))
}

//Get tasks from localStorage
export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || []
}
