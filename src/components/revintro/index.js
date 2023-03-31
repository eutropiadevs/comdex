import React from 'react'
import './index.scss'

const RevIntro = ({title, text, img}) => {
  return (
		<>
			<div className="rowreverse-sections">
				<div className="rowreverse-sections_first">
					<div className="first-flex">
						{/* <h3>{`0${id}`}</h3> */}
						<div className="title">
							<h2>{title}</h2>
							<p>{text}</p>
						</div>
					</div>
				</div>
				<div className="rowreverse-sections_second">
					<img src={img} alt="img" />
				</div>
			</div>
		</>
	);
}

export default RevIntro
