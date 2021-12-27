import React, { Component } from "react"
import { Input } from "reactstrap"

class TodoItem extends Component {
  render() {
    const {todo} = this.props

    return (
      <li>
        <div className="row">
          <div className="col-auto">
            <Input type="checkbox" />
          </div>
          <div className="col">{todo.title}</div>
          <div className="col-auto">Remove</div>
        </div>
      </li>
    )
  }
}

export default TodoItem
