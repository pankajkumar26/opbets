import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupModal from './components/SignupModal';
import LoginModal from './components/LoginModal';

import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './services/auth';
import * as sessionActions from './store/session';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material';
import { createTheme } from './theme';
// import GlobalStyles from './components/GlobalStyles';
import useSettings from './hooks/useSettings';
import SettingsMenu from './components/SettingsMenu';

import MainNavbar from './components/MainNavbar';

import PublicLandingPage from './components/PublicLandingPage';
import Dashboard from './components/Dashboard';
import EventsPage from './components/EventsPage';
import MatchedWagersPage from './components/MatchedWagersPage';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { settings } = useSettings();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme,
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainNavbar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />

        <LoginModal
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        <SignupModal
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<PublicLandingPage />}
          />

          <Route
            exact
            path="/events/:query_str"
            element={
              <EventsPage
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/dashboard/matched_wagers"
            element={
              <ProtectedRoute
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              >
                <MatchedWagersPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <SettingsMenu />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;