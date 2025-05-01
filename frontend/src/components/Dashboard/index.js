import React from 'react';
import { Paper, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import SideBar from '../SideBar';
import ActiveWagersTableContainer from './ActiveWagersTableContainer';

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

export default function Dashboard() {
  const isLgUp = useMediaQuery((theme) => theme.breakpoints.up('sm')); // Check for large screens

  return (
    <>
      {isLgUp && (
        <EventsMainContainer elevation={0}>
          <SideBar />
          <Header>Dashboard</Header>
          <ActiveWagersTableContainer />
        </EventsMainContainer>
      )}
    </>
  );
}