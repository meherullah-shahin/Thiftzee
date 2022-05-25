import React from 'react';
import { bidHistory } from '../../variables';
// import Header from '../Components/Header';
import { Grid, Box, Typography, Divider, Container } from '@mui/material';

const HistoryComponent = () => {
  console.log(bidHistory);
  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: '#193C46' }}>
        <Box p={2}>
          <Typography variant="h3" color="white">
            Purchase History
          </Typography>
          <Typography variant="body2" color="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Grid container p={2} flexDirection="column">
          {bidHistory.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item my={2}>
                <Grid container spacing={2}>
                  <Grid item flexShrink={0}>
                    <img
                      className="history-list-img"
                      src={item.image}
                      alt={item.productName}
                      style={{ height: '180px', width: '212px' }}
                    />
                  </Grid>
                  <Grid
                    item
                    flexGrow={1}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column'
                    }}
                  >
                    <Typography variant="body1" m={0}>
                      Date: {item.date}
                    </Typography>
                    <Typography variant="h6" m={0}>
                      {item.productName}
                    </Typography>
                    <Box m={0}>
                      <Typography variant="body1" m={0}>
                        Shop: {item.storeName}
                      </Typography>
                      <Typography variant="body1" m={0}>
                        Qnty: {item.quantity}
                      </Typography>
                      <Typography variant="body1" m={0}>
                        Price: {item.price}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HistoryComponent;
