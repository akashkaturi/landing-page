import { useState } from 'react';
const Form = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		isemployed: false,
		relationship: '',
		color: '',
	});
	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevState) => {
			return {
				...prevState,
				[name]: type === 'checkbox' ? checked : value,
			};
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			isemployed: false,
			relationship: '',
			color: '',
		});
	};

	return (
		<div>
			<h1>Form</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='firstName'
					value={formData.firstName}
					placeholder='First Name'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='lastName'
					value={formData.lastName}
					placeholder='Last Name'
					onChange={handleChange}
				/>
				<input
					type='email'
					name='email'
					value={formData.email}
					placeholder='Email'
					onChange={handleChange}
				/>
				<input
					type='checkbox'
					name='isemployed'
					id='isEmployed'
					checked={formData.isemployed}
					onChange={handleChange}
				/>
				<label htmlFor='isEmployed'>Employed?</label>
				<fieldset>
					<input
						type='radio'
						name='relationship'
						id='single'
						value='Single'
						onChange={handleChange}
					/>
					<label htmlFor='single'>Single</label>
					<input
						type='radio'
						name='relationship'
						id='taken'
						value='Taken'
						onChange={handleChange}
					/>
					<label htmlFor='taken'>Taken</label>
				</fieldset>
				<select id='color' value={formData.color} onChange={handleChange} name='color'>
					<option value=''>--Choose--</option>
					<option value='Red'>Red</option>
					<option value='Black'>Black</option>
					<option value='Blue'>Blue</option>
					<option value='Green'>Green</option>
					<option value='White'>White</option>
				</select>
				<button>Submit</button>
			</form>
			{formData.firstName && <span>{formData.firstName}</span>}{' '}
			{formData.lastName && <span>{formData.lastName}</span>}
			<p>Employment Status: {formData.isemployed ? 'Employed' : 'Unemployed'}</p>
			{formData.email && <p> {formData.email}</p>}
			{formData.relationship && <p>Relationship Status: {formData.relationship}</p>}
			{formData.color && <p>Favourite Color: {formData.color}</p>}
		</div>
	);
};
export default Form;
