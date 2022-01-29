import NameCard from '../about/NameCard';
import { useState } from 'react';
import creators from '../about/users';
const About = () => {
	const [user, setUser] = useState(creators);
	const clear = () => {
		setUser((prevElements) => {
			return prevElements.map((element) => {
				return { ...element, card: false };
			});
		});
	};
	const isPlaced = (id) => {
		setUser((prevElements) => {
			return prevElements.map((element) => {
				return element.id !== id ? { ...element, placed: false } : element;
			});
		});
		setUser((prevElements) => {
			return prevElements.map((element) => {
				return element.id === id ? { ...element, placed: !element.placed } : element;
			});
		});
	};
	const clearCard = (id) => {
		console.log(id);
		setUser((prevElements) => {
			return prevElements.map((element) => {
				return element.id === id ? { ...element, card: !element.card } : element;
			});
		});
	};
	const viewAll = () => {
		setUser((prevElements) => {
			return prevElements.map((element) => {
				return { ...element, card: true };
			});
		});
	};

	return (
		<div>
			<h1>OUR Creators</h1>

			<div>
				<NameCard
					users={user}
					isPlaced={isPlaced}
					viewAll={viewAll}
					clearCard={clearCard}
				></NameCard>
				<button onClick={clear}>Clear All</button>
				<button onClick={viewAll} className='btn btn-danger btn-lg'>
					View All
				</button>
			</div>
		</div>
	);
};
export default About;
