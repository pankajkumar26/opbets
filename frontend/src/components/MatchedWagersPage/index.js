import React from 'react';
import { useMediaQuery, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SideBar from '../SideBar';
import MatchedWagersContainer from './MatchedWagersContainer';

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

export default function MatchedWagersPage() {
  const isLgUp = useMediaQuery((theme) => theme.breakpoints.up('lg')); // Check for large screens

  return (
    <>
      {isLgUp && (
        <EventsMainContainer elevation={0}>
          <SideBar />
          <Header>Matched Wagers</Header>
          <MatchedWagersContainer />
        </EventsMainContainer>
      )}
    </>
  );
}