import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
// import Newsletter from '../Components/Newsletter';
// import Footer from '../Components/Footer';
import FooterAuth from '../Components/FooterAuth';

const Layout = () => {
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FF5943',
        height: '100vh'
      }}
    >
      <Header />
      <Outlet />
      <FooterAuth />
    </div>
  );
};

export default Layout;
