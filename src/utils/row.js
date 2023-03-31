import shield from '../assets/img/shield.png'
import composable from '../assets/img/compose.png'
import frame from '../assets/img/Frame.png'
import coin from '../assets/img/coin.png'
import wallet from '../assets/img/wallet.png'
import lock from '../assets/img/lock.png'
import blocks from '../assets/img/blocks.png'
import cardfund from "./cardfund.png";

export const row1 = [
    {
        id: 1,
        title:`Secure`,
        text:`Build secure DeFi applications by leveraging the security of 
        the Comdex chain, powered by the CMDX token. Built using Cosmos SDK and Cosmwasm, 
        users can utilise modules on the Comdex chain to seamlessly deploy dApps to the chain.`,
        img: shield,
    }
]

export const rev = [
	{
		id: 1,
		title: `Dev-Friendly`,
		text: `An all encompassing DeFi focussed chain to ensure all governance and development is designed for optimal synergy between all the application built on the chain.`,
		img: frame,
	},
];

export const row2 = [
	{
		id: 1,
		title: `Composable`,
		text: `All dApps builts on the Comdex chain are fully interoperable across the IBC and composable to enhance DeFi user experience and deliver seamless access to the ecosystem of products.`,
		img: composable,
	},
];

export const idrow1 = [
	{
		id: 1,
		title: `Get CMDX using one of the many cryptocurrency exchanges.`,
		text: `Access the CMDX token from one of the several DEXes where CMDX is currently available.`,
		btn: `Browse DEXes`,
        img: coin,
	},
];
export const idrev = [
	{
		id: 2,
		title: `Transfer your CMDX to a wallet.`,
		text: `Choose a wallet that suits your needs, create an account, and transfer your CMDX.`,
		btn: `Choose Wallet`,
		img: wallet,
	},
];
export const idrev2 = [
	{
		id: 4,
		title: `Lock up and stake your CMDX`,
		text: `Using your wallet, Delegate your CMDX to your chosen validator to start staking. This locks up your CMDX (i.e. you can't transfer them) and enables the chosen validators to operate the network.`,
		btn: `Choose Wallet`,
		img: blocks,
	},
];
export const idrow2 = [
	{
		id: 3,
		title: `Select your validators on any platform`,
		text: `Choose the validators you want to delegate your CMDX to. Spread your risk by delegating your CMDX to multiple validators.`,
		btn: `Choose Validators`,
		img: lock,
	},
];


//fund


export const fundrev = [
	{
		id: 2,
		revtitle: `DeFi and CeFi Bridging`,
		revtext: `Use Comdex's chain infrastructure to build interoperable solutions that help integrate CeFi use cases and RWAs with DeFi primitives for global accessibility.`,
		revimg: cardfund,
	},
];