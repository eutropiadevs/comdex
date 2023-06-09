import React from "react";
import { useState } from "react";
import "./index.scss";
import intro from "../../assets/img/intro.png";
import { Link, NavLink } from "react-router-dom";

const Modal = ({ btn, data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isIndividual, setIsIndividual] = useState(true);
	// const [isDeveloper, setIsDeveloper] = useState(false);
	// const [isEcosystem, setIsEcosystem] = useState(false);
	


	const handleOpenModal = (e) => {
		e.preventDefault();
		setIsModalOpen(true);
	};
	const handleIndividual = () => {
		setIsIndividual(false);
	};

	function display(e) {
		handleCloseModal(e);
		handleIndividual();
	}

	const handleCloseModal = (e) => {
		e.preventDefault();
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="modal-btn">
				<NavLink className="navlink" onClick={handleOpenModal}>
					{btn}
				</NavLink>
				<div className="open-modal">
					{isModalOpen && btn === `Indiviual` && (
						<div
							className={
								isIndividual ? "open-modal_section" : "open-modal_section"
							}
							onClick={handleCloseModal}
						>
							<span onClick={handleCloseModal}>&#9747;</span>
							<div className="open-modal_section-title">
								<h4>Individuals</h4>
								<h4>Developers</h4>
								<h4>Ecosystem</h4>
							</div>
							{data.map((item) => {
								return (
									<Link
										to={`/${item.place}`}
										className="open-modal_section-sub first navlink"
									>
										<div className="img">
											<img src={intro} alt="img" />
										</div>
										<div className="content">
											<h3>{item.title}</h3>
											<p>{item.text}</p>
										</div>
									</Link>
								);
							})}
						</div>
					)}

					{isModalOpen && btn === `Developer` && (
						<div className="open-modal_section" onClick={display}>
							<span onClick={handleCloseModal}>&#9747;</span>
							<div className="open-modal_section-title">
								<h4>Individuals</h4>
								<h4>Developers</h4>
								<h4>Ecosystem</h4>
							</div>
							{data.map((item) => {
								return (
									<Link
										to={`/${item.place}`}
										className="open-modal_section-sub first navlink"
									>
										<div className="img">
											<img src={intro} alt="img" />
										</div>
										<div className="content">
											<h3>{item.title}</h3>
											<p>{item.text}</p>
										</div>
									</Link>
								);
							})}
						</div>
					)}

					{isModalOpen && btn === `Ecosystem` && (
						<div className="open-modal_section" onClick={handleCloseModal}>
							<span onClick={handleCloseModal}>&#9747;</span>
							<div className="open-modal_section-title">
								<h4>Individuals</h4>
								<h4>Developers</h4>
								<h4>Ecosystem</h4>
							</div>

							{data.map((item) => {
								return (
									<Link
										to={`/${item.place}`}
										className="open-modal_section-sub first navlink"
									>
										<div className="img">
											<img src={intro} alt="img" />
										</div>
										<div className="content">
											<h3>{item.title}</h3>
											<p>{item.text}</p>
										</div>
									</Link>
								);
							})}

							{/* <Link to="/introduction" className="open-modal_section-sub first navlink">
								<div className="img">
									<img src={intro} alt="img" />
								</div>
								<div className="content">
									
										 <h3>{item.title}</h3>;
									
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
							</div> */}
						</div>
					)}
				</div>
			</div>
			{/* <div className="tabs__content">
				{activeTab === 0 && <ModalIntro />}
				{activeTab === 1 && <p>Content for Tab 2</p>}
				{activeTab === 2 && <p>Content for Tab 3</p>}
			</div> */}
		</>
	);
};

export default Modal;
