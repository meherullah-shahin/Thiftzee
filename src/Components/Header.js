import { useState } from 'react';
import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material';
import { AccountCircleOutlined, Menu as MenuIcon } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../resources/thriftzee-logo.svg';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Auctions', 'Buy', 'Blog', 'Contact'];
const settings = ['My account', 'Bids', 'Purchase history', 'Logout'];

const ResponsiveAppBar = props => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const handleOpenNavMenu = page => {
    setShowDrawer(!showDrawer);
    navigate('/' + page.toLowerCase(), { replace: true });
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: 'none', bgcolor: 'primary.main', pt: '1%' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container className="asdf" justifyContent="space-between">
            <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
              <img src={logo} alt="logo" />
            </Grid>
            <Grid
              item
              sx={{ display: { xs: 'flex', md: 'none' } }}
              justifyContent="flex-start"
              alignItems="center"
            >
              <ArrowBackIcon />
            </Grid>
            <Grid
              item
              sx={{ display: { xs: 'flex', md: 'none' } }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography color="white" variant="h6" noWrap>
                ThriftD
              </Typography>
            </Grid>
            <Grid
              item
              sx={{ display: { xs: 'flex', md: 'none' } }}
              justifyContent="flex-end"
              alignItems="center"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                className="mobile-only"
                anchor="right"
                open={showDrawer}
                onClose={handleOpenNavMenu}
                PaperProps={{
                  sx: { width: '60%', bgcolor: '#193C46' }
                }}
              >
                <List disablePadding>
                  <ListItem sx={{ justifyContent: 'flex-end', py: 5 }}>
                    <CloseIcon
                      sx={{ cursor: 'pointer', color: 'white' }}
                      onClick={handleOpenNavMenu}
                    />
                  </ListItem>
                  <Divider sx={{ bgcolor: '#2C5763' }} />
                  {settings.map((text, index) => (
                    <React.Fragment key={text}>
                      <ListItem key={text}>
                        <ListItemButton>
                          <ListItemText
                            primary={
                              <Typography
                                type="body2"
                                style={{ color: '#FFFFFF' }}
                              >
                                {text}
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider key={index} sx={{ bgcolor: '#2C5763' }} />
                    </React.Fragment>
                  ))}
                </List>
              </Drawer>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Grid container justifyContent="flex-end">
                {pages.map(page => (
                  <Button
                    key={page}
                    onClick={() => handleOpenNavMenu(page)}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      textTransform: 'none'
                    }}
                  >
                    {page}
                  </Button>
                ))}

                <Box sx={{ display: 'flex' }}>
                  <Tooltip
                    title="Open settings"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <IconButton onClick={handleOpenUserMenu}>
                      <AccountCircleOutlined
                        sx={{ color: 'white', fontSize: '30px' }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map(setting => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
