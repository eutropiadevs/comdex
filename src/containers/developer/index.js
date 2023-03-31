import React from "react";
import MainSection from "../../components/mainsection";
import github from "../../assets/img/git.png";
import StakeCard from "../../components/stake";
import arrowside from "../../assets/img/arrowside.png";
import main from "./main.png";
import './index.scss'
import Cosmos from "../../components/cosmos";
import { data } from "../../utils/Items";
import ComdexCard from "../../components/comdexCard";
import Footer from "../../components/footer";
// import blue from '../getcmdx/blue.png'
import redeco from '../../assets/img/redeco.png'
import blue from "../../assets/img/blue.png";
import circles from "../../assets/img/circles.png";
import bluef from '../../assets/img/bluef.png'

const Portal = () => {
	const card = [
		{
			id: 1,
			icon: github,
			title: "Documentation",
			text: "Discuss & learn with other the community",
			small: arrowside,
		},
		{
			id: 2,
			icon: github,
			title: "Github",
			text: "Get the codes in one place",
			small: arrowside,
		},
		{
			id: 3,
			icon: github,
			title: "Developer Chat",
			text: "Discuss & learn with other the team",
			small: arrowside,
		},
	];

	return (
		<>
			<div className="portal-section">
				<img src={blue} alt="img" className="blue"/>
				<img src={redeco} alt="img" className='redeco'/>
				<img src={circles} alt="img" className="circles"/>
				<img src={bluef} alt="img" className="bluef"/>
				<MainSection
					title={`Developers Portal`}
					text={`Comdex is a lightning fast blockchain optimised for building financial applications. Rapidly create massively scalable dApps with novel Web3 modules, ultra low fees and unmatched capital efficiency.`}
					img={main}
				/>
				<div className="portal-section_cards">
					{card.map((item) => {
						return <StakeCard {...item} />;
					})}
				</div>
				<Cosmos />
				<Cosmos />
				<Cosmos />
				<Cosmos />
				<div className="portal-section_comdex">
					<h1>Related Blogs</h1>
					<div className="comCards-section">
						{data.map((item) => {
							return <ComdexCard key={item.id} {...item} />;
						})}
					</div>
				</div>

                <Footer/>
			</div>
		</>
	);
};

export default Portal;
