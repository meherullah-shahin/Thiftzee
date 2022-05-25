import {
  Box,
  Grid,
  Typography,
  Stack,
  Container,
  IconButton
} from '@mui/material';
import {
  FacebookOutlined,
  Twitter,
  LinkedIn,
  Instagram
} from '@mui/icons-material';
const FooterAuth = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        height: '50px',
        width: '100%',
        bgcolor: 'secondary.main',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body1" component="div" color="white">
              © 2022 thriftzee.com. Privacy Policy
            </Typography>
          </Grid>
          <Grid item>
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
      </Container>
    </Box>
  );
};

export default FooterAuth;
