import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'

export const FooterComponent = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <div className='footer'>
        <Box sx={{
          width: '300px',
          background: 'white',
          height: '51px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>        
          <Typography variant="h5" sx={{
            height: 'fit-content'
          }}>FILOMENA</Typography>
          <div className={isMobile ? "border-bottom-footer-mobile" : 'border-bottom-footer'}></div>
        </Box>        
      </div>
      <div className={isMobile ? "line-footer line-footer-mobile" : 'line-footer'}>
          <span className='color-green'></span>
          <span className='color-red'></span>
      </div>    
    </>
  )
}
