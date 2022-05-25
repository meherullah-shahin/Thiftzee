import { Button, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import dollar from '../../resources/dollar.png';
import TimeIcon from '../../resources/time.png';
import BidCountdown from './components/BidCountdown';
import './index.css';

const ProductDescription = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '95%',
  paddingTop: '12%'
});

const PrimarySpan = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600
}));

const SecondarySpan = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600
}));

const BidDetails = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '15px auto',
  borderRadius: '30px',
  borderColor: theme.palette.secondary.main,
  borderWidth: '1px',
  borderStyle: 'solid',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px'
}));

const PlaceBidButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '30px',
  margin: '10px 0',
  height: '50px',
  fontSize: '18px',
  fontWeight: '700',
  color: 'white',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#b23e2e'
  }
}));

const BidContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    backgroundColor: 'white'
  },
  backgroundColor: 'transparent',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '10px',
  paddingTop: '2%',
  paddingBottom: '2%'
}));

const ProductDetails = () => {
  const { productDetails } = useSelector(state => state.productDetailsReducer);
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    setProductDetail(productDetails);
  }, [productDetails]);

  const handleClick = () => {
    console.log('Place Bid');
  };

  return (
    <div
      style={{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography
        variant="body1"
        component="h2"
        color="white"
        sx={{
          fontSize: {
            sm: '18px',
            md: '50px'
          },
          fontWeight: 700,
          width: '100%',
          textAlign: 'left',
          ml: '10%',
          mb: '5%'
        }}
      >
        Place a Bid
      </Typography>
      <BidContainer>
        <div
          className="product-image"
          style={{
            backgroundColor: 'white',
            padding: '3%',
            width: '90%',
            height: '250px',
            backgroundImage: `url(${productDetails.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '10px solid white',
            borderRadius: '10px'
          }}
        ></div>
        <ProductDescription>
          <Typography
            variant="body1"
            component="h2"
            sx={{
              fontWeight: 700
            }}
          >
            {productDetail.name}
          </Typography>
          <Typography variant="body2" component="h2" sx={{ pb: '2%' }}>
            {productDetail.details}
          </Typography>
          <Typography variant="body2" component="h2">
            Shop: <PrimarySpan>{productDetail.storeName}</PrimarySpan>
          </Typography>
          <BidDetails>
            <Typography variant="body2" component="h2">
              Current Bids:{' '}
              <SecondarySpan>${productDetail.startingBid}</SecondarySpan>
            </Typography>
            <Typography variant="body2" component="h2">
              <img src={TimeIcon} alt="time" />{' '}
              <BidCountdown endDate={Date.now()} />
            </Typography>
          </BidDetails>
          {productDetail.type === 'auction' ? (
            <PlaceBidButton onClick={handleClick}>Place a Bid</PlaceBidButton>
          ) : (
            <PlaceBidButton onClick={handleClick}>Buy</PlaceBidButton>
          )}
        </ProductDescription>
      </BidContainer>
    </div>
  );
};

export default ProductDetails;
