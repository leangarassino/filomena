import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { theme } from '../../theme/theme'

interface Props {
  order: {value: string, index: number, name: string, price: number}[]
}

export const OrderComponent: FC<Props> = ({order}) => {
  const [total, setTotal] = useState<number>(0)
  const [sendOrder, setSendOrder] = useState<{value: string, name: string}[]>([])
  const isLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const calculatePriceAndOrder = () => {
    let calculateTotal = 0;
    const message: {value: string, name: string}[] = [];
    order.map(({price, value, name}) => {
      if(value !== '') {
        calculateTotal += (price * parseInt(value))
        message.push({value: value, name: name})
      }
    });
    setSendOrder(message);
    setTotal(calculateTotal);
  }
  useEffect(() => {
    calculatePriceAndOrder();  
    return
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order])

  const sendMessage = () => {
    const message: string[] = [];
    sendOrder.map(({value, name}) => {
      const msg = value + ' ' + name;
      message.push(msg);      
    })
    const phoneNumber = '3755712831'; // Número de teléfono al que se enviará el mensaje
    const sendMessage = 'Hola, me gustaría encargar: ' + message.join(', ') + '. Muchas gracias :)'; // Mensaje a enviar  
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(sendMessage)}`;
    window.open(url);
  };
  
  return (
    <Box sx={{
      left: isMobile ? 'unset' : '56vw',
      width: isLarge ? isMobile ? 'unset' : '20em' : '25em',
      position: isMobile ? 'relative' : 'absolute',
      marginTop: isMobile ? '30px' : '',
      border: '1px dashed black',
      height: '300px',
      padding: '20px',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    // eslint-disable-next-line react/jsx-no-duplicate-props
    }}>
      <Typography className='title' variant='h5'>
        Su pedido:
      </Typography> 
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {
          order.map(({value ,name, index, price}) => (
            value !== ''
            &&
            <Box key={index} sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px dashed rgba(28, 24, 36, 0.2)'
            }}>
              <Typography>
                {`${name} x${value}`}
              </Typography>
              <Typography>
                ${(price * parseInt(value))}
              </Typography>
            </Box> 
          ))
        }
      </Box>
      <Box className='total'>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px dashed rgba(28, 24, 36, 0.2)',
          padding: '10px'
        }}>
          <Typography variant='h6'>
            Total:
          </Typography>
          <Typography variant='h6'>
            ${total}
          </Typography>        
        </Box>
        <Button disabled={sendOrder.length === 0 ? true : false} onClick={sendMessage} variant="contained" fullWidth sx={{
          marginTop: '12px'
        }}>Enviar Pedido</Button>
      </Box>
    </Box>
  )
}
