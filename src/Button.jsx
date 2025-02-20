import styles from "./Button.module.css";

const Button = ({ disable, type, children }) => {
	const handleClick = () => {
		alert("Button clicked!");
	};

	return (
		<button
			className={styles.button}
			disabled={disable}
			type={type}
			onClick={() => handleClick()}
		>
			<span className={styles.buttonInner}>{children}</span>
		</button>
	);
};

export default Button;
