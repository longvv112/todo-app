import React from "react"
import { withRouter } from "react-router-dom"
import { AuthService } from "../services/auth"
import { getJWT, setJWT } from "../services/storage"

const authContext = React.createContext()

class AuthProvider extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      authed: !!getJWT(),
    }
  }

  login = (email, password) => {
    AuthService.login(email, password).then(token => {
      console.log(token)
      setJWT(token)
      this.setState({authed: true})

      const {history, location} = this.props
      history.push(location.state.from) 
    })
  }

  logout = () => {
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

const AuthProviderWithRouter = withRouter(AuthProvider)

export {authContext, AuthProviderWithRouter as AuthProvider}