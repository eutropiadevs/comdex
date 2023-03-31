import React from "react";
import "./index.scss";
import { Data } from "../../utils/DataInt";
import CardTrans from "../../components/trans-card";
import Ecosystem from "../../components/allEcosystem";
import Row from "../../components/row";
import Validator from "../../components/validators";
import Icons from "../../components/icons";
import Cards from "../../components/cards";
import Company from "../../components/company";
import ComCards from "../../components/comCards";
import Community from "../../components/community";
import Mission from "../../components/mission";
import Footer from "../../components/footer";
import bgred from '../../assets/img/bgred.png';
import bgblue from '../../assets/img/bgblue.png';
import blueeco from "../../assets/img/blueeco.png";
import redeco from '../../assets/img/redeco.png';
import bgsmall from '../../assets/img/bgsmall.png'

const Home = () => {
  return (
		<>
			<div className="hero">
				{/* <div className="background"> */}
					<img src={bgred} alt='bg-img' className="bg-red"/>
					<img src={bgblue} alt='bg-img' className="bg-blue"/>
					<img src={blueeco} alt='bg-img' className="blue-eco"/>
					<img src={redeco} alt='bg-img' className="red-eco"/>
					<img src={bgsmall} alt='bg-img' className="bgsmall"/>
					{/* <img src={bluef} alt='bg-img' className="bluef"/> */}
				{/* </div> */}
				<div className="hero-section">
					<h1>
						Interchain DeFi <br />
						</h1>
						<h1 className="h1">
						Infrastructure
					</h1>
					<p>
						Comdex is an Interchain DeFi infrastructure layer housing a suite of
						composable solutions
						<br /> on-chain.
					</p>
					<div className="btn">
						<button>Explore</button>
					</div>
				</div>
			</div>
			<div className="cards">
				{Data.map((item) => {
					return <CardTrans key={item.id} {...item} />;
				})}
			</div>
			<Ecosystem />
			<Row />
			<Icons />
			<Validator />
      <Cards/>
      <Company/>
      <ComCards/>
	  <Community/>
	  <Mission/>
	  <Footer/>
		</>
	);
};

export default Home;
