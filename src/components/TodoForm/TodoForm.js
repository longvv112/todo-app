import React, { Component } from "react"
import { Button, Input, Form } from "reactstrap"

class TodoForm extends Component {
  constructor(params) {
    super(params)

    this.state = {
      title: "",
    }
  }

  componentDidMount() {
    document.getElementById("inputTodo").focus()
  }

  handleChangeInput = (event) => {
    this.setState({ title: event.target.value })
  }

  handleSubmitForm = (event) => {
    event.preventDefault()

    const { onAddTodo } = this.props
    onAddTodo(this.state.title)
  }

  render() {
    const { title } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmitForm}>
          <div className="d-flex">
            <div className="flex-grow-1">
              <Input
                id="inputTodo"
                value={title}
                onChange={this.handleChangeInput}
              />
            </div>
            <Button color="primary" className="ml-3">
              Add
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default TodoForm
