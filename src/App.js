import axios from "axios";
import { useState } from "react";

function App() {
	const [number, setNumber] = useState("");
	const [result, setResult] = useState([]);
	const [resultGenap, setResultGenap] = useState([]);
	const [prima, setPrima] = useState([]);

	const handleButton = () => {
		axios
			.post("http://localhost:4000/test", { number })
			.then((response) => {
				setResult(response.data.result);
				console.log(response.data.result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleButtonGenap = () => {
		axios
			.post("http://localhost:4000/genap", { number })
			.then((response) => {
				setResultGenap(response.data.result);
				console.log(response.data.result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleButtonPrima = () => {
		axios
			.post("http://localhost:4000/prima", { number })
			.then((response) => {
				setPrima(response.data.result);
				console.log(response.data.result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div>
				<input
					type='text'
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
				<button onClick={handleButton}>Generate Segitiga</button>
				<button onClick={handleButtonGenap}>Generate Bilangan Ganjil</button>
				<button onClick={handleButtonPrima}>Generate Bilangan Prima</button>

				<ul>
					{result.map((value, index) => (
						<li key={index}>{value}</li>
					))}
				</ul>

				<ul>
					{resultGenap.map((value, index) => (
						<li key={index}>{value}</li>
					))}
				</ul>

				<ul>
					{prima.map((value, index) => (
						<li key={index}>{value}</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
