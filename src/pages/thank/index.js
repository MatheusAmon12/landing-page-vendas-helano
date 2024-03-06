import { Container, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import Button from '@/components/Button'
import TemplateDefault from '@/templates/Default'
import Link from 'next/link'

const useStyles = makeStyles()((theme) => {
    return{
        custom_font: {
            fontFamily: 'Raleway, sans-serif'
        },
        container: {
            height: '944px',
            backgroundImage: 'url(/images/thankPage_bg.webp)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            [theme.breakpoints.down('sm')]: {
                height: '1289px',
                backgroundImage: 'url(/images/thankPage_bg_sm.webp)',
            }
        },
        common_width: {
            width: '700px',
            [theme.breakpoints.down('sm')]: {
                width: '350px'
            }
        },
        common_padding: {
            padding: '80px 0'
        },
        margin_24: {
            marginBottom: '24px'
        },
        margin_40: {
            marginBottom: '40px'
        },
        thank: {
            fontSize: '38px',
            lineHeight: '48px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '32px',
                lineHeight: '42px'
            }
        },
        text: {
            fontSize: '24px',
            lineHeight: '34px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
                lineHeight: '26px'
            }
        }
    }
}) 

const Thank = () => {
    const { classes } = useStyles()

    return(
        <TemplateDefault>
            <Container maxWidth={'100vw'} className={classes.container}>
                <Container maxWidth={'md'} className={classes.common_padding}>
                    <Typography
                        color={'#75DBCD'}
                        className={`${classes.common_width} ${classes.thank} ${classes.margin_24} ${classes.custom_font}`}
                    >
                        OBRIGADO POR DAR O PRIMEIRO PASSO PARA UMA JORNADA TRANSFORMADORA
                    </Typography>

                    <Typography
                        lineHeight={'26px'}
                        color={'#EBE5E5'}
                        className={`${classes.common_width} ${classes.text} ${classes.margin_24}`}
                    >
                        Neste curso, vamos explorar juntos a importância de olhar para dentro de si, de se conhecer profundamente, de se aceitar com amor e compaixão, e de transformar essas descobertas em poderosas ferramentas de crescimento pessoal.
                        <br/><br/>
                        Durante nossa jornada juntos, vamos mergulhar fundo nas camadas da sua essência, descobrindo seus talentos, suas paixões e seus propósitos mais profundos. Vamos desafiar crenças limitantes, enfrentar medos e abrir espaço para o florescimento de uma nova versão de si mesma - uma versão mais autêntica, mais confiante e mais realizada.
                    </Typography>

                    <Typography
                        color={'#75DBCD'}
                        className={`${classes.common_width} ${classes.text} ${classes.margin_40}`}
                    >
                        <strong>
                            Com amor e gratidão,
                            <br/>
                            HELANO MARIZ
                        </strong>
                    </Typography>

                    <Link target='_blank' href='https://chat.whatsapp.com/CmvgB2zF3FjGjD8M1EXFcl' style={{textDecoration: 'none'}}>
                        <Button 
                            color={'tertiary'}
                            text={'Entrar para o grupo VIP'}
                        />
                    </Link>
                </Container>
            </Container>
        </TemplateDefault>
    )
}

export default Thank