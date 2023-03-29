import React from 'react'
import './index.scss'

const ComunityCard = ({id, title, icon, small, text}) => {
  return (
		<>
			<div className="communitycard-section" key={id}>
				<div className="img">
					<img src={icon} alt="img" />
				</div>
				<div className="communitycard-section_sub">
					<div className='flex'>
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
}

export default ComunityCard
