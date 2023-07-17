import BillInput from './components/BillInput';
import Reset from './components/Reset';
import SelectPercentage from './components/SelectPercentage';

function App() {
	return (
		<div>
			<BillInput />
			<SelectPercentage text='How did you like the service? ' />
			<SelectPercentage text='How did your friend like the service? ' />
			<h1>You pay $100($100 + $0 tip)</h1>
			<Reset />
		</div>
	);
}

export default App;
