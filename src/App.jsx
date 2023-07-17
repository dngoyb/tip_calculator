import { useState } from 'react';
import BillInput from './components/BillInput';
import Reset from './components/Reset';
import SelectPercentage from './components/SelectPercentage';

function App() {
	const [bill, setBill] = useState('');
	const [percentage1, setPercentage1] = useState(0);
	const [percentage2, setPercentage2] = useState(0);

	const calcPercent = (percentage1 + percentage2) / 2;

	function handleReset() {
		setBill('');
		setPercentage1(0);
		setPercentage2(0);
	}

	return (
		<div>
			<BillInput bill={bill} setBill={setBill} />
			<SelectPercentage
				text='How did you like the service? '
				percentage={percentage1}
				onSetPercentage={setPercentage1}
			/>
			<SelectPercentage
				percentage={percentage2}
				onSetPercentage={setPercentage2}
				text='How did your friend like the service? '
			/>
			{bill && (
				<div>
					<h1>
						You pay ${bill + calcPercent} (${bill} + ${calcPercent} tip)
					</h1>
					<Reset onReset={handleReset} />
				</div>
			)}
		</div>
	);
}

export default App;
