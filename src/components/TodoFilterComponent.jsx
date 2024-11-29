import style from './styles/TodoFilterComponent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TodoFilterComponent = ({filter, setFilter, setSort}) => {
  return (
    <div className={style.todoFilterContainer}>
      <h1>Filtrar: </h1>
      <section className={style.todoFilterContent}>
        <div className={style.statusContent}>
          <h3>Status: </h3>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Incompletas</option>
          </select>
        </div>

        <div className={style.alphabeticalContent}>
          <h3>Ordem alfabética: </h3>
          <div className={style.alphabeticalContentBtns}>

            <button onClick={() => setSort('Asc')}>
              <FontAwesomeIcon icon={faArrowUp}/>
            </button>

            <button onClick={() => setSort('Desc')}>
              <FontAwesomeIcon icon={faArrowDown}/>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TodoFilterComponent
