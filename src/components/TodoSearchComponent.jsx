import style from './styles/TodoSearchComponent.module.css'

const TodoSearchComponent = ({valueSearch, setValueSearch }) => {


  return (
    <div className={style.todoSearchContainer}>
      <section className={style.todoSearchContent}>
        <h1>Pesquisar: </h1>
        <input 
        type="search"  
        placeholder='Busque por uma tarefa...' 
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
        />
      </section>
    </div>
  )
}

export default TodoSearchComponent
