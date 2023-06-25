import { Box, Button, CircularProgress, Dialog, DialogTitle, Grid, Typography, useMediaQuery } from '@mui/material'
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
  {value: '', index: 0, name: 'Campeón Mundial', price: 2500},
  {value: '', index: 1, name: 'Fiorentina', price: 2100},
  {value: '', index: 2, name: 'Margarita', price: 1800},
]

const HomePage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const typingRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [open, setOpen] = useState(true);
  const [openDay, setOpenDay] = useState(false);
  const [statusDialog, setStatusDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<{value: string, index: number, name: string, price: number}[]>(initialValue);
  useEffect(() => {
    const getCurrentTime = () => {
      const currentDateTime = new Date();
      const options: any = { weekday: 'long' };
      const dayWeek = currentDateTime.toLocaleDateString('en-US', options);
      if (currentDateTime.getHours() >= 19 && (dayWeek === 'Saturday' || dayWeek === 'Friday' || dayWeek === 'Sunday')) {
        setOpen(true);
      } else {
        setOpen(false);
        if ((dayWeek === 'Saturday' || dayWeek === 'Friday' || dayWeek === 'Sunday')) setOpenDay(true)
        else setOpenDay(false)
      }
    };
    getCurrentTime();    
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 5000);
      setTimeout(() => {
        setIsAnimating(true);
      }, 5500);
    }
    setLoading(false);
  }, [isAnimating]);

  const receiveQuantity = (value: string, index: number) => {
    setQuantity((prevQuantity) =>
    prevQuantity.map((checkQuantity) =>
    checkQuantity.index === index ? { ...checkQuantity, value: value } : checkQuantity
      )
    );
  }

  return (
    <>
      <HeaderComponent />
      {
       !loading
       ?  
       <>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: '50px', height: '72px'}}>
        {isAnimating && <Typography ref={typingRef} className='typing-effect span' variant="body1" sx={{
            textAlign: 'center',
            fontSize: isMobile ? '30px' : '48px',
            marginBottom: isMobile ? '5px' : '40px',
            fontFamily: 'cursive'
          }}>Pizzas de autor</Typography>}        
        </Box>
        <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '5px'}}>
          <div className="icon-container">
          <Button onClick={() => setStatusDialog(true)} variant="outlined" sx={{height: 'fit-content', marginTop: '6px', borderRadius: '12px'}}>HORARIOS</Button>
          {
          open 
          ? 
          <div className={'icon'}>Abierto</div> 
          : 
          <>
          <div className={'icon-close'}>Cerrado</div>
          </>
          }
          </div>
          {
            open
            ?
            <Typography variant='h5' sx={{fontSize: '18px', fontFamily: 'monospace', fontWeight: '600', color:'#262837'}}>Atendemos hasta las 00:00hs</Typography> 
            :
            openDay 
            ?
            <Typography variant='h5' sx={{fontSize: '18px', fontFamily: 'monospace', fontWeight: '600', color:'#262837'}}>Abrimos a las 19:00hs</Typography> 
            :
            <Typography variant='h5' sx={{fontSize: '18px', fontFamily: 'monospace', fontWeight: '600', color:'#262837'}}>Abierto de viernes a domingo<br></br> desde las 19:00hs</Typography> 
          }
          <Dialog onClose={() => setStatusDialog(false)} open={statusDialog}>
            <Box sx={{
              padding: '25px',
            }}>
              <DialogTitle sx={{
                borderBottom: '1px solid gray',
                padding: '4px',
                marginBottom: '20px'
              }}>HORARIOS</DialogTitle>
              {
                days_opened.map((day, index) => <Typography sx={{fontSize: '18px', fontFamily: 'monospace', fontWeight: '600', color:'#262837', display: 'flex', gap: '5px'}} key={index}>
                  {day} de 19:00 a 00:00 hs
                </Typography>)
              }          
            </Box>
          </Dialog>      
      </Box>  
        
        
        
      <Grid item xs={12} md={6} lg={3} className="main" component='main'>
        {
          array_page.map( (page, index) => (
            index === 2 ?                 
            <Box key={index} sx={{ width: '100%', display: 'grid', gridTemplateColumns: !isMobile ? '63%' : '' }}>
              <CardComponent sendQuantity={(value) => receiveQuantity(value, index)} page={page.page} image={page.src} price={page.price} color={page.color} name={page.name} ingredients={page.ingredients}/>
              <OrderComponent order={quantity} open={open} />
            </Box>          
            : 
            <CardComponent sendQuantity={(value) => receiveQuantity(value, index)} price={page.price} page={page.page} key={index} image={page.src} color={page.color} name={page.name} ingredients={page.ingredients}/>
          ))
        }
      </Grid>
       </>
      :
      <Box sx={{
        minHeight: '89vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CircularProgress color="secondary" />
      </Box>
      }
      
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
    ingredients: ['Salsa de tomate', 'Muzarella', 'Jamón', 'Morrón', 'Tomates', 'Aceitunas', 'Pesto de perejil'],    
    price: 2500
  },
  {
    page: 'https://youtu.be/06htSH24iuQ',
    src: FUGAZZA,
    color: '#ffffff',
    name: 'Fiorentina',
    ingredients: ['Muzarella', 'Cebolla'],
    price: 2100
  },
  {
    page: 'https://youtu.be/06htSH24iuQ',
    src: MARGARITA,
    color: '#e62e1b',
    name: 'Margarita',
    ingredients: ['Salsa de tomate', 'Muzarella', 'Albahaca'],
    price: 1800
  },
]

const days_opened = ['Viernes', 'Sábado', 'Domingo'];
