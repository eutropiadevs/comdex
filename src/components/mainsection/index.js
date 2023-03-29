import React from 'react'
import './index.scss'
import logo from '../../assets/img/eco.png'

const MainSection = () => {
  return (
		<>
			<div className="mainsection">
				<div className="mainsection-sub">
					<div className="mainsection-sub_first">
						<h1>Comdex Ecosystem</h1>
						<p>
							Explore Comdex's ecosystem of products and integrations and join
							the community to be a part of it all.
						</p>
					</div>
					<div className='ecosystem'>
                        <img src={logo} alt='img'/>
                    </div>
				</div>
			</div>
		</>
	);
}

export default MainSection
