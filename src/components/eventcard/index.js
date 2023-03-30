import React from 'react'
import over from '../../containers/event/over.png'
import './index.scss'

const EveCard = () => {
  return (
		<>
			<div className='eve-section'> 
				<div className="flex-content flex-card">
					<img src={over} alt="img" />
					<div>
						<h5>Coming to Istanbul in 2023</h5>
						<h2>The legendary Cosmos Conference</h2>
						<p>
							We consider Istanbul a giant opportunity for Cosmos and are very
							excited to bring Cosmoverse to Türkiye and its 8 million potential
							users.
						</p>
						<p>
							For more details & updates, follow us on Twitter and join our
							Telegram community chat: hhtp.hbububjh...
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default EveCard
