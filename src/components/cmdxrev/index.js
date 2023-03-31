import React from 'react'
import './index.scss'

const Rowcmdx = ({id, title, text, img , btn}) => {
  return (
		<>
			<div className="cmdxrowreverse-sections">
				<div className="cmdxrowreverse-section_first">
					<div className="first-flex">
						<h3>{`0${id}`}</h3>
						<div className="cmdxtitle">
							<h2>{title}</h2>
							<p>{text}</p>
							<button className="btn">{btn}</button>
						</div>
					</div>
				</div>
				<div className="cmdxrowreverse-section_second">
					<img src={img} alt="img" />
				</div>
			</div>
		</>
	);
}

export default Rowcmdx
