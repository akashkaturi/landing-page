import { useState } from 'react';
import './login.css';
const Login = () => {
	const [formData, setFormData] = useState({
		fullname: '',
		email: '',
		password: '',
		confirmpassword: '',
		receivemails: false,
	});

	const onChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevData) => {
			return {
				...prevData,
				[name]: type === 'checkbox' ? checked : value,
			};
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (formData.password === formData.confirmpassword) {
			// success = <p>Sucessfully Created</p>;
		} else {
			// success = <p>Passwords Donot Match</p>;
			return;
		}
		if (formData.receivemails) {
			console.log('Thanks for signing up for mails');
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className='login'>
				<input
					type='text'
					placeholder='Enter Full Name'
					name='fullname'
					value={formData.fullname}
					onChange={onChange}
				/>
				<input
					type='email'
					placeholder='Enter email'
					name='email'
					value={formData.email}
					onChange={onChange}
				/>
				<input
					type='password'
					placeholder='Enter Password'
					name='password'
					value={formData.password}
					onChange={onChange}
				/>
				<input
					type='password'
					placeholder='Confirm Password'
					name='confirmpassword'
					value={formData.confirmpassword}
					onChange={onChange}
				/>
				<span>
					<input
						type='checkbox'
						checked={formData.receivemails}
						name='receivemails'
						id='receivemails'
						onChange={onChange}
					/>
					<label htmlFor='receivemails'>Turn on Mails from us</label>
				</span>
				<button>Submit</button>
			</form>
		</div>
	);
};
export default Login;
