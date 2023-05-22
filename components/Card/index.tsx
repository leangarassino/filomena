import Card from '@mui/material/Card'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { theme } from '../../theme/theme'

interface Props {
  page?: string
  image?: StaticImageData,
  color?: string,
  name?: string,
  ingredients?: string[]
}

export const CardComponent: FC<Props> = ({ image = '', name = 'Fugazza', ingredients = [] }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const sendMessage = () => {
    const phoneNumber = '3755712831'; // Número de teléfono al que se enviará el mensaje
    const message = 'Hola, me gustaría encargar una ' + name + '. Muchas gracias :)'; // Mensaje a enviar
  
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url);
  };
  return (
    <Box sx={{ width: isMobile ? '100%' : '35%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box
      component='div'
      className='hover'
      // sx={{ boxShadow: `2px 2px 5px 5px ${color}` }}
    >
        <Card
          sx={{ maxWidth: 'max-content', borderRadius: '50px', background: '#d6e8ff', boxShadow: 'none', marginBottom: '8px' }}
          onClick={sendMessage}
        >
          <Image src={image} width={300} height={200} alt={'Logos de canales de televisión'} />

          <Box component='div'>
            <Typography
              sx={{
                borderRadius: 'unset',
                textTransform: 'none',
                height: '35px',
                textAlign: 'center',
                justifyContent: 'center',
                margin: '-5px 0px 15px 0px',
                fontWeight: 600
              }}
              component="p"
              className="text"
            >
              {name}
            </Typography>
          </Box>
        </Card>
        <Grid item sx={{
          display: 'grid',
          gridTemplateColumns: '50% 50%',          
          borderRadius: '14px',
          padding: '4px',
        }}>
          {
            ingredients?.map((ingredient, index) => (
              <Box key={index} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography key={index} sx={{
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(214, 232, 255, 1)',
                  width: 'fit-content',
                  fontWeight: 300,
                  fontFamily: 'cursive'
                }}>{ingredient}</Typography>
              </Box>
            ))
          }
        </Grid>
    </Box>
    </Box>
  )
}
