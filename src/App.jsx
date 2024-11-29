import './App.css'
import './assets/Fonts.css'
import TodoComponent from './components/TodoComponent.jsx'
import TodoSearchComponent from './components/TodoSearchComponent.jsx'
import TodoFilterComponent from './components/TodoFilterComponent.jsx'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

  
function App() {

  const [tasks, setTasks] = useState([])
  const [valueSearch, setValueSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const newTasks = [...tasks]

    const newTasksFiltered = newTasks.filter(todo => todo.id !== id ? todo : null) 
    setTasks(newTasksFiltered)
  };

  const updateCategory = (id) => {
    const newTask = [...tasks]
    newTask.map(todo => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTasks(newTask)
  };

  return (
    <div className="todoContainer containerMain">
      <div className='todoTitleContainer'>
        <h1>To-Do List</h1>
      </div>

      <TodoSearchComponent valueSearch={valueSearch} setValueSearch={setValueSearch}/>

      <TodoFilterComponent filter={filter} setFilter={setFilter} setSort={setSort}/>

      <div className="todoLists">
        {tasks
        .filter((todo) => 
        filter === "All" ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => 
        todo.text.toLowerCase().includes(valueSearch.toLowerCase()))
        .sort((a, b) => 
        sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) =>(
          <aside className="todoListsContent" key={todo.id}>
            <div className={todo.isCompleted ? 'todoTasksContainer completed' : 'todoTasksContainer pending'}>
              <div className='tasksContent'>
                <p><span>Tarefa: </span>{todo.text}</p>
                <p>Categoria: ({todo.category})</p>
              </div>
              <div className='tasksBtns'>
                <button className='completeTaskBtn' onClick={() => {updateCategory(todo.id)}}><FontAwesomeIcon icon={faCheck}/></button>
                <button className='deleteTaskBtn' onClick={() => {removeTask(todo.id)}}><FontAwesomeIcon icon={faXmark}/></button>
              </div>
            </div>
          </aside>
        ))}
      </div>
      <TodoComponent addTask={addTask}/>
    </div>
  )
}

export default App