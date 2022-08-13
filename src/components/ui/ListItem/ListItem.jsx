import "./listItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons"

const ListItem = ({ itemData: { id, text, isCompleted }, onDelete }) => {
  return (
    <div className="list-item">
      <div>
        <input type="checkbox" id={id}/>
        <label for={id}>{text}</label>
      </div>
      <FontAwesomeIcon icon={faClose} className="delete-btn" onClick={() => onDelete(id)}/>
    </div>
  );
};

export default ListItem;