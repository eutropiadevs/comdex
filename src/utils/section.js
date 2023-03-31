import blocks from "../assets/img/blocks.png";
import secure from '../assets/img/secure.png'
import bridge from './bridge.png'
// import cardfund from './cardfund.png'
import fundsec from './fundsec.png'

export const simple = [
	{
		id: 1,
        num: 1,
		title: "Get CMDX using one of the many cryptocurrency exchanges.",
		text: `Access the CMDX token from one of the several DEXes where CMDX is currently available.`,
		img: blocks,
	},
	{
		id: 2,
		title: "Get CMDX using one of the many cryptocurrency exchanges.",
		text: `Access the CMDX token from one of the several DEXes where CMDX is currently available.`,
		img: blocks,
	},
];
export const simpleReverse = [
	{
		id: 1,
		title: "Get CMDX using one of the many cryptocurrency exchanges.",
		text: `Access the CMDX token from one of the several DEXes where CMDX is currently available.`,
		img: blocks,
	},
];

export const item = [
	{
		id: 1,
		title: "Secure",
		text: `Build secure DeFi applications by leveraging the security of the Comdex chain, powered by the CMDX token. Built using Cosmos SDK and Cosmwasm, users can utilise modules on the Comdex chain to seamlessly deploy dApps to the chain.
               `,
        img: secure,
	},
];


export  const fund = [
	{
		id: 1,
		title: `CMST Stablecoin use cases`,
		text: `Be a part of a vibrant DeFi ecosystem, powered by the Composite (CMST) stablecoin. Build DEXes, Money Markets, Asset Management tools, Derivatives, Payments and much more!`,
		img: bridge,
	},
];

// export const fundrev = [
// 	{
// 		id: 2,
// 		revtitle: `DeFi and CeFi Bridging`,
// 		revtext: `Use Comdex's chain infrastructure to build interoperable solutions that help integrate CeFi use cases and RWAs with DeFi primitives for global accessibility.`,
// 		revimg: cardfund,
// 	},
// ];
export const fund2 = [
	{
		id: 3,
		title: `Infrastructure & Tooling`,
		text: `Contribute to Comdex's ecosystem by critical building infrastructure and tooling.`,
		img: fundsec,
	},
];