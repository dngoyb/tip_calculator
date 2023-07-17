const BillInput = ({ bill, setBill }) => {
	return (
		<div>
			<label>How much was the bill? </label>
			<input
				type='number'
				placeholder='Bill here...'
				value={bill}
				onChange={(e) => setBill(Number(e.target.value))}
			/>
		</div>
	);
};

export default BillInput;
