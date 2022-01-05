import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import { TodoFilterActions } from "../../redux/actions/todoFilter"
import { TodoFilterSelectors } from "../../redux/selectors/todoFilter"
import store from "../../redux/store"

const TodoFilter = () => {
  const activeStatus = TodoFilterSelectors.getActiveStatus()

  const handClick = (status) => {
    store.dispatch(TodoFilterActions.changeFilter(status))
  }

  return (
    <div className="mb-3">
      <Nav pills>
        <NavItem>
          <NavLink
            tag="button"
            onClick={() => handClick("all")}
            active={activeStatus === "all"}
          >
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag="button"
            onClick={() => handClick("completed")}
            active={activeStatus === "completed"}
          >
            Completed
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag="button"
            onClick={() => handClick("incomplete")}
            active={activeStatus === "incomplete"}
          >
            Incomplete
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default TodoFilter
