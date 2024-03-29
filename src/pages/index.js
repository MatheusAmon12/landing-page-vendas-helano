import TemplateDefault from '@/templates/Default'
import { Container, Typography, Grid, Box} from '@mui/material'

import Button from '@/components/Button'
import Link from 'next/link'

import useStyles from './styles'
import Iframe from '@/components/Iframe'
const Home = () => {
  const {classes} = useStyles()
  const checkout = 'https://pay.kiwify.com.br/vA5a9rR'

  return(
    <TemplateDefault>
      <Container maxWidth={'100vw'} className={classes.section_1}>
        <Container maxWidth={'md'} style={{padding: '80px 0 197px', color: '#EBE5E5'}}>
          <Typography
            fontSize={'38px'}
            lineHeight={'48px'}
            textAlign={'center'}
            className={`${classes.alignCenter_div} ${classes.margin_8} ${classes.width_700} ${classes.custom_font}`}
          >
            Descubra o poder da sua essência: <strong>transforme a sua vida e reconstrua a sua família em 30 dias.</strong>
          </Typography>
          <Typography
            fontSize={'24px'}
            lineHeight={'34px'}
            textAlign={'center'}
            className={`${classes.alignCenter_div} ${classes.width_700} ${classes.margin_40}`}
          >
            Conheça um pouco do que a Imersão Valorizando a Essência oferece a você e sua família. Assista o vídeo:
          </Typography>

          <Iframe 
            url={"https://drive.google.com/file/d/1iK3nebI-UViJqzhB9AA6guBwxVq2vM2C/preview"}
            title={"Apresentação Helano"}
          />

          <Link className={classes.link} target='_blank' href={`${checkout}`}>
            <Button
              color={'tertiary'}
              text={'Quero participar'}
              display={'block'}
              margin={'0 auto'}
            />
          </Link>
        </Container>
      </Container>

      <Container maxWidth={'100vw'} className={classes.section_2}>
        <Container maxWidth={'md'} className={classes.common_padding}>
          <Grid container rowSpacing={'160'} className={classes.grid}>
            <Grid item md={6} sm={12}>
              <img src='/images/brainIcon.png' className={classes.brainIcon} alt='Ícone de cérebro' loading='lazy'/>
            </Grid>

            <Grid item md={6} sm={12}>
              <Typography
                fontSize={'24px'}
                className={`${classes.margin_24} ${classes.custom_font}`}
              >
                Irei te ajudar a <strong>superar os traumas</strong> e encontrar <strong>equilíbrio em seus relacionamentos</strong>
              </Typography>

              <Grid container rowSpacing={'32'} className={classes.margin_40}>
                <Grid item>

                  <Grid container className={classes.grid}>
                    <Grid item md={6} sm={12}>
                      <img src='/images/iconConhece-te.png' alt='Conhece-te' loading='lazy'/>
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
                      <img src='/images/iconAceita-te.png' alt='Aceita-te' loading='lazy'/>
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
                      <img src='/images/iconTransforma-te.png' alt='Supera-te' loading='lazy'/>
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

              <Link className={classes.link} target='_blank' href={`${checkout}`}>
                <Button
                  color={'primary'}
                  text={'Quero participar'}
                />
              </Link>

            </Grid>
          </Grid>
          
        </Container>
      </Container>

      <Container maxWidth={'100vw'} style={{background: '#EBE5E5'}}>
        <Container maxWidth={'md'} className={classes.common_padding}>
          <Typography
            fontSize={'24px'}
            lineHeight={'34px'}
            textAlign={'center'}
            width={'700px'}
            className={`${classes.alignCenter_div} ${classes.margin_40} ${classes.width_700} ${classes.custom_font}`}
          >
            A imersão já <strong>transformou a vida de mais de 300 famílias</strong> e uma dessas famílias foi a da Nelma. Assista o vídeo e <strong>veja as mudanças</strong> que ela teve na vida dela e da família:
          </Typography>

          <Iframe 
            url="https://drive.google.com/file/d/1LvZpztTtiETbIfg1flAVV27UNqEYjI0a/preview"
            title={"Depoimento da Nelma"}
          />

          <Typography
            fontSize={'24px'}
            lineHeight={'34px'}
            textAlign={'center'}
            width={'700px'}
            className={`${classes.alignCenter_div} ${classes.margin_80} ${classes.width_700} ${classes.custom_font}`}
          >
            Assim como a Nelma <strong>você também pode ter essa transformação na sua família.</strong>
          </Typography>
          <Link className={classes.link} target='_blank' href={`${checkout}`}>
            <Button
              color={'primary'}
              text={'Quero essa transformação!'}
              display={'block'}
              margin={'0 auto'}
            />
          </Link>
        </Container>
      </Container>       

      <Container maxWidth={'100vw'} className={classes.section_4}>
        <Container maxWidth={'md'} className={classes.common_padding} style={{color: '#EBE5E5'}}>
          <Typography
            fontSize={'32px'}
            lineHeight={'42px'}
            fontWeight={'bold'}
            className={`${classes.margin_16} ${classes.custom_font}`}
          >
            A imersão é para mim?
          </Typography>

          <Box 
            style={{
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px',
              color: '#EBE5E5'
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

          <Link className={classes.link} target='_blank' href={`${checkout}`}>
            <Button
              color={'tertiary'}
              text={'Sim! Quero participar'}
            />
          </Link>
        </Container>
      </Container>

      <Container maxWidth={'100vw'} className={classes.section_5}>
        <Container maxWidth='md' className={classes.common_padding}>
          <Typography
            fontSize={'32px'}
            lineHeight={'42px'}
            className={`${classes.common_width} ${classes.alignCenter_div} ${classes.margin_24} ${classes.custom_font}`}
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

            <Link className={classes.link} target='_blank' href={`${checkout}`}>
              <Button
                color={'primary'}
                text={'Quero participar'}
              />
            </Link>
          </Box>
          
        </Container>
      </Container>

      <Container maxWidth={`100vw`} style={{background: '#EBE5E5'}}>
        <Container maxWidth={'md'} className={classes.common_padding}>
          <Typography
            fontSize={'32px'}
            lineHeight={'42px'}
            textAlign={'center'}
            className={`${classes.common_width} ${classes.alignCenter_div} ${classes.custom_font}`}
            style={{marginBottom: '40px'}}
          >
            Tenha uma <strong>mudança de pensamento</strong> e <strong>viva o seu propósito com Deus</strong>
          </Typography>

          <Box className={classes.priceBox}>

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
              R$100,19
            </Typography>

            <Typography 
              textAlign={'center'} 
              fontSize={'24px'}
              className={classes.margin_40}
            >
              ou R$997,90 à vista
            </Typography>

            <Link className={classes.link} target='_blank' href={`${checkout}`}>           
              <Button 
                color={'primary'}
                text={'Quero participar'}
                display={'block'}
                margin={'0 auto'}
              />
            </Link>
          </Box>
        </Container>
      </Container> 

      <Container maxWidth={`100vw`} className={`${classes.section_7} ${classes.common_padding}`}>
        <Container maxWidth={'md'}>
          <Typography
            fontSize={'24px'}
            lineHeight={'42px'}
            className={`${classes.common_width} ${classes.custom_font}`}
            color={'#75DBCD'}
          >
            SOBRE
          </Typography>

          <Typography 
            fontSize={'32px'}
            lineHeight={'42px'}
            className={`${classes.common_width} ${classes.margin_16} ${classes.custom_font}`}
            color={'#EBE5E5'}
          >
            <strong>HELANO MARIZ</strong>
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