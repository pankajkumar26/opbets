import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid, Button, Box, Paper, Typography } from '@mui/material';
import esports_stadium_img from './esports_stadium.jpeg';
import sportsbook_img from './sportsbook.jpeg';
import forex_img from './forex_pic.jpeg';
import { styled } from '@mui/material/styles';

// Styled components
const Header = styled('h1')(({ theme }) => ({
  fontSize: '1.2rem',
  marginBottom: '0.15rem',
  marginTop: '0.5rem',
  alignSelf: 'center',
}));

const CarouselPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  width: '100%',
  margin: 'auto',
}));

const Paragraph = styled('p')(({ theme }) => ({
  marginTop: '0.15rem',
  marginBottom: '0.15rem',
  fontSize: '0.9rem',
  alignSelf: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  fontSize: '0.9rem',
  marginTop: '0.15rem',
  marginBottom: '0.15rem',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function LandingPageCarousel(props) {
  const items = [
    {
      image: esports_stadium_img,
      name: 'Esports viewership is blowing up! Sporting events numbers are proof',
      description:
        'LoL WorldsChampionship: 23 million' +
        '   ·  ' +
        'NHL StanleyCup: 1 million' +
        '   ·  ' +
        'MLB Finals: 9.78 million ',
      button_text: 'Wager on Esports!',
    },
    {
      image: sportsbook_img,
      name: 'The truth behind traditional sportsbooks',
      description:
        'Most sportsbooks remove at least 5% of the probability spectrum. No one can beat that much implied probability removal long term',
      button_text: 'Find the truth!',
    },
    {
      image: forex_img,
      name: 'The forex/stock exchanges approach',
      description:
        'All modern markets incentives users to add liquidity, and charges more for removing liquidity. ie. The Bid/Ask systems that HFTs operate on',
      button_text: 'OPBets Approach',
    },
  ];

  return (
    <Carousel alignItems="center" alignContent="center" justify="center">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <CarouselPaper>
      <Box
        className="carousel-main-box"
        id="carousel-main-box"
        display="flex"
        flexDirection="column"
        height="100%"
        width="100%"
      >
        <Box
          height="400px"
          width="900px"
          display="flex"
          flexDirection="column"
          alignSelf="center"
          className="carousel-img-container"
          borderRadius="1rem"
          overflow="hidden"
        >
          <img
            alignSelf="center"
            className="carousel-img"
            alt={props.item.name}
            src={props.item.image}
          />
        </Box>
        <Box className="carousel-header-box" alignSelf="center">
          <Header>{props.item.name}</Header>
        </Box>
        <Box alignSelf="center">
          <Paragraph>{props.item.description}</Paragraph>
        </Box>
        <Box alignSelf="center">
          <StyledButton
            className='cursor-pointer'
            href="https://www.youtube.com/watch?v=QJMexFQzM8U"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.item.button_text}
          </StyledButton>
        </Box>
      </Box>
    </CarouselPaper>
  );
}