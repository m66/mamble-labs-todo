import styles from "./modal.module.scss";

const Modal = ({ onDelete, onClose }) => {
  return (
    <div className={styles.modalBackground} onClick={() => onClose(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p>Are you sure you want to delete?</p>
        <div>
          <button onClick={() => onDelete(true)}>Yes</button>
          <button onClick={() => onDelete(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
