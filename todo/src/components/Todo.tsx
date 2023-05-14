import React from "react";
import TodoModel from "../models/TodoModel";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: TodoModel;
  key: number;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const Todo: React.FC<Props> = (props) => {
  const { todo, key, todos, setTodos } = props;
  return (
    <form>
      <span className="todo-item">
        <div>
          {todo.todo}
          <span className="todo-item-icon">
            <AiFillEdit />
          </span>
          <span className="todo-item-icon">
            <AiFillDelete />
          </span>
          <span className="todo-item-icon">
            <MdDone />
          </span>
        </div>
      </span>
    </form>
  );
};

export default Todo;
