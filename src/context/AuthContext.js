import React from "react"

export const authContext = React.createContext()

export class AuthProvider extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      authed: false,
    }
  }

  login = () => {
    // call api authorize
    return new Promise((resolve) => {
      this.setState({ authed: true })
      resolve("Login successfully!")
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
