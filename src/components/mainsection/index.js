import React from 'react'
import './index.scss'

const MainSection = ({title, text, img}) => {
  return (
		<>
			<div className="mainsection">
				<div className="mainsection-sub">
					<div className="mainsection-sub_first">
						<h1>{title}</h1>
						<p>
							{text}
						</p>
					</div>
					<div className='ecosystem'>
                        <img src={img} alt='img'/>
                    </div>
				</div>
			</div>
		</>
	);
}

export default MainSection
