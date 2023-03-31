import React from 'react'
import './index.scss'

const RowReverse = ({id, title, text, img, btn}) => {
  console.log(title)
  return (
		<>
			{/* <div className="rowreverse-section">
				<div className="rowreverse-section_first">
					<h2>Secure</h2>
					<p>
						Build secure DeFi applications by leveraging the security of the
						Comdex chain, powered by the CMDX token. Built using Cosmos SDK and
						Cosmwasm, users can utilise modules on the Comdex chain to
						seamlessly deploy dApps to the chain.
					</p>
				</div>
				<div className="rowreverse-section_second">
					<img src={shield} alt="img" />
				</div>
			</div>

			<div className="rowreverse-sections">
				<div className="rowreverse-sections_first">
					<h2>Secure</h2>
					<p>
						Build secure DeFi applications by leveraging the security of the
						Comdex chain, powered by the CMDX token. Built using Cosmos SDK and
						Cosmwasm, users can utilise modules on the Comdex chain to
						seamlessly deploy dApps to the chain.
					</p>
				</div>
				<div className="rowreverse-sections_second">
					<img src={shield} alt="img" />
				</div>
			</div> */}

			<div className="cmdxrowreverse-section">
				<div className="cmdxrowreverse-section_first">
					<div className="first-flex">
						<h3>{`0${id}`}</h3>
						<div className="cmdxtitle">
							<h2>{title}</h2>
							<p>{text}</p>
							<button className='btn'>{btn}</button>
						</div>
					</div>
				</div>
				<div className="cmdxrowreverse-section_second">
					<img src={img} alt="img" />
				</div>
			</div>

			{/* <div className="rowreverse-sections">
				<div className="rowreverse-sections_first">
					<div className="first-flex">
						<h3>{`0${id}`}</h3>
						<div className="title">
							<h2>{title}</h2>
							<p>{text}</p>
						</div>
					</div>
				</div>
				<div className="rowreverse-sections_second">
					<img src={img} alt="img" />
				</div>
			</div> */}
		</>
	);
}

export default RowReverse
