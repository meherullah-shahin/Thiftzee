import { Box, Typography } from '@mui/material';
import React from 'react';
import cellIcon from '../assets/cell.svg';
import mailIcon from '../assets/mail.svg';

export default function ContactCreds() {
  return (
    <Box sx={{
        // px:8,
        // py:7
    }}>
      <Box className='contactCreds' sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          p:1
      }}>
        <Box mx={2} component={'img'} src={cellIcon} alt="Mobile Icon"></Box>
        <Typography sx={{
            fontWeight: 'bold'
        }}>
          Phone: <span style={{ color: '#FF5943' }}>+1 (204) 312 8405</span>
        </Typography>
      </Box>

      <Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          p:1
      }}>
          <Box mx={2} component={'img'} src={mailIcon} alt="Mobile Icon"></Box>
          <Typography sx={{
            fontWeight: 'bold'
        }}>
            Email: <span style={{ color: '#FF5943' }}> info@thriftzee.ca</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
