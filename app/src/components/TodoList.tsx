import { ITodo } from "../types";
import EditForm from "./EditTodo";
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
              <input type="checkbox" />
              {t.text}
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
