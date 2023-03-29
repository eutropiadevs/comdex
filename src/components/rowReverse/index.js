import React from 'react'
import shield from '../../assets/img/shield.png'

const RowReverse = () => {
  return (
		<>
			<div className="rowreverse-section">
				<div>
					<h2>Secure</h2>
					<p>
						Build secure DeFi applications by leveraging the security of the
						Comdex chain, powered by the CMDX token. Built using Cosmos SDK and
						Cosmwasm, users can utilise modules on the Comdex chain to
						seamlessly deploy dApps to the chain.
					</p>
				</div>
        <div>
          <img src={shield}  alt='img'/>
        </div>
			</div>
		</>
	);
}

export default RowReverse
