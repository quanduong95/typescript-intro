import TodoModel from "../models/TodoModel";
import Todo from "./Todo";

interface Props {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<Props> = (props) => {
  const { todos, setTodos } = props;
  return (
    <>
      <div className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}  />
        ))}
      </div>
    </>
  );
};

export default TodoList;
