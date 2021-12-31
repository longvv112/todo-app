import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Input } from "reactstrap"

class TodoItem extends Component {
  handleClick = (e) => {
    const { onRemoveTodo, todo } = this.props
    onRemoveTodo(todo.id)
  }

  handChange = (event) => {
    const { onChangeCompleted, todo } = this.props
    onChangeCompleted(todo.id)
  }

  render() {
    const { todo } = this.props

    return (
      <li>
        <div className="row">
          <div className="col-auto">
            <Input
              type="checkbox"
              checked={todo.is_completed}
              onChange={this.handChange}
            />
          </div>
          <div className="col">
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </div>
          <div className="col-auto" onClick={this.handleClick}>
            Remove
          </div>
        </div>
      </li>
    )
  }
}

export default TodoItem
