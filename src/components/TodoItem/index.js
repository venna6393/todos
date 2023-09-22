import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {list, delete1} = this.props
    const {title} = list
    const onDelete = () => delete1(list.id)
    return (
      <li className="li">
        <p className="h3">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
