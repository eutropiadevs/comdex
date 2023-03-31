import React from 'react'
import { useState } from 'react';
import './index.scss';
import logo from '../../assets/img/logo.png'
import Modal from '../modal';

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
					<a href="/">
						<img src={logo} alt="logo" />
					</a>
					<button className="navbar-toggle" onClick={toggleMenu}>
						<span className="navbar-toggle-icon"></span>
					</button>
				</div>
				<div className="flex-content">
					<div>
						<ul
							className={`navbar-menu ${
								isOpen ? "is-open navbar-nav" : "navbar-nav height"
							}`}
						>
							<li className="nav-item">
								<a href="/">
									<Modal />
								</a>
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
					<div
						className={`navbar-menu ${isOpen ? "is-open nav-btn" : "nav-btn"}`}
					>
						<button>Get CMDX</button>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar
