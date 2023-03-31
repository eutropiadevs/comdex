import React from 'react'
import './index.scss'
import img1 from './comdex.png'
import img2 from './comdex2.png'
import over from '../over.png'
import icon from '../../../assets/img/arrowside.png'


const EventCard = () => {
    const imgs = [
        {
            id: 1,
            img: over,
        },
        {
            id: 2,
            img: img1,
        },
        {
            id: 3,
            img: over,
        },
        {
            id: 4,
            img: img2,
        }
    ]
  return (
		<>
			<div className="sections">
				<h2 className="heading">Past Events</h2>
				<div className="eventcard-section">
					{/* <div className="flex-content">
					<img src={over} alt="img" className="img" />
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
						<div className="btn-section">
							<strong>LEARN MORE</strong>
							<img src={icon} alt="img" />
						</div>
					</div>
				</div> */}
					{imgs.map((item) => {
						return (
							<div className="flex-contents">
								<img src={item.img} alt="img" className="img" />
								<div className="flex-contents_sub">
									<h5>Coming to Istanbul in 2023</h5>
									<h2>The legendary Cosmos Conference</h2>
									<p>
										We consider Istanbul a giant opportunity for Cosmos and are
										very excited to bring Cosmoverse to Türkiye and its 8
										million potential users.
									</p>
									<p>
										For more details & updates, follow us on Twitter and join
										our Telegram community chat: hhtp.hbububjh...
									</p>
									<div className="btn-section">
										<strong>LEARN MORE</strong>
										<img src={icon} alt="img" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default EventCard
