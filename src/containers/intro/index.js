import React from 'react'
import EcoCard from '../../components/ecoCard';
import Footer from '../../components/footer';
import MainSection from '../../components/mainsection';
import Plug from '../../components/plug';
import RowReverse from '../../components/rowReverse';
import StakeCard from '../../components/stake';
import Validator from '../../components/validators';
import { card } from '../../utils/Items';
import { item, simple } from '../../utils/section';
import './index.scss'

const Introduction = () => {
  return (
		<>
			<div className="introduction-section">
				<div className="introduction-section_main">
					<h1>Welcome to Comdex</h1>
					<p>
						Comdex is an Interchain DeFi infrastructure layer to build
						application to power DeFi in the Cosmos ecosystem and beyond by
						utilising on-chain modules of the prevailing primitives in the
						worlds of DeFi and Finance.
					</p>

					<button>Learn More</button>
				</div>
			</div>
		{item.map(item=>{
			return <RowReverse {...item}/>
		})}
			<Validator />
			<Plug />
			<div className="stake-cards">
				{card.map((item) => {
					return <StakeCard key={item.id} {...item} />;
				})}
			</div>
			<Footer/>
		</>
	);
}

export default Introduction
