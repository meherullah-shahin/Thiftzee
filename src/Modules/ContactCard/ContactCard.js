import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContactCreds from './components/ContactCreds';
import ContactForm from './components/ContactForm';
import './index.css';

export default function ContactCard() {
  return (
    <Box
      sx={{
        backgroundColor: '#FF5943',
        height: '100vh',
        pt: 12,
        px: 8
      }}
    >
      <Box
        className="contactCard"
        sx={{
          height: '500px',
          borderRadius: '10px',
          maxWidth: '1240px'
        }}
      >
        <Box
          sx={{
            py: 4,
            px: 6,
            backgroundColor: '#193C46',
            borderRadius: '10px 10px 0px 0px'
          }}
        >
          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: { lg: '50px', xs: '36px' },
              fontWeight: '800'
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: { lg: '18px', xs: '16px' },
              letterSpacing: '.3px',
              lineHeight: '30px'
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </Typography>
        </Box>
        <Grid sx={{ p: 8, backgroundColor: '#FFFFFF' }} container spacing={0}>
          <Grid items md={7}>
            <Box>
              <ContactForm />
            </Box>
          </Grid>
          <Grid items md={5}>
            <Box
              py={{
                md: 7,
                xs: 6
              }}
              px={{
                xs:4
              }}
            >
              <ContactCreds />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
