import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import './ProductDetails.css';

const Layout = () => {
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // background: 'linear-gradient(to bottom, #FF5943 45%, #E5E5E5 45%)',
        minHeight: '100vh'
      }}
    >
      <Header />
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
