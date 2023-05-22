import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { StaticImageData } from 'next/image'
import { CardComponent, FooterComponent, HeaderComponent } from '../components'
import FUGAZZA from '../public/images/fugazza-bg.png'
import MUNDIAL from '../public/images/mundial.png'
import MARGARITA from '../public/images/margarita-bg.png'
import { useEffect, useRef, useState } from 'react'
import { theme } from '../theme/theme'

interface Page {
  page: string,
  src: StaticImageData,
  color: string,
  name: string,
  ingredients: string[]
}

const HomePage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const typingRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(true);
        // setIsAnimating(true); // Detener la animación después de cierto tiempo (ejemplo: 5 segundos)
      }, 5000); // Duración del tiempo antes de detener la animación (ejemplo: 5 segundos)
      setTimeout(() => {
        setIsAnimating(true);
        // setIsAnimating(true); // Detener la animación después de cierto tiempo (ejemplo: 5 segundos)
      }, 5500);
    }
  }, [isAnimating]);


  return (
    <>
      <HeaderComponent />
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: '50px', height: '72px'}}>
        {isAnimating && <Typography ref={typingRef} className='typing-effect span' variant="body1" sx={{
            textAlign: 'center',
            fontSize: isMobile ? '30px' : '48px',
            marginBottom: isMobile ? '5px' : '',
            fontFamily: 'cursive'
          }}>Pizzas de autor</Typography>}        
      </Box>
      <Grid item xs={12} md={6} lg={3} className="main" component='main'>
      {
        array_page.map( (page, index) => (
          <CardComponent page={page.page} key={index} image={page.src} color={page.color} name={page.name} ingredients={page.ingredients}/>
        ))
      }
      </Grid>
      <FooterComponent />
    </>
  )
}

export default HomePage



const array_page: Page[] = [
  {
    page: 'https://youtu.be/06htSH24iuQ',
    src: MUNDIAL,
    color: '#00bd13',
    name: 'Campeón mundial',
    ingredients: ['Salsa de tomate', 'Muzarella', 'Albahaca']
  },
  {
    page: 'https://youtu.be/06htSH24iuQ',
    src: FUGAZZA,
    color: '#ffffff',
    name: 'Fugazza con queso',
    ingredients: ['Muzarella', 'Cebolla']
  },
  {
    page: 'https://youtu.be/06htSH24iuQ',
    src: MARGARITA,
    color: '#e62e1b',
    name: 'Margarita',
    ingredients: ['Salsa de tomate', 'Muzarella', 'Jamón', 'Morrón', 'Tomates', 'Aceitunas', 'Pesto de perejil']
  },
]
