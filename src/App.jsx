import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Display count={count} />
			<br />
			<Button disable={false} type="button" onClick={() => setCount(count + 1)}>
				<span>ボタン</span>
			</Button>
		</>
	);
}

export default App;
