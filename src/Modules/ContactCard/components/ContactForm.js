import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContactTextField from './ContactTextField';
import '../index.css'

export default function ContactForm() {
  return (
      <Box>
          <Typography
        sx={{
          fontSize: {lg:'20px',xs:'16px'},
          fontWeight: '600',
          letterSpacing: '-.3px',
          color: '#193C46',
          pb: 2
        }}
      >
        Send us a message and we will get right back to you
      </Typography>
      <Box>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Grid container spacing={0}>
          <Grid items xs={12} md={6} >
            <ContactTextField label="First Name" />
          </Grid>
          <Grid items xs={12} md={6}>
            <ContactTextField label="Last Name" />
          </Grid>
        </Grid>
      </Box>
      <ContactTextField label="Email" />
      <ContactTextField label="Phone" />
      <Box className='test'>
      <TextField
        sx={{
          p: '8px',
          my: 1,
        }}
        fullWidth
        multiline={true}
        rows={3}
        label='Message'
      />
      </Box>
      
      <Button variant='contained' sx={{
          borderRadius: 6,
          px: 4,
          py:1,
          m:1
      }}> <b>Submit</b></Button>
      
    </Box>
      </Box>
   
  );
}
