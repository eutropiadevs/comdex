import React from "react";
import { useState } from "react";
import './index.scss'
import intro from '../../assets/img/intro.png'
import { Link } from "react-router-dom";

const Modal = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);

	function handleOpenModal(e) {
      e.preventDefault();
		setIsModalOpen(true);
	}

	function handleCloseModal(e) {
        e.preventDefault();
		setIsModalOpen(false);
	}

	return (
		<>
			<div className="modal-btn">
				<button onClick={handleOpenModal}>Individuals</button>
				<div className="open-modal">
					{isModalOpen && (
						<div className="open-modal_section" onClick={handleCloseModal}>
							<span onClick={handleCloseModal}>&#9747;</span>
							<div className="open-modal_section-title">
								<h4>Individuals</h4>
								<h4>Developers</h4>
								<h4>Ecosystem</h4>
							</div>
							<Link to="/introduction" className="open-modal_section-sub first">
								<div className="img">
									<img src={intro} alt="img" />
								</div>
								<div className="content">
									<h3>Introduction</h3>
									<p>DeFi infrastructure layer for Cosmos ecosystem</p>
								</div>
							</Link>
							<div className="open-modal_section-sub">
								<div className="img">
									<img src={intro} alt="img" />
								</div>
								<div className="content">
									<h3>Introduction</h3>
									<p>DeFi infrastructure layer for Cosmos ecosystem</p>
								</div>
							</div>
							<div className="open-modal_section-sub">
								<div className="img">
									<img src={intro} alt="img" />
								</div>
								<div className="content">
									<h3>Introduction</h3>
									<p>DeFi infrastructure layer for Cosmos ecosystem</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Modal;
