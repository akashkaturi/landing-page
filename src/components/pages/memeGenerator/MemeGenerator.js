import './memegenerator.css';
// import Numbers from './numbers';
// import { elements } from './numbers_data';
import { useState, useEffect } from 'react';
import { memesData } from './memesData.js';
const MemeGenerator = () => {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});
	const [allMemes, setAllMemes] = useState(memesData);
	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
	}, []);
	function getMemeImage(event) {
		event.preventDefault();
		console.log('he');
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}
	// const [values, setvalues] = useState(elements);

	// const change = (id) => {
	// 	setvalues((prevState) => {
	// 		return prevState.map((element) => {
	// 			return element.id !== id ? { ...element, on: false } : element;
	// 		});
	// 	});
	// 	setvalues((prevState) => {
	// 		return prevState.map((element) => {
	// 			return element.id === id ? { ...element, on: !element.on } : element;
	// 		});
	// 	});
	// };
	return (
		<div>
			<h1>Meme Generator</h1>
			<form action='' className='memegenerator'>
				<input
					type='text'
					placeholder='Top text'
					className='form--input1'
					name='topText'
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='Bottom Content'
					className='form--input2'
					name='bottomText'
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button className='new-image-button' onClick={getMemeImage}>
					Get a New Meme Image
				</button>
			</form>
			{/* <Numbers numbers={values} toChange={change} /> */}
			<div className='meme'>
				<img src={meme.randomImage} alt='' className='meme--image' />
				<h2 className='meme--text top'>{meme.topText}</h2>
				<h2 className='meme--text bottom'>{meme.bottomText}</h2>
			</div>
		</div>
	);
};

export default MemeGenerator;
