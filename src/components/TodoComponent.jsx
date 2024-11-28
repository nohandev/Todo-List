import {useState} from 'react'
import style from './styles/TodoComponent.module.css'

const TodoComponent = ({ addTask, numberAdd }) => {

  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('Estudos');

  const createTask = () => {
    if (taskName === '') {
      alert('preencha os campos vazios')
    } else {
    const novaTask = {
      id: Math.floor(Math.random() * 1000),
      text: taskName,
      category: taskCategory,
      isCompleted: false
    };
      addTask(novaTask);
      setTaskName('');
    }
  };
      
  return (
    <div className={style.container}>
      <div className={style.todoCreateContainer}>
        <label>Criar Tarefa: </label>
        <input 
        type="text" 
        placeholder='Digite sua tarefa!'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        />
        <label>Selecione uma categoria: </label>
        <select onChange={(e) => setTaskCategory(e.target.value)}>
          <optgroup label='Selecione uma categoria'></optgroup>
          <option value="Estudos">Estudos</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
        </select>

        <button 
        type='submit' 
        onClick={createTask} 
        className={style.todoSubmitBtn}>
        Criar tarefa
        </button>
      </div>
    </div>
  )
}

export default TodoComponent