import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import { TodoFilterActions } from "../../redux/actions/todoFilter"
import { connect } from "react-redux"

const TodoFilter = (props) => {
  const activeStatus = props.todoFilter

  const handClick = (status) => {
    props.dispatchChangeFilter(status)
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

const mapStateToProps = (store) => {
  return {
    todoFilter: store.todo_filter,
    dispatch: store.dispatch,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchChangeFilter: (status) =>
      dispatch(TodoFilterActions.changeFilter(status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
