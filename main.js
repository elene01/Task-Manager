import newTask from './models/task-model.js'
import { fetchTasks } from './modules/fetch-data.js'
import { renderTasks } from './modules/create-task-UI.js'
import { getMaxId, getTasks } from './modules/helper-functions.js'

const addTaskButton = document.getElementById('showTaskInput')
const taskForm = document.getElementById('taskForm')
const newTaskInput = document.querySelector('.newTaskInput')

fetchTasks()
renderTasks()

addTaskButton.addEventListener('click', function () {
  addTaskButton.style.display = 'none'
  taskForm.style.display = 'block'
})

taskForm.addEventListener('submit', () => {
  const taskText = newTaskInput.value

  if (taskText.trim() !== '') {
    const tasks = getTasks()
    const createdTask = new newTask(getMaxId(tasks) + 1, taskText, false)

    tasks.unshift(createdTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    renderTasks()

    newTaskInput.value = ''
    taskForm.style.display = 'none'
    addTaskButton.style.display = 'block'
  }
})
