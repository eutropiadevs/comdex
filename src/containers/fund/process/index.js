import React from "react";
import './index.scss'

const ProcessFund = () => {
	const process = [
		{
			id: 1,
			text: `Forum Discussion`,
		},
		{
			id: 2,
			text: `On Chain Proposal`,
		},
		{
			id: 3,
			text: `Milestone based vesting of tokens `,
		},
	];
	return (
		<>
			<div className="processfund-section">
				{process.map(item=>{
                    return <div className="processfund-section_single" key={item.id}>
                        <h1>{`0${item.id}`}</h1>
                        <h4>{item.text}</h4>
                    </div>
                })}
			</div>
		</>
	);
};

export default ProcessFund;
