const Button = ({ disable, type, children }) => {
	const handleClick = () => {
		alert("Button clicked!");
	};

	return (
		<button disabled={disable} type={type} onClick={() => handleClick()}>
			{children}
		</button>
	);
};

export default Button;
