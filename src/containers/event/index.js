import React from 'react'
import MainSection from '../../components/mainsection'
import main from './../blog/planet.png'
import over from './over.png'
import './index.scss'
import EveCard from '../../components/eventcard'
import Footer from '../../components/footer'

const Event = () => {
  return (
		<>
			<div className="event-section">
				<MainSection
					title={"Events"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					}
					img={main}
				/>
				<div className="event-section_main">
					<h2>Upcoming Events</h2>
					<div className="flex-content">
						<img src={over} alt="img" />
						<div>
							<h5>Coming to Istanbul in 2023</h5>
							<h2>The legendary Cosmos Conference</h2>
							<p>
								We consider Istanbul a giant opportunity for Cosmos and are very
								excited to bring Cosmoverse to Türkiye and its 8 million
								potential users.
							</p>
							<p>
								For more details & updates, follow us on Twitter and join our
								Telegram community chat: hhtp.hbububjh...
							</p>
						</div>
					</div>
				</div>
				<div className='eveCard'>
					<EveCard />
					<EveCard />
				</div>
                <Footer/>
			</div>
		</>
	);
}

export default Event
