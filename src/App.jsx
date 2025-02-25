import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import { useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("counted: +", count);
	}, [count]);

	return (
		<>
			<Display count={count}>Count</Display>
			<br />
			<Button disable={false} type="button" onClick={() => setCount(count + 1)}>
				<span>ボタン</span>
			</Button>
		</>
	);
}

export default App;
