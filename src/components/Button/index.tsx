import styles from "./Button.module.css";
interface Props {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
