import React from 'react'
import { useState } from 'react';
import './index.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
	// const [activeButton, setActiveButton] = useState("home");
		function toggleMenu() {
			setIsOpen(!isOpen);
		}
  return (
		<>
			<nav className="navbar">
				<div className="navbar-brand">
					<a href="/">Logo</a>
					<button className="navbar-toggle" onClick={toggleMenu}>
						<span className="navbar-toggle-icon"></span>
					</button>
				</div>
				<div>
					<ul
						className={`navbar-menu ${
							isOpen ? "is-open navbar-nav" : "navbar-nav"
						}`}
					>
						<li className="nav-item">
							<a href="/">Individuals</a>
						</li>
						<li className="nav-item">
							<a href="/marketPlace">Developers</a>
						</li>
						<li className="nav-item">
							<a href="/creator">Ecosystem</a>
						</li>
					</ul>
				</div>
				{/* <div>
					<Modal />
				</div> */}
				<div>
					<button>Get CMDX</button>
				</div>
			</nav>
		</>
	);
}

export default Navbar
