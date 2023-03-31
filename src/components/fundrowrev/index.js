import React from 'react'
import './index.scss'

const FundRev = ({id,img, title, text}) => {
  return (
		<>
			<div className="fundrow-sections">
				<div className="fundrow-sections_rowreverse">
					<img src={img} alt="img" />
					<div>
						<h2>{title}</h2>
						<p>{text}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default FundRev
