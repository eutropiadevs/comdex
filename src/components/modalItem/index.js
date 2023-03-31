import React from 'react'
import intro from "../../assets/img/intro.png";
import { Link} from "react-router-dom";

const ModalIntro = () => {
  return (
		<>	
				
				<Link to="/introduction" className="open-modal_section-sub navlink">
					<div className="img">
						<img src={intro} alt="img" />
					</div>
					<div className="content">
						{/* {data.map((item) => {
							return <h3>{item.title}</h3>;
						})} */}
						<p>DeFi infrastructure layer for Cosmos ecosystem</p>
					</div>
				</Link>
				<div className="open-modal_section-sub">
					<div className="img">
						<img src={intro} alt="img" />
					</div>
					<div className="content">
						<h3>Introduction</h3>
						<p>DeFi infrastructure layer for Cosmos ecosystem</p>
					</div>
				</div>
				<div className="open-modal_section-sub">
					<div className="img">
						<img src={intro} alt="img" />
					</div>
					<div className="content">
						<h3>Introduction</h3>
						<p>DeFi infrastructure layer for Cosmos ecosystem</p>
					</div>
				</div>

		</>
	);
}

export default ModalIntro
