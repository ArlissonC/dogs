import styles from "./Input.module.css";

interface Props {
  label: string;
  type: string;
  name: string;
  setValue?: (param: string) => void;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  error: string;
}

const Input = ({
  label,
  type,
  name,
  value,
  setValue,
  onChange,
  onBlur,
  error,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
