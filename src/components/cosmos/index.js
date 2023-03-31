import React from 'react'
import './index.scss'
import circle from './circles.png'
import icon from '../../assets/img/arrow.png'

const Cosmos = () => {
  return (
		<>
			<div className="cosmos-section">
				<div className="cosmos-section_intro">
					<h2>Introduction to Cosmos</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad miea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>
				<div className='cards-flex'>
					<div className="cosmos-section_cards">
						<div className="cosmos-section_card">
							<img src={circle} alt="circle" className="circle" />
							<h2>What is Cosmos</h2>
							<div>
								<ul style={{ listStyle: "none" }}>
									<li>Introduction to Cosmos SDK</li>
									<li>Building a Basic Cosmos Application</li>
									<li>Interoperability with Cosmos Hub</li>
									{/* <li>Introduction to Cosmos SDK</li> */}
									{/* Additional list items */}
								</ul>
							</div>
							<div className="btn-section">
								<strong>LEARN MORE</strong>
								<img src={icon} alt="img" />
							</div>
						</div>
					</div>
					<div className="cosmos-section_cards">
						<div className="cosmos-section_card">
							<img src={circle} alt="circle" className="circle" />
							<h2>What is Cosmos</h2>
							<div>
								<ul style={{ listStyle: "none" }}>
									<li>Introduction to Cosmos SDK</li>
									<li>Building a Basic Cosmos Application</li>
									<li>Interoperability with Cosmos Hub</li>
									{/* <li>Introduction to Cosmos SDK</li> */}
									{/* Additional list items */}
								</ul>
							</div>
							<div className="btn-section">
								<strong>LEARN MORE</strong>
								<img src={icon} alt="img" />
							</div>
						</div>
					</div>

					<div className="cosmos-section_cards">
						<div className="cosmos-section_card">
							<img src={circle} alt="circle" className="circle" />
							<h2>What is Cosmos</h2>
							<div>
								<ul style={{ listStyle: "none" }}>
									<li>Introduction to Cosmos SDK</li>
									<li>Building a Basic Cosmos Application</li>
									<li>Interoperability with Cosmos Hub</li>
									{/* <li>Introduction to Cosmos SDK</li> */}
									{/* Additional list items */}
								</ul>
							</div>
							<div className="btn-section">
								<strong>LEARN MORE</strong>
								<img src={icon} alt="img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cosmos
