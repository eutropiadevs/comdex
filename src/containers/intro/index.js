import React from 'react'
import Footer from '../../components/footer';
import Plug from '../../components/plug';
import RevIntro from '../../components/revintro';
import RowIntro from '../../components/rowintro';
import StakeCard from '../../components/stake';
import Validator from '../../components/validators';
import { rev, row1, row2 } from '../../utils/row';
import { stake } from '../../utils/stakeData';
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
			
		{row1.map(item=>{
			return <RowIntro key={item.id} {...item}/>
		})}
		{rev.map(item=>{
			return <RevIntro key={item.id} {...item}/>
		})}
		{row2.map(item=>{
			return <RowIntro key={item.id} {...item}/>
		})}
		
			<Validator />
			<Plug />
			<div className="stake-cards">
				{stake.map((item) => {
					return <StakeCard key={item.id} {...item} />;
				})}
			</div>
			<Footer/>
		</>
	);
}

export default Introduction
