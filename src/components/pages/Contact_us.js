// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
const ContactUs = () => {
	const [newList, setnewList] = useState([]);

	const listElements = newList.map((item) => <h3>{item}</h3>);
	const addElements = () => {
		const newElement = `Things${newList.length + 1}`;
		setnewList((prevState) => [...prevState, newElement]);
	};
	const clear = () => {
		setnewList([]);
		// const updateArray = () => newList.filter((item) => item !== itemToRemove);
	};
	const [width, setWidth] = useState(window.innerwidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});
	}, []);
	return (
		<div>
			<h1>Contact Us</h1>
			<button onClick={addElements} className='btn btn-primary'>
				Add New
			</button>
			<button onClick={clear} className='btn btn-danger'>
				Clear
			</button>

			{listElements}
			<div className='width'>
				{' '}
				<h1>Inner Width: {width}</h1>
			</div>
		</div>
	);
};
export default ContactUs;
