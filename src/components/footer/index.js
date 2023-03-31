import React from "react";
import logo from "../../assets/img/logo.png";
import "./index.scss";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
// import { FaMediumM } from "react-icons/fa";``
// import bluef from '../../assets/img/bluef.png'

const Footer = () => {
	const item = [
		{
			id: 1,
			title: `dApps`,
			text: ["cSwap", "Commodo", "Harbor", "Ez Staking"],
		},
		{
			id: 2,
			title: `Resource`,
			text: ["cSwap", "Commodo", "Harbor", "Ez Staking"],
		},

		{
			id: 3,
			title: `Resource`,
			text: ["cSwap", "Commodo", "Harbor", "Ez Staking"],
		},
		{
			id: 4,
			title: `Resource`,
			text: ["cSwap", "Commodo", "Harbor", "Ez Staking"],
		},
		{
			id: 5,
			title: `Resource`,
			text: ["Question or Feedback?", "We’d love to hear from you"],
		},
	];

	return (
		<>
			<div className="footer-section">
				{/* <img src={bluef} alt='bluef'/> */}
				<hr />
				<div className="footer-section_main">
					<div className="footer-flex">
						<img src={logo} alt="logo" />
						<p>info@comdex.one</p>
					</div>
					{item.map((item) => {
						return (
							<div className="footer-flex" key={item.id}>
								<h3>{item.title}</h3>
								<ul>
									{item.text.map((textItem, index) => (
										<li key={index}>{textItem}</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
				<div className="footer-copy">
					<p>&copy; {new Date().getFullYear()} Comdex. All Rights Reserved.</p>
                    <div className="react-icons fixed">
					<p><FaTwitter/></p>
					<p><FaTelegramPlane/></p>
					<p><FaDiscord/></p>
					<p><FaMediumM/></p>
					<p><FaGithub/></p>
					<p><FaLinkedin/></p>
					<p><FaRegComments/></p>
                    </div>
				</div>
			</div>
		</>
	);
};

// <p>&copy; {new Date().getFullYear()} Your Company Name</p>

export default Footer;
