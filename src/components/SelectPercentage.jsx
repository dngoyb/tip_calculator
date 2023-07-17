const SelectPercentage = ({ onSetPercentage, percentage, children }) => {
	return (
		<div>
			<label>{children}</label>
			<select
				value={percentage}
				onChange={(e) => onSetPercentage(Number(e.target.value))}>
				<option value='0'>Disatisfied (0%)</option>
				<option value='5'>It was Okay (5%)</option>
				<option value='10'>It was Good (10%)</option>
				<option value='20'>Absolutly Amazing! (20%)</option>
			</select>
		</div>
	);
};

export default SelectPercentage;
