
import React from 'react';
import { Group, FormInputField, FormInputLable } from './custom-input.styles';

const CustomInput = ({ handleChange, label, ...otherProps }) => (
	<Group>
		<FormInputField
			onChange={handleChange}
			{...otherProps}
			autocomplete='off'
		/>
		{label ? (
			<FormInputLable length={otherProps.value.length}>
				{label}
			</FormInputLable>
		) : null}
	</Group>
);

export default CustomInput;
