import React from "react";
import "./index.scss";
import { Data } from "../../utils/DataInt";
import CardTrans from "../../components/trans-card";
import Ecosystem from "../../components/allEcosystem";
import Row from "../../components/row";
import Validator from "../../components/validators";
import Icons from "../../components/icons";

const Home = () => {
  return (
		<>
			<div className="hero">
				<div className="hero-section">
					<h1>
						Interchain DeFi <br />
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
					return <CardTrans {...item} />;
				})}
			</div>
			<Ecosystem />
			<Row />
			<Icons />
			<Validator />
		</>
	);
};

export default Home;
