import { Box, Typography, hexToRgb } from '@mui/material'
import React from 'react'

export const HeaderComponent = () => {
  return (
    <>    
    <div className='header'>
      <Box sx={{
        width: '300px',
        background: 'white',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
      }}>        
        <Typography variant="h5" sx={{
          height: 'fit-content'
        }}>FILOMENA</Typography>
        <div className="border-bottom"></div>
      </Box>
    </div>
      <div className="line-header">
        <span className='color-green'></span>
        <span className='color-red'></span>
      </div>
    </>
  )
}
