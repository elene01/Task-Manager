import { editTask, deleteTask, toggleCompleteTask } from './modify-tasks.js'
import { getTasks } from './helper-functions.js'

const editIconSrc =
  'https://raw.githubusercontent.com/elene01/Task-Manager/main/assets/edit.png'
const deleteIconSrc =
  'https://raw.githubusercontent.com/elene01/Task-Manager/main/assets/delete.png'

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
    editIcon.src = editIconSrc
    editIcon.alt = 'Edit icon'

    const deleteIcon = document.createElement('img')
    deleteIcon.className = 'deleteIcon'
    deleteIcon.src = deleteIconSrc
    deleteIcon.alt = 'Delete icon'

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
