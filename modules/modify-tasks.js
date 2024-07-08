import { renderTasks } from './create-task-UI.js'
import { saveTasks, getTasks } from './helper-functions.js'

export function editTask(task, template) {
  const input = document.createElement('input')
  input.className = 'editTask'
  input.type = 'text'
  input.value = task.title

  const saveButton = document.createElement('button')
  saveButton.className = 'addTask'
  saveButton.textContent = 'Save'

  template.innerHTML = ''
  template.appendChild(input)
  template.appendChild(saveButton)

  saveButton.addEventListener('click', function () {
    task.title = input.value
    template.innerHTML = input.value
    saveTasks(task)
    renderTasks()
  })
}

export function deleteTask(task, template) {
  let tasks = getTasks()
  tasks = tasks.filter((t) => t.id !== task.id)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  template.remove()
}

export function toggleCompleteTask(id) {
  const tasks = getTasks()
  const task = tasks.find((task) => task.id == id)
  if (task) {
    task.completed = !task.completed
    saveTasks(task)
  }
}
