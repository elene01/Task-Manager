import { editTask, deleteTask, toggleCompleteTask } from './modify-tasks.js'
import { getTasks } from './helper-functions.js'


const tasks = getTasks()

export function renderTasks() {
  const ul = document.getElementById('list-container')
  ul.innerHTML = ''

  tasks.forEach((task) => {
    const li = document.createElement('li')
    li.textContent = task.title

    const buttonContainer = document.createElement('container')
    buttonContainer.className = 'buttonContainer'

    const editIcon = document.createElement('img')
    editIcon.className = 'editIcon'
    editIcon.src = '../assets/edit.svg'

    const deleteIcon = document.createElement('img')
    deleteIcon.className = 'deleteIcon'
    deleteIcon.src = '../assets/delete.svg'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed

    checkbox.addEventListener('change', () => {
      toggleCompleteTask(task.id)
    })
    deleteIcon.addEventListener('click', () => {
      deleteTask(task, li)
    })
    editIcon.addEventListener('click', () => {
      editTask(task, li)
    })

    li.appendChild(buttonContainer)
    buttonContainer.appendChild(editIcon)
    buttonContainer.appendChild(deleteIcon)
    buttonContainer.appendChild(checkbox)
    ul.appendChild(li)
  })
}
