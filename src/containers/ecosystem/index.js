import React from 'react'
import MainSection from '../../components/mainsection'
import logo from '../../assets/img/eco.png'
import'./index.scss'
import EcoCard from '../../components/ecoCard'
import Footer from '../../components/footer'
import StakeCard from '../../components/stake'
import { stake } from '../../utils/stakeData'
import star from '../../assets/img/star.png'
import redright from '../../assets/img/redright.png'
import blue from '../../assets/img/blue.png'
import circles from '../../assets/img/circles.png'
import redeco from '../../assets/img/redeco.png'
import bluef from '../../assets/img/bluef.png'


const EcoGlobal = () => {
  return (
		<>
			<div className="ecoGlobal-section">
				<img src={star} alt="img" className="star" />
				<img src={redright} alt="img" className="redright" />
				<img src={blue} alt="img" className="blue" />
				<img src={circles} alt="img" className="circles" />
				<img src={redeco} alt="img" className="redeco" />
				<img src={bluef} alt="img" className="bluef" />
				<MainSection
					title={"Comdex Ecosystem"}
					img={logo}
					text={`Explore Comdex's ecosystem of products and integrations and join the community to be a part of it all.`}
				/>

				<EcoCard />
				<div className="ecoGlobal-section_sub">
					{stake.map((item) => {
						return <StakeCard {...item} />;
					})}
				</div>
				{/* <div>
				{simple.map((item) => {
					return <RowReverse {...item} key={item.id} />;
				})}
			</div>

			<MainSection />
			<EcoCard />
			{simple.map((item) => {
				return <RowReverse {...item} key={item.id} />;
			})} */}

				{/* {item.map((item) => {
				return <RowReverse {...item} key={item.id} />;
			})} */}
				<Footer />
			</div>
		</>
	);
}

export default EcoGlobal
