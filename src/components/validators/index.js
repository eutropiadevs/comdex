import React from "react";
import Head from "../title";
import "./index.scss";
import main from "../../assets/img/Group 633019.png";
import { image } from "../../utils/DataInt";
import rect from "../../assets/img/Rectangle 6985.png";

const Validator = () => {
  return (
		<>
			<div className="validator-section">
				<Head title={"Powering Comdex"} head={"TECHNOLOGY"} />
				<div className="validator-section_main">
					<div className="validator-section_main-first">
						<img src={main} alt="img" className="img" />
						<h2>
							Built on Cosmos SDK
							<br />
							<span>&</span>
							<br />
							Interoperable Smart Contracts{" "}
						</h2>
						<p>
							IBC-enabled DeFi infrastructure Layer for building an
							interoperable ecosystem of solutions
						</p>
						<div className="btn">
							<button>Learn More</button>
						</div>
					</div>
					<div className="vertical-line"></div>
					<div className="validator-section_main-second">
						<div className="validates">
							<h5>Validators</h5>
							<hr />
						</div>
						<div className="validator-img">
							{image.map((item) => {
								return (
									// <div key={item.id} className="image">
									<img src={item.src} alt="img" className="image" key={item.id}/>
									// </div>
								);
							})}
						</div>
						<h5>+42 More</h5>

						<div className="validates">
							<h5>Security Audits</h5>
							<hr />
						</div>
						<img src={rect} alt="img" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Validator;
