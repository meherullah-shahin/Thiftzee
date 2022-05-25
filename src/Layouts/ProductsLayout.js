import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Newsletter from '../Components/Newsletter';
import Typography from '@mui/material/Typography';
import heroImage from '../resources/hero.svg';
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import bg from '../resources/bg.png';
import Grid from '@mui/material/Grid';
const Layout = props => {
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // minHeight: '100vh',
        // backgroundColor: '#FF5943'
        backgroundImage: `url(${bg})`,
        width: '100%'
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ maxWidth: '1240px', padding: '10px 5%' }}
      >
        <Header />
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ maxWidth: '1240px', padding: '0 5%' }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            paddingLeft: '16px'
          }}
        >
          <div
            className="product-list-header"
            style={{
              maxWidth: '37%',
              marginTop: '3%',
              marginBottom: '15%'
            }}
          >
            <Typography
              className="banner-title"
              // variant="h3"
              component="div"
              color="white"
              sx={{
                width: '800px',
                fontWeight: '800',
                fontSize: '50px',
                lineHeight: '59px',
                textAlign: 'left',
                letterSpacing: '-0.333333px'
              }}
            >
              Discover, collect, and buy{<br />} extraordinary collections
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              color="white"
              sx={{
                width: '104%',
                textAlign: 'left',
                height: '80px'
              }}
            ></Typography>
            <div
              style={{
                display: 'flex',
                marginTop: '2%'
              }}
            >
              <Button
                type="submit"
                text="Explore"
                sx={{
                  textTransform: 'none',
                  borderRadius: '30px',
                  width: '25%',
                  height: '50px',
                  fontSize: '18px',
                  fontWeight: '700',
                  mr: '2%',
                  backgroundColor: '#193C46'
                }}
              />
              <Button
                type="submit"
                text="Create"
                sx={{
                  textTransform: 'none',
                  borderRadius: '30px',
                  width: '25%',
                  height: '50px',
                  fontSize: '18px',
                  fontWeight: '700',
                  backgroundColor: '#193C46'
                }}
              />
            </div>
          </div>
          <img
            className="banner-img"
            src={heroImage}
            alt="main"
            style={{ marginTop: '-20px', marginLeft: '28px', width: '60%' }}
          />
        </div>
      </Grid>
      <Outlet />
      <Newsletter />
      <Footer
        sx={{
          width: '100%',
          bgcolor: 'secondary.main',
          display: 'flex',
          justifyContent: 'center'
        }}
      />
    </div>
  );
};

export default Layout;
