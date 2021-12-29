import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { authContext } from "../../context/AuthContext"

class LoginForm extends Component {
  constructor(params) {
    super(params)

    this.state = {
      username: "",
      password: "",
    }
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // validate form

    const {login} = this.context
    login()
  }

  render() {
    // const {authed, login} = this.context


    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              id="exampleEmail"
              name="username"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.handleChangeInput}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangeInput}
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

LoginForm.contextType = authContext

export default LoginForm
