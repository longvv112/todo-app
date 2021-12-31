import React, { Component } from "react"
import TodoForm from "../../components/TodoForm/TodoForm"
import TodoItem from "../../components/TodoItem/TodoItem"
import TodoItems from "../../components/TodoItems/TodoItems"
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

  componentDidUpdate(prevProps, prevState) {
    
  }

  componentWillUnmount() {
    console.log("unmounted")
  }

  fetchTodosList = async () => {
    this.setState({ loading: true })

    const data = await TodosService.getTodosList()
    this.setState({ todos: data, loading: false })
  }

  handleAddTodo = (title) => {
    TodosService.addTodo(title).then((response) => {
      const newTodos = [...this.state.todos, response]
      this.setState({ todos: newTodos })
    })
  }

  handleRemoveTodo = (todoId) => {
    // update code here
    TodosService.removeTodo(todoId).then(() => {
      const remainTodos = this.state.todos.filter((todo) => todo.id !== todoId)
      this.setState({ todos: remainTodos })
    })
  }

  handleChangeCompleted = (todoId) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id !== todoId) return todo

      return { ...todo, is_completed: !todo.is_completed }
    })

    this.setState({ todos: newTodos })
  }

  render() {
    const { todos, loading } = this.state

    return (
      <div>
        <h1>Todos</h1>
        <TodoForm onAddTodo={this.handleAddTodo} />

        <TodoItems
          loading={loading}
          todos={todos}
          onRemoveTodo={this.handleRemoveTodo}
          onChangeCompleted={this.handleChangeCompleted}
        />
      </div>
    )
  }
}

export default Todos
