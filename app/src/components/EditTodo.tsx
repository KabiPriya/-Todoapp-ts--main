import { useState } from "react";
import { ITodo } from "../types";

interface ICard {
  item: ITodo;
  handleSaveClick: (num: Number, t: string) => void;
}
const input: React.FC<ICard> = ({ handleSaveClick, item }) => {
  const [updatedTitle, setUpdatedTitle] = useState(item.text);
  return (
    <div className="card">
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button onClick={() => handleSaveClick(item.id, updatedTitle)}>
        Save
      </button>
    </div>
  );
};

export default input;
