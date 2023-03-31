import React from "react";
import MainSection from "../../components/mainsection";
import logo from "../../assets/img/cmdx.png";
import RowReverse from "../../components/rowReverse";
import { idrev, idrev2, idrow1, idrow2 } from "../../utils/row";
import Rowcmdx from "../../components/cmdxrev";
import './index.scss'
import { stake } from "../../utils/stakeData";
import StakeCard from "../../components/stake";
import Footer from "../../components/footer";
import star from './star.png'
import blue from './blue.png'

const GetCmxd = () => {
	return (
		<>
			<div className="getcmdx-section">
				{/* <img src={bluef} alt='bluef' className="bluef"/> */}
				<img src={blue} alt='bluef' className="blue"/>
				<img src={star} alt='star' className="star"/>
				<MainSection title={"Get CMDX and Stake"} img={logo} />

				<div>
					{/* {simple.map((item) => {
					return <RowReverse {...item} key={item.id} />;
				})} */}
					{idrow1.map((item) => {
						return <RowReverse key={item.id} {...item} />;
					})}
					{idrev.map((item) => {
						return <Rowcmdx key={item.id} {...item} />;
					})}
					{idrow2.map((item) => {
						return <RowReverse key={item.id} {...item} />;
					})}
					{idrev2.map((item) => {
						return <Rowcmdx key={item.id} {...item} />;
					})}
				</div>
				<div className="stake-cards">
					{stake.map((item) => {
						return <StakeCard key={item.id} {...item} />;
					})}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default GetCmxd;
