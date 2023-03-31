import React from 'react'
import MainSection from '../../components/mainsection'
import main from './../blog/planet.png'
import over from './over.png'
import './index.scss'
import StakeCard from '../../components/stake'
import { stake } from '../../utils/stakeData'
import Footer from '../../components/footer'
import icon from '../../assets/img/arrowside.png'
import EventCard from './eventcard'

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
					<h2 className="heading">Upcoming Events</h2>
					<div className="flex-content">
						<img src={over} alt="img" className="img" />
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
							<div className="btn-section">
								<strong>LEARN MORE</strong>
								<img src={icon} alt="img" />
							</div>
						</div>
					</div>
				</div>

				<EventCard />
				{/* <div className="eveCard">
					<EveCard />
					<EveCard />
				</div> */}
				<div className="stake-cards">
					{stake.map((item) => {
						return <StakeCard key={item.id} {...item} />;
					})}
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Event
