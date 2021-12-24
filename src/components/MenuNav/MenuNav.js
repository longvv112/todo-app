import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, NavItem } from "reactstrap"
import "./MenuNav.css"

class MenuNav extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <Link to="/" className="navbar-brand">Rocket 18</Link>

          <Nav navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/todos" className="nav-link">
                Todos
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default MenuNav
