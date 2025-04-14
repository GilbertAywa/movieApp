import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="fixed-top">
			<div className="container">
				<div className="logo d-inline-block">
					<Link to="/movieApp/" className="text-info">MOVIES</Link>
				</div>
				<div className="nav-links">
					<ul>
						<li>
							<Link to="/movieApp" className="text-secondary">Home</Link>
						</li>
						<li>
							<Link to="/favourite" className="text-secondary">Favorite</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
