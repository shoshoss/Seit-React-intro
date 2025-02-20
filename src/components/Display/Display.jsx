import styles from "./Display.module.css";

const Display = ({ count, children }) => {
	return (
		<div className={styles.display}>
			{children} + {count}
		</div>
	);
};

export default Display;
