import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Grid from '@mui/material/Grid';
// import dealsIcon from '../../resources/deals.png';
import filterIcon from '../../resources/filter.svg';
import sortIcon from '../../resources/sort.svg';
import ProductCards from './components/ProductCards';

import './ProductLists.css';

const ProductLists = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        style={{
          maxWidth: '1240px',
          padding: '0 5%',
          marginTop: '20px',
          marginBottom: '20px'
        }}
        className="filter-container"
      >
        <Grid
          item
          spacing={{ xs: 2, md: 2 }}
          md={6}
          sm={12}
          xs={12}
          style={{
            textAlign: 'left',
            margin: '0px',
            paddingTop: 0
          }}
          className="search-container"
        >
          <Input
            className="search"
            placeholder="Search Listings"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            sx={{ width: '65%', marginTop: '16px' }}
          />
        </Grid>
        <Grid
          item
          spacing={{ xs: 2, md: 2 }}
          md={6}
          sm={12}
          xs={12}
          style={{ textAlign: 'right' }}
          className="product-filter"
        >
          <Button
            className="icon-responsive"
            type="submit"
            text="Filter"
            variant="outlined"
            startIcon={
              <img
                className="img-responsive"
                id="filter-icon-color"
                src={filterIcon}
                height="12px"
                alt="filter"
              />
            }
            sx={{
              textTransform: 'none',
              borderRadius: '30px',
              height: '40px',
              width: '15%',
              fontSize: '15px',
              border: {
                sm: '1px solid white',
                md: '1px solid #193C46'
              },
              '&.MuiButtonBase-root:hover': {
                border: {
                  sm: '1px solid white',
                  md: '1px solid #193C46'
                }
              },
              ml: '2%',
              color: {
                sm: 'white',
                md: '#193C46'
              }
            }}
          />
          <Button
            className="icon-responsive"
            type="submit"
            text="Sort"
            variant="outlined"
            startIcon={
              <img className="img-responsive" src={sortIcon} alt="sort" />
            }
            sx={{
              textTransform: 'none',
              borderRadius: '30px',
              height: '40px',
              width: '15%',
              fontSize: '15px',
              border: {
                sm: '1px solid white',
                md: '1px solid #193C46'
              },
              '&.MuiButtonBase-root:hover': {
                border: {
                  sm: '1px solid white',
                  md: '1px solid #193C46'
                }
              },
              ml: '2%',
              color: {
                sm: 'white',
                md: '#193C46'
              }
            }}
          />
        </Grid>
      </Grid>
      <ProductCards />
    </>
  );
};

export default ProductLists;
