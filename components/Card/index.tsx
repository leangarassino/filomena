import Card from '@mui/material/Card'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, useMediaQuery } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { FC, useState } from 'react'
import { theme } from '../../theme/theme'

interface Props {
  page?: string
  image?: StaticImageData,
  color?: string,
  name?: string,
  ingredients?: string[],
  sendQuantity: (name: string) => void,
  price: number
}

export const CardComponent: FC<Props> = ({ image = '', name = 'Fugazza', ingredients = [], sendQuantity, price }) => {
  const [quantity, setQuantity] = useState<string>('')
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
    sendQuantity(event.target.value);
  };

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push(i);
  }

  return (
    <Box sx={{ width: isMobile || name === 'Margarita' ? '100%' : '35%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box
      component='div'
      className='hover'
      sx={{
        minHeight: '400px'
      }}
    >
        <Card
          sx={{ maxWidth: 'max-content', borderRadius: '50px', background: '#d6e8ff', boxShadow: 'none', marginBottom: '8px' }}
        >
          <Image src={image} width={300} height={200} alt={'Logos de canales de televisión'} className='image' />

          <Box component='div'>
            <Typography
              sx={{
                borderRadius: 'unset',
                textTransform: 'none',
                height: '35px',
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 600
              }}
              component="p"
              className="text"
            >
              {name}
            </Typography>
            <Typography sx={{
                borderRadius: 'unset',
                textTransform: 'none',
                height: '35px',
                textAlign: 'center',
                justifyContent: 'center',
                marginTop: '-8px',
                fontWeight: 600
              }}>
              ${price}
            </Typography>
          </Box>
        </Card>
        <Box>
          <FormControl variant="standard" sx={{ m: 1, minWidth: '100%' }}>
            <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={quantity}
              onChange={handleChange}
              label="Cantidad"
            >
              <MenuItem value="">
                <em>Deseleccionar</em>
              </MenuItem>
              {
                options.map((number, index) => (                  
                  <MenuItem key={index} value={number}>{number}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Box>
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
                  fontFamily: 'cursive',
                  fontSize: '1.15rem'
                }}>{ingredient}</Typography>
              </Box>
            ))
          }
        </Grid>        
    </Box>
    </Box>
  )
}
