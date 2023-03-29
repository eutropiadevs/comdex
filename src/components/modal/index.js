import React from "react";
import { useState } from "react";
import "./index.scss";

const Modal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function handleOpenModal() {
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		setIsModalOpen(false);
	}

	return (
		<>
			<div className="modal-btn">
				<button onClick={handleOpenModal}>Connect</button>
				<div className="open-modal">
					{isModalOpen && (
						<div className="open-modal_section">
							<button onClick={handleCloseModal}>&#9747;</button>
                            <div className="open-modal_section-title">
                                <h4>Individuals</h4>
                                <h4>Developers</h4>
                                <h4>Ecosystem</h4>
                            </div>
                            <div></div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Modal;
