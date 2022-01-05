import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from "./context/AuthContext"
import store from "./redux/store"


const render = () => ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

render()

store.subscribe(render)