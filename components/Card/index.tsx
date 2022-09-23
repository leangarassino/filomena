import Card from '@mui/material/Card'
import { Box, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface Props {
  page?: string
  image?: StaticImageData
}

export const CardComponent: FC<Props> = ({ page, image = '' }) => {
  return (
    <Box
      component='div'
      className='hover'
      sx={{ width: 'max-content', boxShadow: '2px 2px 5px 5px #353535' }}
    >
      <a href={page} target='_blank' rel="noreferrer">
        <Card
          sx={{ maxWidth: 'max-content', borderRadius: 'unset', background: '#1C1824',  paddingTop: '15px' }}
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
                marginTop: '10px'
              }}
              component="p"
              className="text"
            >
              Ir al canal
            </Typography>
          </Box>
        </Card>
      </a>
    </Box>
  )
}
