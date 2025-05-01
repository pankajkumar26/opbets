import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import SideBar from '../SideBar';
import EventsContainer from './EventsContainer';
import WagerSlip from './WagerSlip';
import PositionedSnackbar from '../WagerSnackBar';

// Styled components
const EventsMainContainer = styled(Paper)(({ theme }) => ({
  marginLeft: '280px',
  backgroundColor: theme.palette.background.paper,
  width: 'calc(100% - 280px) !important',
  minHeight: '1500px',
}));

const Header = styled('h1')(({ theme }) => ({
  marginLeft: '2rem',
  paddingTop: '1rem',
}));

export default function EventsPage() {
  const theme = useTheme();
  const { query_str } = useParams();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg')); // Check for large screens

  let setDisplayStr = '';
  if (query_str === 'all') {
    setDisplayStr = 'Esports';
  } else if (query_str === 'app_academy') {
    setDisplayStr = 'App Academy';
  } else if (query_str === 'small_cap_crypto') {
    setDisplayStr = 'Small Cap Crypto';
  } else if (query_str === 'politics') {
    setDisplayStr = 'Politics';
  } else {
    setDisplayStr = query_str;
  }

  //*************************************** */

  setInterval(() => fetch('http://localhost:5000/api/betsapi/update_events'), 4000000);

  //*************************************** */
  return (
    <>
      {isLgUp && (
        <EventsMainContainer elevation={0}>
          <SideBar />
          <Header>Upcoming {setDisplayStr} Events</Header>
          <EventsContainer query_str={query_str} />
          <WagerSlip />
          <PositionedSnackbar />
        </EventsMainContainer>
      )}
    </>
  );
}