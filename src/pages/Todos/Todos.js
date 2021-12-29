import React, { Component } from "react"
import TodoForm from "../../components/TodoForm/TodoForm"
import TodoItem from "../../components/TodoItem/TodoItem"
import { TodosService } from "../../services/todos"

class Todos extends Component {
  constructor(params) {
    super(params)

    this.state = {
      todos: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.fetchTodosList()
  }

  componentWillUnmount() {
      console.log("unmounted");
  }

  fetchTodosList = () => {
    this.setState({ loading: true })

    TodosService.getTodosList().then((data) => {
      this.setState({ todos: data, loading: false })
    })
  }

  handleAddTodo = (title) => {
    TodosService.addTodo(title).then(response => {
        const newTodos = [...this.state.todos, response]
        this.setState({todos: newTodos});
    }).catch(error => {console.log(error);})
  }

  handleRemoveTodo = (todoId) => {
      // update code here
  }

  render() {
    const { todos, loading } = this.state

    return (
      <div>
        <h1>Todos</h1>
        <TodoForm onAddTodo={this.handleAddTodo}  />

        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {todos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />
            })}
          </ul>
        )}
      </div>
    )
  }
}

export default Todos
