import { useState } from "react";
import "./App.scss";
import InputField from "./components/InputField";
import TodoModel from "./models/TodoModel";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      //update the list of todos
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      //clear the input field
      setTodo("");
    }
  };
  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
