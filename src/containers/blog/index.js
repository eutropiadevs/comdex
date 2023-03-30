import React from 'react'
import MainSection from '../../components/mainsection'
import './index.scss'
import logo from './planet.png'
import main from './main.png'
import icon from '../../assets/img/arrow.png'
import { FaAngleDoubleRight } from "react-icons/fa";
import claim from './claim.png'
import Footer from '../../components/footer'

const Blog = () => {
  return (
		<>
			<div className="blog-section">
				<MainSection
					title={"Blogs"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
					img={logo}
				/>
				<div className="blog-section_main">
					<img src={main} alt="main" className="img" />
					<div>
						<p>Dec 5, 2022</p>
						<h1>How $ATOM stakers can claim $HARBOR Airdrop?</h1>
						<p>
							Harbor protocol is an Interchain stablecoin protocol on the Comdex
							chain (powered by the Cosmos SDK and CosmWasm smart contracts)
							that enables safe listed assets to be locked in Vaults and mint
							the $CMST stablecoin. $CMST is a stablecoin built to power DeFi in
							the Cosmos & beyond.
						</p>
						<div className="btn-section">
							<strong>LEARN MORE</strong>
							<img src={icon} alt="img" />
						</div>
					</div>
				</div>

				<div className="airdrop">
					<div>
						<h2>AIRDROP IS LIVE!</h2>
						<p>
							Complete the mission, do magic transaction and claim your
							Airdrop...
						</p>
                        <div className='claim-text'><span><FaAngleDoubleRight/></span>Claim Now</div>
					</div>
					<div>
                        <img src={claim} alt='claim'/>
                    </div>
				</div>

                <Footer/>
			</div>
		</>
	);
}

export default Blog
