const Button = ({ disable, type }) => {
	return (
		<button disabled={disable} type={type}>
			Click me
		</button>
	);
};

export default Button;
