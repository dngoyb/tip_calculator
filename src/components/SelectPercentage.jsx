import React from 'react';

const SelectPercentage = ({ text }) => {
	return (
		<div>
			<span>{text}</span>
			<select>
				<option value='0'>Disatisfied (0%)</option>
				<option value='0'>It was Okay (5%)</option>
				<option value='0'>It was Good (10%)</option>
				<option value='0'>Absolutly Amazing! (20%)</option>
			</select>
		</div>
	);
};

export default SelectPercentage;
