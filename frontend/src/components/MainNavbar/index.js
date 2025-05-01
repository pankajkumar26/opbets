import PropTypes from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openSignup, openLogin } from '../../store/modal';
import LogoutButton from '../auth/LogoutButton';
import { AppBar, Box, Button, Chip, Divider, IconButton, Link, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from './Menu';
import Logo from './Logo';
import OPBLOGO from './OPBLOGO.png';
import './MainNavbar.css';

const MainNavbar = (props) => {
  const { onSidebarMobileOpen, authenticated, setAuthenticated } = props;
  const dispatch = useDispatch();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        {isMdDown && (
          <IconButton color="inherit" onClick={onSidebarMobileOpen}>
            <MenuIcon fontSize="small" />
          </IconButton>
        )}
        {isLgUp && (
          <RouterLink to="/">
            <Box sx={{ marginTop: '5px', height: 60, width: 60 }}>
              <img className="logo-image" src={OPBLOGO} alt="OPB Logo" />
            </Box>
          </RouterLink>
        )}
        <Box sx={{ flexGrow: 1 }} />
        {isLgUp && (
          <>
            {authenticated && (
              <>
                <Link
                  color="textSecondary"
                  component={RouterLink}
                  to="/events/all"
                  underline="none"
                  variant="body1"
                  mr={4}
                >
                  Events
                </Link>
                <Link
                  component={RouterLink}
                  color="textSecondary"
                  to="/dashboard"
                  id="nav-login__button"
                  underline="none"
                  variant="body1"
                >
                  Dashboard
                </Link>

                <Divider
                  orientation="vertical"
                  sx={{
                    height: 32,
                    mx: 2,
                    mr: 3,
                    ml: 3,
                  }}
                />
                <LogoutButton setAuthenticated={setAuthenticated} />
              </>
            )}
            {!authenticated && (
              <>
                <Link
                  color="textSecondary"
                  href="https://www.youtube.com/watch?v=QJMexFQzM8U"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  variant="body1"
                  mr={6}
                >
                  ABOUT
                </Link>
                <Link
                  color="textSecondary"
                  onClick={() => dispatch(openLogin())}
                  id="nav-login__button"
                  underline="none"
                  variant="body1"
                >
                  LOGIN
                </Link>
                <Divider
                  orientation="vertical"
                  sx={{
                    height: 32,
                    mx: 2,
                    mr: 3,
                    ml: 3,
                  }}
                />
                <Button
                  color="primary"
                  onClick={() => dispatch(openSignup())}
                  size="medium"
                  target="_blank"
                  variant="contained"
                >
                  JOIN
                </Button>
              </>
            )}
          </>
        )}
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
};

export default MainNavbar;