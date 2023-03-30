import React from 'react'
import MainSection from '../../components/mainsection'
import main from '../developer/main.png'
import { table } from '../../utils/DataInt'
import Secure from '../../components/secure'
import FundRow from '../../components/fundrow'
import { fund } from '../../utils/section'

const Fund = () => {
  return (
		<>
			<div className="fund-section">
				<MainSection
					title={"Community Dev Fund"}
					text={`Funding projects that help expand the Comdex ecosystem of products.`}
					img={main}
				/>

				<div className="cards-section_main">
					{table.map((item) => {
						return <Secure key={item.id} {...item} />;
					})}
				</div>

               <div>
                {fund.map(item=>{
                    return <FundRow key={item.id} {...item}/>
                })}
               </div>
			</div>
		</>
	);
}

export default Fund
