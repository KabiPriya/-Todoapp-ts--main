import { ITodo } from "../types";
import EditForm from "./EditTodo";
import { useState } from 'react';

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handleDelete: (num: Number) => void;
  handleUpdate: (num: Number) => void;
  handleSaveClick: (num: Number, t: string) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  extraCss,
  handleDelete,
  handleUpdate,
  handleSaveClick,
}) => {
  const [completedTodos, setCompletedTodos] = useState(new Set<number>());

  const toggleCompletion = (id: number) => {
    if (completedTodos.has(id)) {
      completedTodos.delete(id);
    } else {
      completedTodos.add(id);
    }
    setCompletedTodos(new Set(completedTodos));
  };

  return (
    <div className={extraCss}>
      {todos.map((t) => (
        <div key={t.id.toString()}>
          {t.isEdit ? (
            <>
              <EditForm item={t} handleSaveClick={handleSaveClick} />
            </>
          ) : (
            <p>
              <input
                type="checkbox"
                checked={completedTodos.has(t.id)}
                onChange={() => toggleCompletion(t.id)}
              />
              <span
                style={{
                  textDecoration: completedTodos.has(t.id) ? "line-through" : "none"
                }}
              >
                {t.text}
              </span>
              <button
                className="deletebutton"
                onClick={() => handleDelete(t.id)}
              >
                DELETE
              </button>
              <button className="editbutton" onClick={() => handleUpdate(t.id)}>
                EDIT
              </button>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
