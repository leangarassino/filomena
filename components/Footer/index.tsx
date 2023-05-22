import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import FILOMENA from '../../public/images/filomena-edit.jpg'

export const FooterComponent = () => {
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
          <div className="border-bottom-footer"></div>
        </Box>        
      </div>
      <div className="line-footer">
          <span className='color-green'></span>
          <span className='color-red'></span>
      </div>    
    </>
  )
}
