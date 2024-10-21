import { cva } from "../../../styled-system/css";

export const MainStyles = cva({
	base: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: { sm: '24rem' },
		height: { sm: '80%', lg: '80%' },
		bg: '#212121',
		borderRadius: '0.5rem',
		'& #box_user': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			"& div[id$='__avatar']": {
				width: 'fit-content'
			},
			"& div[id$='__info']": {
				textAlign: 'center'
			},
			"& div[id$='__description']": {
				textAlign: 'center',
				marginTop: '1rem'
			}
		},
		'& #box_socials':{
			display: 'flex', 
			flexDirection: 'column', 
			height: 'fit-content', 
			width: '80%', 
			alignContent: 'center', 
			marginTop: '1.5rem',
			'& button': {
				width: '100%',
				height: '2.5rem',
                fontFamily: 'inter',
				fontWeight: '600',
				bg: '#474645',
				borderRadius: '0.5rem',
				color: 'white',
				marginTop: '1rem',
				_hover: {
					bg: 'lime.400',
					color: 'black',
					cursor: 'pointer'
				}
			}
		}
	}
})