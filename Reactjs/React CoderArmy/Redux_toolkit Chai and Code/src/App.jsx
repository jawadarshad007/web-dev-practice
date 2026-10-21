import './App.css'
import Todos from './components/Todos.jsx'
import AddTodo from './components/Addtodo'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
function App() {
  

  return (
    <>
      <h1>Learing about Redux Toolkit</h1>
      <Provider store={store}>
      <AddTodo/>
      <Todos/>
      </Provider>
    </>
  )
}

export default App
