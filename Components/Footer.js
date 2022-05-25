import { Box, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import {
  FacebookOutlined,
  Twitter,
  LinkedIn,
  Instagram
} from '@mui/icons-material';

const pages = ['Home', 'About', 'Auctions', 'Buy', 'My Account'];

const Footer = props => {
  return (
    <Box {...props}>
      <Grid
        container
        spacing={2}
        sx={{ width: '60%', py: '2%', textAlign: 'left' }}
      >
        <Grid container item xs={4} alignItems="center">
          <div>
            <Typography variant="h4" component="h2" color="white">
              ThriftD
            </Typography>
            <Typography variant="body1" component="p" color="white">
              © 2022 thriftd.com. Privacy Policy
            </Typography>
          </div>
        </Grid>
        <Grid container item xs={4} alignItems="center" justifyContent="center">
          <ul>
            {pages.map(page => (
              <li key={page}>
                <Link
                  href="#"
                  underline="none"
                  color="white"
                  sx={{ ':hover': { color: 'primary.main' } }}
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid container item xs={4}>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="facebook">
              <FacebookOutlined sx={{ color: 'white' }} />
            </IconButton>
            <IconButton aria-label="twitter">
              <Twitter sx={{ color: 'white' }} />
            </IconButton>
            <IconButton aria-label="linkedin">
              <LinkedIn sx={{ color: 'white' }} />
            </IconButton>
            <IconButton aria-label="instagram">
              <Instagram sx={{ color: 'white' }} />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
