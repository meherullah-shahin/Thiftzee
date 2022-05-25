import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import WhiteBox from '../Components/WhiteBox';
import bg from '../resources/bg.png';
import Grid from '@mui/material/Grid';
const Layout = () => {
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        // backgroundColor: '#FF5943'
        backgroundImage: `url(${bg})`,
        width: '100%'
      }}
    >
      <Header />
      <Grid container spacing={1}>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>

      <WhiteBox />
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
