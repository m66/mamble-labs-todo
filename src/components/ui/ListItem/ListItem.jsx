import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../../form/Checkbox/Checkbox";

import styles from "./listItem.module.scss";

const ListItem = ({ id, text, checked, getRemovedId, onChange, setIsActiveModal }) => {
  return (
    <div className={styles.listItem}>
      <Checkbox
        onChange={(newVal) => onChange(newVal, id)}
        checked={checked}
        label={text}
        name={id}
      />
      <FontAwesomeIcon
        icon={faClose}
        className={styles.deleteBtn}
        onClick={() => {
          getRemovedId(id);
          setIsActiveModal(true);
        }}
      />
    </div>
  );
};

export default ListItem;