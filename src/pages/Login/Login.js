import React, { Component } from "react"
import LoginForm from "../../components/LoginForm/LoginForm"

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        <section>
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <LoginForm {...this.props} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Login
