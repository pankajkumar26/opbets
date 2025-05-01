import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import LandingPageCarousel from './LandingPageCarousel';

import { testLoad } from '../../store/betsapi';

const useStyles = styled((theme) => ({
  span: { marginTop: '1rem', marginBot: '1rem', color: 'primaryMain' },
}));

export default function PublicLandingPage(props) {
  const dispatch = useDispatch();
  const betsapi = useSelector((state) => state.betsapi);

  console.log(props.theme);
  const handleTest = () => {
    dispatch(testLoad());
  };
  return (
    <Box
      component="div"
      overflow="visiable"
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <Box height="600px" mt="70px" width="80%" mx="auto">
        <Typography
          sx={{
            backgroundColor: 'background.paper',
            fontSize: '0.75rem',
            color: 'primary.main',
            marginTop: '.2rem',
            marginBottom: 0,
            textAlign: 'center',
            fontWeight: '500',
          }}
        >
          INTRODUCING
        </Typography>
        <Typography
          sx={{
            backgroundColor: 'background.paper',
            fontSize: '2rem',
            color: 'text.primary',
            marginTop: 0,
            marginBottom: '0.6rem',
            textAlign: 'center',
            fontWeight: '800',
          }}
        >
          The Worlds Only Esports Matchbook
        </Typography>
        <LandingPageCarousel />
      </Box>
      {/* <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          marginTop: '50px',
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        HELLO WORLD
      </Box> */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          marginTop: 0,
          height: 500,
        }}
      ></Box>
    </Box>
  );
}
