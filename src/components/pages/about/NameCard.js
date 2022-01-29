import './namecard.css';
import { useState } from 'react';
// import dp from './dp.jpeg';
const NameCard = (props) => {
	// const [placed, setplaced] = useState(true);

	return (
		<div className='main'>
			{props.users.map((user) => {
				return (
					<div>
						{user.card && (
							<div key={user.id} className='card'>
								{user.placed ? (
									<div className='placed'>PLACED</div>
								) : (
									<div className='placed'>NOT PLACED</div>
								)}
								<img
									className='person-image'
									src={user.image}
									onClick={() => props.isPlaced(user.id)}
									alt=''
								/>

								<div className='card-flex'>
									<h3>
										<span className='name'>{user.name.toUpperCase()} </span>
									</h3>
									<h3>
										<span className='age'>{user.age} </span>
										{user.followers && <span>Followers: {user.followers}</span>}
									</h3>
									<h4 className='mail'>{user.mail}</h4>
									<button
										className='btn btn-danger'
										onClick={() => {
											props.clearCard(user.id);
										}}
									>
										Clear
									</button>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default NameCard;
