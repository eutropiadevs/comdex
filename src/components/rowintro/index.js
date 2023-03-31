import React from 'react'
import './index.scss'

const RowIntro = ({title, text, img}) => {
  return (
		<>
			<div className="rowreverse-section">
				<div className="rowreverse-section_first">
					<div className="first-flex">
						{/* <h3>{`0${id}`}</h3> */}
						<div className="title">
							<h2>{title}</h2>
							<p>{text}</p>
						</div>
					</div>
				</div>
				<div className="rowreverse-section_second">
					<img src={img} alt="img" />
				</div>
			</div>
		</>
	);
}

export default RowIntro
