import './banner.css';
import { useState } from 'react';
const Banner = (props) => {
	const [counter, setCounter] = useState(1);
	const increment = () => {
		setCounter((prevCount) => prevCount + 1);
	};
	const decrement = () => {
		setCounter((prevCount) => prevCount - 1);
	};
	const [name, setname] = useState('Akash');
	const onChange = (event) => {
		const newValue = event.target.value;
		setname((prevname) => newValue);
	};
	// const [state, setstate] = useState(initialState);
	
	return (
		<div className='banner_content'>
			<div>
				<h1>{props.head1}</h1>
				<h2>{props.head2}</h2>
				<h3>{props.head3}</h3>
				<button className='btn' onClick={increment}>
					Plus+
				</button>
				<br />
				<h1>{counter}</h1>
				<br />
				<button className='btn' onClick={decrement}>
					Minus-
				</button>
				<br />
				<input type='text' placeholder='enter something...' onChange={onChange} />
				<br />
				<h1 className='input-content'>{name}</h1>
			</div>
			<h4>Scroll Down to Get started ⬇️</h4>
		</div>
	);
};

export default Banner;
