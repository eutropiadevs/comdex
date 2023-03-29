import React from 'react'
import shield from '../../assets/img/shield.png'
import './index.scss'

const RowReverse = () => {
  return (
		<>
			<div className="rowreverse-section">
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
			</div>
		</>
	);
}

export default RowReverse
