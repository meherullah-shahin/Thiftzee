import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import ProductsLayout from './Layouts/ProductsLayout';
import ProductDetailsLayout from './Layouts/ProductDetailsLayout';
import Login from './Modules/Login/Login';
import ProductLists from './Modules/ProductLists/ProductLists';
import ProductDetails from './Modules/ProductDetails/ProductDetails';
import Dashboard from './Modules/Dashboard';
import About from './Modules/About';
import Contact from './Modules/Contact';
import HistoryComponent from './Components/history/HistoryComponent';
import ContactCard from './Modules/ContactCard/ContactCard';

const AppRouter = props => {
  console.log(props);
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<ContactCard />}/>
        {/* <Route exact path="/" element={<AuthLayout />}>
          <Route exact index element={<Login />} />
        </Route> */}
        <Route exact path="Home" element={<ProductsLayout />}>
          <Route exact index element={<Dashboard />} />
        </Route>
        <Route
          exact
          path="products"
          key="all_products"
          element={<ProductsLayout />}
        >
          <Route exact index element={<ProductLists />} />
        </Route>
        <Route
          exact
          path="auctions"
          key="auction_products"
          element={<ProductsLayout />}
        >
          <Route exact index element={<ProductLists type="auction" />} />
        </Route>
        <Route
          exact
          path="buy"
          key="buy_now_products"
          element={<ProductsLayout />}
        >
          <Route exact index element={<ProductLists type="buy" />} />
        </Route>
        <Route exact path="about" element={<ProductsLayout />}>
          <Route exact index element={<About />} />
        </Route>
        <Route exact path="contact" element={<ProductsLayout />}>
          <Route exact index element={<Contact />} />
        </Route>
        <Route exact path="product/:id" element={<ProductDetailsLayout />}>
          <Route exact index element={<ProductDetails />} />
        </Route>
        <Route path="bidHistory" element={<HistoryComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
