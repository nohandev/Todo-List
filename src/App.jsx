import './App.css'
import './assets/Fonts.css'
import TodoComponent from './components/TodoComponent.jsx'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

  
function App({}) {

  const [tasks, setTasks] = useState([])

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
      <div className="todoLists">
        {tasks.map((todo) =>(
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