// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/pages/homepage/Home';
import About from './components/pages/about/About';
import ContactUs from './components/pages/Contact_us';
import MemeGenerator from './components/pages/memeGenerator/MemeGenerator';
import Form from './components/pages/form/Form';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				{/* <h1>Hello</h1>
				 */}
				<Navbar></Navbar>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/memegenerator' element={<MemeGenerator />} />
					<Route exact path='/contactus' element={<ContactUs />} />
					<Route exact path='/form' element={<Form />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
