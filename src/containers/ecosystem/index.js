import React from 'react'
import MainSection from '../../components/mainsection'
import logo from '../../assets/img/eco.png'
import'./index.scss'
import EcoCard from '../../components/ecoCard'
import Footer from '../../components/footer'
import { card } from '../../utils/Items'
import StakeCard from '../../components/stake'


const EcoGlobal = () => {
  return (
		<>
			<div className="ecoGlobal-section">
				<MainSection
					title={"Comdex Ecosystem"}
					img={logo}
					text={`Explore Comdex's ecosystem of products and integrations and join the community to be a part of it all.`}
				/>

				<EcoCard />

        {card.map(item=>{
          return <StakeCard {...item}/>
        })}
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
