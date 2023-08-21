// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, deleteItem} = props

  const deleteEach = () => deleteItem(item.id)

  return (
    <li className="todo-item">
      <p>{item.title}</p>
      <button type="button" onClick={deleteEach}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
