import { Link } from 'react-router-dom';
import '../App.css';
import './navbar.css';
const Navbar = (props) => {
	return (
		<nav>
			<div>
				<h1 className='logo'>Code Club</h1>
			</div>
			<div>
				<ul className='navlinks'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/memegenerator'>MemeGenerator</Link>
					</li>
					<li>
						<Link to='/contactus'>Contact Us</Link>
					</li>
					<li>
						<Link to='/form'>Form</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
