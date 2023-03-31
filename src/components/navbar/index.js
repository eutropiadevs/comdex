import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/img/logo.png'
import Modal from '../modal';
import { navdev, naveco, navin } from '../../utils/navdata';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
	// const [activeButton, setActiveButton] = useState("home");
	// const [active, setActive] = useState(false)
		const toggleMenu = () => {
			setIsOpen(!isOpen);
		}
  return (
		<>
			<nav className="navbar">
				<div className="navbar-brand">
					<NavLink className='logo' to='/'>
						<img src={logo} alt="logo" />
					</NavLink>
					<button className="navbar-toggle" onClick={() => toggleMenu()}>
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
								<NavLink className="navlink" href="/">
									<Modal btn={`Indiviual`} data={navin} />
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="navlink" href="/marketPlace">
									<Modal btn={`Developer`} data={navdev} />
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="navlink" href="/creator">
									<Modal btn={`Ecosystem`} data={naveco} />
								</NavLink>
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
