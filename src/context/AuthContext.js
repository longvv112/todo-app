import React from "react"
import { withRouter } from "react-router-dom"
import { AuthServices } from "../services/auth"

export const authContext = React.createContext()

class AuthProvider extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      authed: Boolean(AuthServices.getToken()),
    }
  }

  login = (email, password) => {
    AuthServices.login(email, password).then((response) => {
      this.setState({authed: true});
      AuthServices.setToken(response.token)

      const {history, location} = this.props
      history.push(location.state.from)
    })
  }

  logout = () => {
    // todo
    return new Promise((resolve) => {
      this.setState({ authed: false })
      resolve("Logout successfully!")
    })
  }

  render() {
    return (
      <authContext.Provider
        value={{
          login: this.login,
          logut: this.logout,
          authed: this.state.authed,
        }}
      >
        {this.props.children}
      </authContext.Provider>
    )
  }
}

const AuthProviderWithRoute = withRouter(AuthProvider)

export {AuthProviderWithRoute as AuthProvider}