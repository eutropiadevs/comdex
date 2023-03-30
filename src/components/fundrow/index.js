import React from 'react'
import './index.scss'

const FundRow = ({id, title, text, img, revtitle, revtext, revimg}) => {
   
  return (
		<>
			<div className="fundrow-section">
				<div className="fundrow-section_row">
					<img src={img} alt="img" />
					<div>
						<h2>{title}</h2>
						<p>{text}</p>
					</div>
				</div>
				<div className="fundrow-section_rowreverse">
					<img src={revimg} alt="img" />
					<div>
						<h2>{revtitle}</h2>
						<p>{revtext}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default FundRow
