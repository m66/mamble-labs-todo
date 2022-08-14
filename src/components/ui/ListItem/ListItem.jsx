import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../Checkbox/Checkbox";

import "./listItem.scss";

const ListItem = ({ id, text, checked, onDelete, onChange }) => {
  return (
    <div className="list-item">
      <Checkbox
        onChange={(newVal) => onChange(newVal, id)}
        checked={checked}
        label={text}
        name={id}
      />
      <FontAwesomeIcon
        icon={faClose}
        className="delete-btn"
        onClick={() => {
          onDelete(id);
        }}
      />
    </div>
  );
};

export default ListItem;
