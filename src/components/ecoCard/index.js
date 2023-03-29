import React from 'react'
import ell from '../../assets/img/Ellipse 1.png'
import live from '../../assets/img/live.png'
import './index.scss'

const EcoCard = () => {
  return (
		<>
			<div className="ecocard-section">
				<div className="ecocard-section_main">
					<img src={ell} alt="img" className="img" />
					<h3>cSwap</h3>
					<p className="para">
						cSwap is an IBC-enabled hybrid dex built on the Comdex chain. cSwap
						uses AMM liquidity pools which bring cross-chain markets and limit
						orders to DeFi. Through this mechanism, cSwap will be a go-to
						platform for traders and arbitrageurs, enabling them to implement
						sophisticated trading strategies.
					</p>
					<div className="absolute">
						<p>Lending & Borrowing</p>

						<img src={live} alt="live" />
					</div>
				</div>
			</div>
		</>
	);
}

export default EcoCard
