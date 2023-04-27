import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = (props) => {
  const { todo, setTodo, handleAdd } = props;

  return (
    <form>
      <input
        type="text"
        placeholder="enter a task"
        className="input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
};

export default InputField;
