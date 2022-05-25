import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { setProductDetails } from '../../ProductDetails/reducer';
import './ProductCards.css';

const ProductCards = () => {
  const products = useSelector(state => state.productsReducer);
  const [productsList, setProductsList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.status === 'success') {
      setProductsList(products.products);
    }
  }, [products]);

  const handleClick = product => {
    dispatch(setProductDetails(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2 }}
      // columns={{ xs: 4, sm: 8, md: 12 }}
      style={{ padding: '0 5%', maxWidth: '1240px' }}
      className="products-container"
    >
      {productsList.map(product => (
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          lg={4}
          key={product.id}
          // sx={{ display: 'flex', justifyContent: 'center' }}
          style={{ borderRadius: '15px' }}
        >
          {product.type === 'auction' ? (
            <Card sx={{ width: '100%' }}>
              <CardMedia
                component="img"
                // height="300"
                image={product.image}
                alt={product.name}
                sx={{ padding: '5% 5% 0 5%', borderRadius: '15px' }}
                onClick={() => handleClick(product)}
              />
              <CardContent
                sx={{ textAlign: 'left', height: '100px' }}
                className="product-text"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  onClick={() => handleClick(product)}
                  className="product-title"
                >
                  {product.productName}{' '}
                  <span className="store-name">{product.storeName}</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  className="product-details"
                >
                  Current Bids:{' '}
                  <span style={{ color: '#FF5943' }}>{product.currentBid}</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  className="product-details"
                >
                  Auction End In:{' '}
                  <span style={{ color: '#FF5943' }}>{product.endDate}</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    p: '2%'
                  }}
                >
                  <Typography
                    variant="h5"
                    color="secondary.main"
                    sx={{ fontWeight: 700 }}
                  >
                    $ {product.price | 0}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: '#193C46', textTransform: 'none' }}
                    onClick={() => handleClick(product)}
                  >
                    Place a Bid
                  </Button>
                </Box>
              </CardActions>
            </Card>
          ) : (
            <Card>
              <CardMedia
                component="img"
                // height="300"
                image={product.image}
                alt={product.productName}
                sx={{ padding: '5% 5% 0 5%', borderRadius: '15px' }}
                onClick={() => handleClick(product)}
              />
              <CardContent
                sx={{ textAlign: 'left', height: '100px' }}
                className="product-text"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  onClick={() => handleClick(product)}
                  className="product-title"
                >
                  {product.productName}{' '}
                  <span className="store-name"> {product.storeName}</span>
                </Typography>
                <br />
                <br />
              </CardContent>
              <CardActions>
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    p: '2%'
                  }}
                >
                  <Typography
                    variant="h5"
                    color="secondary.main"
                    sx={{ fontWeight: 700 }}
                    className="product-details"
                  >
                    $ {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: '#193C46', textTransform: 'none' }}
                    onClick={() => handleClick(product)}
                  >
                    Buy
                  </Button>
                </Box>
              </CardActions>
            </Card>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCards;
