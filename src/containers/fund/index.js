import React from 'react'
import MainSection from '../../components/mainsection'
import main from '../developer/main.png'
import { table } from '../../utils/DataInt'
import Secure from '../../components/secure'
import FundRow from '../../components/fundrow'
import { fund, fund2} from '../../utils/section'
import { fundrev } from '../../utils/row'
import FundTitle from './title'
import ProcessFund from './process'
import './index.scss'
import EcoCard from '../../components/ecoCard'
import StakeCard from '../../components/stake'
import { stake } from '../../utils/stakeData'
import Footer from '../../components/footer'


const Fund = () => {
	console.log(fundrev)
  return (
		<>
			<div className="fund-section">
				<MainSection
					title={"Community Dev Fund"}
					text={`Funding projects that help expand the Comdex ecosystem of products.`}
					img={main}
				/>

				<div className="cards-section_main">
					{table.map((item) => {
						return <Secure key={item.id} {...item} />;
					})}
				</div>

				<div>
					<FundTitle
						text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
						title={`What are we looking for`}
					/>
					{fund.map((item) => {
						return <FundRow key={item.id} {...item} />;
					})}

					{fund2.map((item) => {
						return <FundRow key={item.id} {...item} />;
					})}
				</div>
				<div>
					<FundTitle
						title={`The Process`}
						text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
					/>
					<ProcessFund />
					<div className="btn-fund">
						<button>Apply</button>
					</div>
				</div>
				<div>
					<FundTitle
						title={`Eligible Projects`}
						text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
					/>
					<div className="mt">
						<EcoCard />
						<EcoCard />
						<EcoCard />
					</div>
					<div className="btn">
						<button>View All</button>
					</div>
				</div>
				<div className="stake-cards">
					{stake.map((item) => {
						return <StakeCard key={item.id} {...item} />;
					})}
				</div>
				<Footer/>
			</div>
		</>
	);
}

export default Fund
