// Fetch data from API and save only the first 10 tasks for improved initial appearance
export async function fetchTasks() {
  if (!localStorage.getItem('tasks'))
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      localStorage.setItem('tasks', JSON.stringify(data.splice(0, 10)))
    } catch {
      console.error('Error fetching data:', error)
    }
}
