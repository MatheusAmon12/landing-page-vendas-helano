import TemplateDefault from '@/templates/Default'
import { Container, Typography, Grid, Box} from '@mui/material'

import { makeStyles } from 'tss-react/mui'
import theme from '../../theme'
import Button from '@/components/Button'

const useStyles = makeStyles()(() => {
  return{
    width_700: {
      width: '700px',
      [theme.breakpoints.down('sm')]: {
        width: '350px'
      }
    },
    section_2: {
      background: theme.palette.background.default
    },
    section_4: {
      backgroundImage: 'url(/images/dobra_4_bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: 'url(/images/dobra_4_bg_sm.png)',
        height: '1670px'
      }
    },
    section_5: {
      backgroundImage: 'url(/images/dobra_5_bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: 'url(/images/dobra_5_bg_sm.png)',
        height: '1526px'
      }
    },
    section_7: {
      backgroundImage: 'url(/images/dobra_7_bg.png)',
      backgroundSize: 'cover',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: 'url(/images/dobra_7_bg_sm.png)',
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
    }
  }
})

const Home = () => {
  const {classes} = useStyles()

  return(
    <TemplateDefault>
      <Container maxWidth={'100vw'}>
        <Container maxWidth={'md'} style={{padding: '80px 0 197px'}}>
          <Typography
            fontSize={'38px'}
            lineHeight={'48px'}
            textAlign={'center'}
            className={`${classes.alignCenter_div} ${classes.margin_8} ${classes.width_700}`}
          >
            Descubra o poder da sua essência: transforme a sua vida e reconstrua a sua família em 30 dias.
          </Typography>
          <Typography
            fontSize={'24px'}
            lineHeight={'34px'}
            textAlign={'center'}
            className={`${classes.alignCenter_div} ${classes.width_700}`}
          >
            Conheça um pouco do que a Imersão Valorizando a Essência oferece a você e sua família. Assista o vídeo:
          </Typography>
        </Container>
      </Container>

      <Container maxWidth={'100vw'} className={classes.section_2}>
        <Container maxWidth={'md'} className={classes.common_padding}>
          {
            //Grid do ícone Brain com todo conteúdo
          }
          <Grid container rowSpacing={'160'} className={classes.grid}>
            <Grid item md={6} sm={12}>
              <img src='/images/brainIcon.png' className={classes.brainIcon}/>
            </Grid>

            <Grid item md={6} sm={12}>
              <Typography
                variant={'h2'}
                fontSize={'24px'}
                className={classes.margin_24}
              >
                Irei te ajudar a <strong>superar os traumas</strong> e encontrar <strong>equilíbrio em seus relacionamentos</strong>
              </Typography>

              {
                //Grid do conjunto de ícones e textos
              }
              <Grid container rowSpacing={'32'} className={classes.margin_40}>
                <Grid item>
                  {
                    //Grid do ícone e seu respectivo texto
                  }
                  <Grid container className={classes.grid}>
                    <Grid item md={6} sm={12}>
                      <img src='/images/iconConhece-te.png' />
                    </Grid>
                    
                    <Grid item md={6} sm={12}>
                      <Typography className={classes.common_width}>
                        <strong>Conhece-te</strong>
                      </Typography>

                      <Typography className={classes.common_width}>
                        No primeiro módulo dessa imersão, você compreenderá o poder que está dentro de cada um de nós, através do amor de Deus. Aqui você irá entender e ressignificar sua história.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container className={classes.grid}>
                    <Grid item md={6} sm={12}>
                      <img src='/images/iconAceita-te.png' />
                    </Grid>
                    
                    <Grid item md={6} sm={12}>
                      <Typography className={classes.common_width}>
                        <strong>Aceita-te</strong>
                      </Typography>

                      <Typography className={classes.common_width}>
                        Nesse segundo módulo vamos identificar o que tem te impedido de se relacionar melhor com as pessoas a sua volta e o que tem te travado em realizar seu sonhos.
                      </Typography>
                    </Grid>
                  </Grid> 
                </Grid>

                <Grid item>
                  <Grid container className={classes.grid}>
                    <Grid item md={6} sm={12}>
                      <img src='/images/iconTransforma-te.png' />
                    </Grid>
                    
                    <Grid item md={6} sm={12}>
                      <Typography className={classes.common_width}>
                        <strong>Supera-te</strong>
                      </Typography>

                      <Typography className={classes.common_width}>
                        Por fim,  após identificar as áreas da sua vida que precisam ser mudadas,  vamos elaborar um plano de ação para que haja mudança de fato em sua vida . E assim você estará pronta para uma vida de equilíbrio e superação.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Button 
                color={'primary'}
                text={'Quero participar'}
              />

            </Grid>
          </Grid>
          
        </Container>
      </Container>

      <Container maxWidth={'100vw'}>
        <Container maxWidth={'md'} className={classes.common_padding}>
          <Typography
            variant={'h2'}
            fontSize={'24px'}
            lineHeight={'34px'}
            textAlign={'center'}
            width={'700px'}
            className={`${classes.alignCenter_div} ${classes.margin_40} ${classes.width_700}`}
          >
            A imersão já <strong>transformou a vida de mais de 300 famílias</strong> e uma dessas famílias foi a da Nelma. Assista o vídeo e <strong>veja as mudanças</strong> que ela teve na vida dela e da família:
          </Typography>
          <Typography
            variant={'h2'}
            fontSize={'24px'}
            lineHeight={'34px'}
            textAlign={'center'}
            width={'700px'}
            className={`${classes.alignCenter_div} ${classes.margin_80} ${classes.width_700}`}
          >
            Assim como a Nelma <strong>você também pode ter essa transformação na sua família.</strong>
          </Typography>
          <Button
            color={'tertiary'}
            text={'Quero essa transformação!'}
            display={'block'}
            margin={'0 auto'}
          />
        </Container>
      </Container>       

      <Container maxWidth={'100vw'} className={classes.section_4}>
        <Container maxWidth={'md'} className={classes.common_padding} style={{color: '#EBE5E5'}}>
          <Typography
            variant={'h2'}
            fontSize={'32px'}
            lineHeight={'42px'}
            fontWeight={'bold'}
            className={classes.margin_16}
          >
            A imersão é para mim?
          </Typography>

          <Box 
            style={{
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px'
            }}
            className={`${classes.margin_24} ${classes.common_width}`}
          >
            <Typography
              fontSize={'24px'}
              lineHeight={'34px'}
            >
              Se você se encontra com uma crise em seu casamento, onde as brigas viraram rotina, <strong>a Imersão Valorizando a Essência é para você.</strong>
            </Typography>

            <Typography
              fontSize={'24px'}
              lineHeight={'34px'}
            >
              Hoje você não tem paz em sua casa e nem tem prazer de estar em seu lar, então <strong>você precisa da Imersão Valorizando a Essência.</strong>
            </Typography>

            <Typography
              fontSize={'24px'}
              lineHeight={'34px'}
            >
              Se você não consegue ter diálogos saudáveis com os seus filhos e nem com o seu marido, <strong>a Imersão Valorizando a Essência é para você.</strong>
            </Typography>

            <Typography
              fontSize={'24px'}
              lineHeight={'34px'}
            >
              E se hoje você carrega culpas, mágoas e tristezas do passado, que te impedem de evoluir então <strong>você precisa da Imersão Valorizando a Essência.</strong>
            </Typography>
          </Box>

          <Typography
            fontSize={'24px'}
            lineHeight={'34px'}
            className={`${classes.margin_40} ${classes.common_width}`}
          >
            <strong>Você precisa e quer mudar a sua situação</strong> hoje com a sua família e principalmente com você?
          </Typography>

          <Button 
            color={'tertiary'}
            text={'Sim! Quero participar'}
          />
        </Container>
      </Container>

      <Container maxWidth={'100vw'} className={classes.section_5}>
        <Container maxWidth='md' className={classes.common_padding}>
          <Typography
            variant={'h2'}
            fontSize={'32px'}
            lineHeight={'42px'}
            className={`${classes.common_width} ${classes.alignCenter_div} ${classes.margin_24}`}
          >
            Após a imersão <strong>você terá a melhor versão de si mesma.</strong>
          </Typography>
          <Box 
            style={{
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px',
              marginBottom: '24px'
            }}
            className={`${classes.common_width} ${classes.alignCenter_div}`}
          >
            <Typography
              fontSize={'24px'}
              lineHeight={'34px'}
            >
              Durante 30 dias nós estaremos juntos e empenhados em transformar a história do seu lar e da sua vida. Mostrando a você mulher que <strong>é possível fazer as pazes com o passado e viver o hoje sem culpas e mágoas.</strong>
            </Typography>

            <Typography
              fontSize={'24px'}
              lineHeight={'34px'}
            >
              Você irá entender como <strong>perdoar quem te feriu e se perdoar</strong> por erros cometidos irá tirar de você um grande peso das costas. Após a imersão você estará pronta para <strong>viver uma vida leve com a sua melhor versão.</strong>
            </Typography>

            <Typography
              fontSize={'24px'}
              lineHeight={'34px'}
              className={`${classes.common_width} ${classes.alignCenter_div}`}
              style={{marginBottom: '40px'}}
            >
              Você deseja participar desse jornada de <strong>autoconhecimento e transformação?</strong>
            </Typography>

            <Button 
              color={'primary'}
              text={'Quero participar'}
            />
          </Box>
          
        </Container>
      </Container>

      <Container maxWidth={`100vw`} style={{background: '#EBE5E5'}}>
        <Container maxWidth={'md'} className={classes.common_padding}>
          <Typography
            variant={'h2'}
            fontSize={'32px'}
            lineHeight={'42px'}
            textAlign={'center'}
            className={`${classes.common_width} ${classes.alignCenter_div}`}
            style={{marginBottom: '40px'}}
          >
            Tenha uma <strong>mudança de pensamento</strong> e <strong>viva o seu propósito com Deus</strong>
          </Typography>

          <Box className={classes.priceBox}>
            <Typography 
              textAlign={'center'} 
            >
              <s>de R$997,90</s>
            </Typography>

            <Typography 
              textAlign={'center'} 
              fontSize={'24px'}
            >
              por apenas
            </Typography>

            <Typography 
              textAlign={'center'} 
              fontSize={'32px'}
              fontWeight={'bold'}
            >
              12x de
            </Typography>

            <Typography 
              textAlign={'center'} 
              fontSize={'88px'}
              fontWeight={'bold'}
            >
              R$57,90
            </Typography>

            <Typography 
              textAlign={'center'} 
              fontSize={'24px'}
              className={classes.margin_40}
            >
              ou R$597,90 à vista
            </Typography>

            <Button 
              color={'primary'}
              text={'Quero participar'}
              display={'block'}
              margin={'0 auto'}
            />
          </Box>
        </Container>
      </Container> 

      <Container maxWidth={`100vw`} className={`${classes.section_7} ${classes.common_padding}`}>
        <Container maxWidth={'md'}>
          <Typography
            variant={'h2'}  
            fontSize={'24px'}
            lineHeight={'42px'}
            className={classes.common_width}
            color={'#75DBCD'}
          >
            SOBRE
          </Typography>

          <Typography 
            variant={'h2'} 
            fontSize={'32px'}
            lineHeight={'42px'}
            className={`${classes.common_width} ${classes.margin_16}`}
            color={'#EBE5E5'}
          >
            HELANO MARIZ
          </Typography>
          
          <Typography color={'#EBE5E5'} className={classes.common_width}>
            Na minha caminhada ministerial, mesmo sem compreender na época, no início dos anos 2002, quando minha esposa Renata Mariz enfrentou uma intensa depressão, percebi a importância do cuidado humano. <br/><br/>Desde então, passei a me dedicar ainda mais ao próximo, sendo reconhecido por muitos como um verdadeiro e fiel conselheiro. Ao longo dessa jornada, novos projetos e desafios foram sugeridos, tanto na área empreendedora quanto no cuidado humano. <br/><br/>Então me especializei em diversas áreas, sendo hoje: Analista comportamental, Especialista em sexologia e psicologia e Profissional em Coach. Tudo isso com o intuito de ajudar diferentes pessoas, em diferentes áreas de suas vidas.
          </Typography>
        </Container>
      </Container>

    </TemplateDefault>
  )
}

export default Home