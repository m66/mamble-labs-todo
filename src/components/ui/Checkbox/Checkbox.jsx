import styles from "./checkbox.module.scss";

const Checkbox = ({ checked, onChange, label, name }) => (
  <div className={styles.checkboxRoot}>
    <input
      className={styles.checkbox}
      onChange={(e) => onChange(e.target.checked)}
      checked={checked}
      type="checkbox"
      name={name}
      id={name}
    />
    <label htmlFor={name} className={styles.label}>{label}</label>
  </div>
);
export default Checkbox;
