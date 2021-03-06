import "./App.css";
import AddTodo from "./Components/TodoApp/AddTodo";

import TodoList from "./Components/TodoApp/TodoList";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
