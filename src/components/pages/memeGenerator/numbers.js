import './number.css';
const Numbers = (props) => {
	return (
		<div className='grid'>
			{props.numbers.map((number) => {
				return (
					<div
						key={number.id}
						onClick={() => {
							props.toChange(number.id);
						}}
						className={number.on ? 'green' : 'normal'}
					>
						<h1>{number.number}</h1>
					</div>
				);
			})}
		</div>
	);
};
export default Numbers;
