import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { StaticImageData } from 'next/image'
import { CardComponent, FooterComponent, HeaderComponent, OrderComponent } from '../components'
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
  ingredients: string[],
  price: number
}

const initialValue = [
  {value: '', index: 0, name: 'Campeón Mundial', price: 2000},
  {value: '', index: 1, name: 'Fugazza con queso', price: 1500},
  {value: '', index: 2, name: 'Margarita', price: 1500},
]

const HomePage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const typingRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [quantity, setQuantity] = useState<{value: string, index: number, name: string, price: number}[]>(initialValue);
  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 5000);
      setTimeout(() => {
        setIsAnimating(true);
      }, 5500);
    }
  }, [isAnimating]);

  const receiveQuantity = (value: string, index: number) => {
    setQuantity((prevQuantity) =>
    prevQuantity.map((checkQuantity) =>
    checkQuantity.index === index ? { ...checkQuantity, value: value } : checkQuantity
      )
    );
    console.log('quantity', quantity);
  }

  return (
    <>
      <HeaderComponent />
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: '50px', height: '72px'}}>
        {isAnimating && <Typography ref={typingRef} className='typing-effect span' variant="body1" sx={{
            textAlign: 'center',
            fontSize: isMobile ? '30px' : '48px',
            marginBottom: isMobile ? '5px' : '40px',
            fontFamily: 'cursive'
          }}>Pizzas de autor</Typography>}        
      </Box>
      <Grid item xs={12} md={6} lg={3} className="main" component='main'>
      {
        array_page.map( (page, index) => (
          index === 2 ?                 
          <Box key={index} sx={{ width: '100%', display: 'grid', gridTemplateColumns: !isMobile ? '63%' : '' }}>
            <CardComponent sendQuantity={(value) => receiveQuantity(value, index)} page={page.page} image={page.src} price={page.price} color={page.color} name={page.name} ingredients={page.ingredients}/>
            <OrderComponent order={quantity} />
          </Box>          
          : 
          <CardComponent sendQuantity={(value) => receiveQuantity(value, index)} price={page.price} page={page.page} key={index} image={page.src} color={page.color} name={page.name} ingredients={page.ingredients}/>
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
    ingredients: ['Salsa de tomate', 'Muzarella', 'Albahaca'],
    price: 2000
  },
  {
    page: 'https://youtu.be/06htSH24iuQ',
    src: FUGAZZA,
    color: '#ffffff',
    name: 'Fugazza con queso',
    ingredients: ['Muzarella', 'Cebolla'],
    price: 1500
  },
  {
    page: 'https://youtu.be/06htSH24iuQ',
    src: MARGARITA,
    color: '#e62e1b',
    name: 'Margarita',
    ingredients: ['Salsa de tomate', 'Muzarella', 'Jamón', 'Morrón', 'Tomates', 'Aceitunas', 'Pesto de perejil'],
    price: 1500
  },
]
