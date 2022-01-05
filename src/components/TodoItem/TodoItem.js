import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, Input } from "reactstrap"

class TodoItem extends Component {
  handleClick = (e) => {
    const { onRemoveTodo, todo } = this.props
    onRemoveTodo(todo.id)
  }

  handChange = (event) => {
    const { onChangeCompleted, todo } = this.props
    onChangeCompleted(todo.id, event.target.checked)
  }

  render() {
    const { todo } = this.props

    return (
      <li className="list-group-item list-group-item-action">
        <div className="row align-items-center">
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
          <div className="col-auto">
            <button className="btn text-danger" onClick={this.handleClick}>Remove</button>
          </div>
        </div>
      </li>
    )
  }
}

export default TodoItem
