import React from 'react'
import './index.scss'

const StakeCard = ({ id, title, icon, small, text }) => {
	return (
		<>
			<div className="stakecard-section" key={id}>
				<div className="img">
					<img src={icon} alt="img" />
				</div>
				<div className="stakecard-section_sub">
					<div className="flex">
						<h5>{title}</h5>
						<span>
							<img src={small} alt="img" />
						</span>
					</div>

					<p>{text}</p>
				</div>
			</div>
		</>
	);
};

export default StakeCard
