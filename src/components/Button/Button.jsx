import { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ disable, type, children }) => {
	const [count, setCount] = useState(0);

	return (
		<button
			className={styles.button}
			disabled={disable}
			type={type}
			onClick={() => setCount(count + 1)}
		>
			<span className={styles.buttonInner}>
				{children} + {count}
			</span>
		</button>
	);
};

export default Button;
