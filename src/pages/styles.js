import { makeStyles } from "tss-react/mui"

import theme from "../../theme"

const useStyles = makeStyles()(() => {
    return{
        width_700: {
            width: '700px',
            [theme.breakpoints.down('sm')]: {
                width: '350px'
            }
        },
        video_container: {
            position: 'relative',
            paddingBottom: '56.25%',
            height: '0',
            overflow: 'hidden',
            boxShadow:  '10px 12px 28px -12px rgba(0,0,0,0.75)'
        },
        video: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '7px',
        },
        section_1: {
            backgroundImage: 'url(/images/dobra_1_bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            [theme.breakpoints.down('sm')]: {
                backgroundImage: 'url(/images/dobra_1_bg_sm.webp)',
                height: '1238px'
            }
        },
        section_2: {
            
        },
        section_4: {
            backgroundImage: 'url(/images/dobra_4_bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            [theme.breakpoints.down('sm')]: {
                backgroundImage: 'url(/images/dobra_4_bg_sm.webp)',
                height: '1670px'
            }
        },
        section_5: {
            backgroundImage: 'url(/images/dobra_5_bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            [theme.breakpoints.down('sm')]: {
                backgroundImage: 'url(/images/dobra_5_bg_sm.webp)',
                height: '1526px'
            }
        },
        section_7: {
            backgroundImage: 'url(/images/dobra_7_bg.webp)',
            backgroundSize: 'cover',
            [theme.breakpoints.down('sm')]: {
                backgroundImage: 'url(/images/dobra_7_bg_sm.webp)',
                height: '1167px'
            }
        },
        common_width: {
            width: '430px',
            [theme.breakpoints.down('sm')]: {
                width: '350px',
            }
        },
        common_padding: {
            padding: '197px 0'
        },
        alignCenter_div: {
            display: 'block',
            margin: '0 auto'
        },
        margin_8: {
            marginBottom: '8px',
        },
        margin_16: {
            marginBottom: '16px',
        },
        margin_24: {
            marginBottom: '24px',
        },
        margin_40: {
            marginBottom: '40px',
        },
        margin_80: {
            marginBottom: '80px'
        },
        grid: {
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            }
        },
        brainIcon: {
            width: '250px'
        },
        priceBox: {
            borderRadius: '5px',
            border: '2px solid black',
            padding: '80px 0',
            width: '520px',
            margin: '0 auto',
            [theme.breakpoints.down('sm')]: {
                width: '350px',
            }
        },
        link: {
            textDecoration: 'none'
        }
    }
})

export default useStyles