import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LocationCheckboxes from './components/LocationCheckboxes';
import Button from '../../Components/Button';
import { getStoreLocationsData } from './actions';
import { getProductsData } from '../ProductLists/actions';
import { googleMapApi } from '../../configs/config';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import logo from '../../resources/logo_white.png';
import { Box, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import './index.css';
const pages = ['Home', 'Auctions', 'Buy', 'Contact'];

const Map = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const login = useSelector(state => state.loginReducer);
  const [loadGMap, setLoadGMap] = useState(true);
  const [coords, setCoords] = useState({});
  const storeReducer = useSelector(state => state.storeReducer);
  const productsReducer = useSelector(state => state.productsReducer);
  const [userLat, setUserLat] = useState(null);
  const [userLong, setUserLong] = useState(null);
  const [storeLocations, setStoreLocations] = useState([]);
  const [locationIds, setLocationIds] = useState([]);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleChange = e => {
    if (e.target.checked) {
      setLocationIds([...locationIds, e.target.value]);
    }

    if (!e.target.checked) {
      setLocationIds(
        locationIds.filter(location => location !== e.target.value)
      );
    }
  };

  const handleClick = () => {
    dispatch(getProductsData(locationIds));
  };

  useEffect(() => {
    if (productsReducer.status === 'success') {
      navigate('/products');
    }
  }, [navigate, productsReducer.status]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setCoords({
          latitude,
          longitude
        });
        // if (latitude && longitude && loadGMap) {
        //   setLoadGMap(false);
        //   // loadMap();
        // }
      });
      setUserLat(latitude);
      setUserLong(longitude);

      if (!storeReducer.status && userLat && userLong) {
        dispatch(getStoreLocationsData(userLat, userLong));
      }
    });
  }, [dispatch, storeReducer, userLat, userLong]);

  useEffect(() => {
    const loadMap = () => {
      function initMap() {
        const user = { lat: userLat, lng: userLong };
        const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: user
        });
        const contentString =
          '<div id="content" style="background-color:#ff5943;color:#fff;padding:10px">' +
          '<h1 id="firstHeading" class="firstHeading" >Thrift Store 1</h1>' +
          '<div id="bodyContent">' +
          '<p>A charity shop, thrift shop or thrift store or opportunity shop is a retail establishment run by a charitable organization to raise money. Charity shops are a type of social enterprise. <a href="https://en.wikipedia.org/wiki/Charity_shop">"See more" </a></p>' +
          '</div>' +
          '</div>';
        const infowindow = new window.google.maps.InfoWindow({
          content: contentString
        });
        // The marker, positioned at Uluru
        const marker = new window.google.maps.Marker({
          title: 'My Location',
          position: user,
          map: map
        });
        storeLocations.forEach(element => {
          const storePosition = { lat: element.lat, lng: element.lon };
          new window.google.maps.Marker({
            title: element.name,
            position: storePosition,
            map
          });
        });

        marker.addListener('click', () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false
          });
        });
        console.log('Map loaded');
      }
      if (!window.google) {
        const gscript = document.createElement('script');
        gscript.src = googleMapApi;
        gscript.async = true;
        gscript.defer = true;

        document.body.appendChild(gscript);
      }
      window.initMap = initMap;
      console.log('MAP initiated');
    };
    if (coords.latitude && coords.longitude && loadGMap) {
      console.log('Loading map');
      setLoadGMap(false);
      loadMap();
    }
  }, [loadGMap, coords, userLat, userLong, storeLocations]);

  useEffect(() => {
    if (storeReducer.status) {
      setStoreLocations(storeReducer.storeLocations);
    }
  }, [storeReducer]);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Dialog
        className="location-picker"
        open={true}
        // onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth={'sm'}
        fullWidth
        sx={{
          margin: 0
        }}
      >
        <div className="location-picker-container">
          <DialogTitle id="scroll-dialog-title" sx={{ textAlign: 'center' }}>
            <div className="mobile-only" style={{ marginBottom: '10px' }}>
              <Grid container spacing={1}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ height: '40px', margin: 'auto' }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon style={{ color: '#fff' }} />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' }
                      }}
                    >
                      {pages.map(page => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Grid>
              </Grid>
            </div>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: '700' }}
              className="location-picker-title"
            >
              Pick a Location
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ fontSize: '14px', fontWeight: 'normal' }}
              className="location-picker-description"
            >
              Select your nearby stores to see available products.
              <br />
              <br />
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={0} md={1.5} className="gap"></Grid>
              <Grid item xs={12} md={3}>
                <Paper
                  className="search-input-container"
                  component="form"
                  sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 200,
                    height: 25,
                    border: '1px solid #000',
                    borderRadius: '25px'
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: 10, color: '#000' }}
                    placeholder="search for a location"
                    inputProps={{ 'aria-label': 'search for a location' }}
                  />

                  <Divider
                    sx={{ height: 28, m: 0.5, color: '#000' }}
                    orientation="vertical"
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: '3px' }}
                    aria-label="search"
                  >
                    <SearchIcon className="search-icon" fontSize="15px" />
                  </IconButton>
                </Paper>
              </Grid>
              <Grid item xs={0} md={1.5} className="gap"></Grid>
              <Grid item xs={12} md={3}>
                <Paper
                  className="my-location"
                  component="form"
                  sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 200,
                    height: 25,
                    border: '1px solid #000',
                    borderRadius: '25px'
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: 10, color: '#000' }}
                    value="Use my current location"
                    inputProps={{ disabled: true }}
                  />

                  <Divider
                    sx={{ height: 28, m: 0.5, color: '#000' }}
                    orientation="vertical"
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: '3px' }}
                    aria-label="search"
                  >
                    <SendIcon className="send-icon" fontSize="15px" />
                  </IconButton>
                </Paper>
              </Grid>
              <Grid item xs="auto" md={2} className="gap"></Grid>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <div
              id="map"
              style={{
                width: '100%',
                height: '250px',
                border: '10px solid #E3E3E3'
              }}
            ></div>
          </DialogContent>
        </div>
        <DialogContent>
          {!userLat || !userLong ? (
            <div style={{ textAlign: 'center' }}>
              Please allow location permission to see your nearby store
            </div>
          ) : storeReducer.status === 'success' && !storeLocations.length ? (
            <></>
          ) : storeLocations.length ? (
            <Typography
              variant="h6"
              component="h2"
              sx={{ textAlign: 'left', fontSize: '18px', marginTop: '10px' }}
            >
              Nearby Locations:
            </Typography>
          ) : (
            <></>
          )}
          {storeReducer.status === 'success' && !storeLocations.length ? (
            <div style={{ textAlign: 'center' }}>No store found</div>
          ) : (
            <LocationCheckboxes
              locations={storeLocations}
              handleChange={handleChange}
            />
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10px'
            }}
          >
            <Button
              className="pick-location"
              type="submit"
              text="Confirm"
              sx={{
                textTransform: 'none',
                borderRadius: '30px',
                height: '50px',
                fontSize: '14px',
                fontWeight: '700',
                width: '50%'
              }}
              onClick={handleClick}
              disabled={!locationIds.length}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Map;
